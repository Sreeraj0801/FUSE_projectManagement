import mongoose from "mongoose";
import { userProjectSchema } from "../Model/ProjectSchema";
import { userWorkspaceSchema } from "../Model/workspaceSchema";
import { projectDetailsInterface } from "../Types/project.types";

export class ProjectServices {
  //-----------create a project
  async createProjectService(details: projectDetailsInterface) {
    try {
      const response = await userProjectSchema.create(details);
      await userWorkspaceSchema.findByIdAndUpdate(
        { _id: details.workspaceName },
        { $push: { projects: response._id } }
      );
      return "project created succesfully";
    } catch (error) {
      console.log("Error from project creation ", error);
      throw { messsage: "Project creation failed" };
    }
  }

  async findProjectByNameandWorkspaceId({
    workspaceName,
    projectName,
  }: {
    workspaceName: string;
    projectName: string;
  }) {
    try {
      return await userProjectSchema.find({ workspaceName, projectName });
    } catch (error) {
      console.log(
        "This error is where we find project with workspace name and project name ",
        error
      );
      throw { message: "somethting went wrong on database" };
    }
  }

  async getAllProjectDetails(workspaceId: string) {
    try {
      return await userProjectSchema.find({ workspaceName: workspaceId });
    } catch (error) {
      console.log("Error from getting Project details", error);
      throw { msg: "something went wrong" };
    }
  }

  async getProjectDetails(projectId: string) {
    try {
      const proId = new mongoose.Types.ObjectId(projectId);
      const response = await userProjectSchema.aggregate([
        {
          $match: {
            _id: proId,
          },
        },
        {
          $addFields: {
            workspaceId: {
              $toObjectId: "$workspaceName",
            },
          },
        },
        {
          $lookup: {
            from: "workspace",
            localField: "workspaceId",
            foreignField: "_id",
            as: "workspaceDetails",
          },
        },
        {
          $unwind: "$workspaceDetails",
        },
      ]);
      return response[0];
    } catch (error) {
      console.log("Error from getting single Project Details", error);
      throw { msg: "Somehting went wrong" };
    }
  }
  async getMembersDetails(projectId:string){
    try {
        return await userProjectSchema.findById({_id:projectId});
    } catch (error) {
        console.log("Error from getting  registerd project members", error);
        throw { msg: "Somehting went wrong" };
    }
  }
}
