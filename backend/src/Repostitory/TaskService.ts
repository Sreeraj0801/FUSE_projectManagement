import mongoose, { Types } from "mongoose";
import { taskInterface } from "../Types/Task.types";
import { userTaskSchema } from "../Model/TaskSchema";

export class TaskService {
  async createTask(details: taskInterface) {
    try {
      const newArray = details.assignee?.map(
        (member) => new Types.ObjectId(member)
      );
      details.assignee = newArray as Types.ObjectId[]; // Add explicit type assertion
      return await userTaskSchema.create(details);
    } catch (error) {
      console.log("its the error from where we add new task Service", error);
      throw { msg: "something went wrong" };
    }
  }

  async findDuplicate({
    name,
    reporter,
    projectId,
  }: {
    name: string;
    reporter: string;
    projectId: string;
  }) {
    try {
      return await userTaskSchema.find({ reporter, name, projectId });
    } catch (error) {
      console.log(
        "its the error from where find duplicate task service",
        error
      );
      throw { msg: "something went wrong" };
    }
  }

  async fetchTasks(projectId: string) {
    try {
      return await userTaskSchema.aggregate([
        {
          $match: {
            projectId,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "assignee",
            foreignField: "_id",
            as: "assigneeDetails",
          },
        },
      ]);
    } catch (error) {
      console.log("its the error from where we fetch tasks ", error);
      throw { msg: "something went wrong" };
    }
  }

  //return userTaskSchema.findOneAndUpdate({_id:taskId,{ $or: [{ reporter:details.userId  }, { assignee:details.userId }] }})

  async updateStatus(details: {
    userId: string;
    taskId: string;
    status: string;
  }) {
    try {
      const taskId = new mongoose.Types.ObjectId(details.taskId);
      return userTaskSchema.findOneAndUpdate(
        {
          $and: [
            { _id: taskId },
            {
              $or: [{ assignee: details.userId }, { reporter: details.userId }],
            },
          ],
        },
        { $set: { status: details.status } }
      );
    } catch (error) {
      console.log("its the error from where we fetch tasks ", error);
      throw { msg: "task not updated" };
    }
  }

  async postComment(details: {
    userId: string;
    taskId: string;
    userName: string;
    comment: string;
  }) {
    console.log(details);

    try {
      const _id = new mongoose.Types.ObjectId(details.taskId);
      console.log(_id);

      const result = await userTaskSchema.updateOne(
        { _id },
        {
          $push: {
            comments: {
              reporterId: new mongoose.Types.ObjectId(details.userId),
              reporterName: details.userName,
              comment: details.comment,
              time: new Date(),
            },
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log("its the error from where we post comment : ", error);
      throw { msg: "unable to post comment" };
    }
  }

  async getAllComments(taskId: string) {
    try {
      const response = await userTaskSchema.findById({ _id: taskId });
      if (response?.comments) {
        const sortedComments = response.comments.sort(
          (a, b) => b.time - a.time
        );
        return sortedComments;
      }
      throw { msg: "no comments" };
    } catch (error) {
      console.log("its the error from where fetch all the tasks :", error);
      throw { msg: "unable to fetch comments" };
    }
  }
  async deleteTask(taskId: string) {
    try {
      await userTaskSchema.deleteOne({ _id: taskId });
      return "succesfully deleted";
    } catch (error) {
      console.log("its the error from we delet task :", error);
      throw { msg: "unable to delete task" };
    }
  }

  async getProjectProgress(projectId: string) {
    try {
      const response = await userTaskSchema.find({ projectId });
      const completedTask = response.filter((task) => {
        return task.status === "completed";
      });
      return (completedTask.length / response.length) * 100;
    } catch (error) {
      console.log("its the error from we fetch project progress :", error);
      throw { msg: "unable to fetch progress " };
    }
  }
}
