import { taskInterface } from "../Types/Task.types";

import { TaskService } from "../Repostitory/TaskService";
const taskClass = new TaskService();
const {
  createTask,
  findDuplicate,
  fetchTasks,
  updateStatus,
  postComment,
  getAllComments,
  deleteTask,
  getProjectProgress
} = taskClass;

export class taskHelper {
  async addtaskHelper(details: taskInterface) {
    try {
      const taskDetails = await findDuplicate({
        name: details.name,
        reporter: details.reporter,
        projectId: details.projectId,
      });
      if (!taskDetails.length) {
        return await createTask(details);
      } else {
        throw { msg: "Task name already exist" };
      }
    } catch (error: any) {
      throw { error };
    }
  }
  async getTasksHelper(projectId: string) {
    try {
      return await fetchTasks(projectId);
    } catch (error) {
      throw { error };
    }
  }
  async updateStatusHelper(details: {
    userId: string;
    taskId: string;
    status: string;
  }) {
    try {
      return await updateStatus(details);
    } catch (error) {
      throw { error };
    }
  }

  async postCommentHelper(details: {
    userId: string;
    userName: string;
    taskId: string;
    comment: string;
  }) {
    try {
      return await postComment(details);
    } catch (error) {
      throw { error };
    }
  }
  async getAllCommentHelper(taskId: string) {
    try {
      return await getAllComments(taskId);
    } catch (error) {
      throw { error };
    }
  }
  async deleteTaskHelper(taskId: string) {
    try {
      return await deleteTask(taskId);
    } catch (error) {
      throw { error };
    }
  }
  async getProgressHelper(projectId:string){
    try {
      return await getProjectProgress(projectId)
    } catch (error) {
     throw {error} 
    }
  }
}
