import mongoose from "mongoose";
import { taskInterface } from "../Types/Task.types";
import { userTaskSchema } from "../Model/TaskSchema";

export class TaskService {
  async createTask(details: taskInterface) {
    try {
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

  async fetchTasks(projectId:string) {
    try {      
      return  await userTaskSchema.aggregate([
        {
            $match: {
              projectId
            }
          },
          {
            $unwind: {
              path: '$assignee',
            }
          },
          {
            $lookup: {
              from: "users",
              let: { assignee: "$assignee" },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: [ "$_id", { $toObjectId: "$$assignee" } ]
                    }
                  }
                },
                {
                  $project: {
                    _id: 1,
                    name: 1,
                    email: 1
                  }
                }
              ],
              as: "assigneeDetails"
            }
          }
    ]);
    } catch (error) {
      console.log("its the error from where we fetch tasks ", error);
      throw { msg: "something went wrong" };
    }
  }
  
  //return userTaskSchema.findOneAndUpdate({_id:taskId,{ $or: [{ reporter:details.userId  }, { assignee:details.userId }] }})
  
  async updateStatus(details:{userId:string;taskId:string;status:string}){
    try {
      const taskId = new mongoose.Types.ObjectId(details.taskId);
      return userTaskSchema.findOneAndUpdate({
        $and: [
          { _id: taskId },
          { $or: [{ assignee: details.userId }, { reporter: details.userId }] },
        ],
      },{ $set: { status: details.status }})
    } catch (error) {
      //
    }
  }
}
