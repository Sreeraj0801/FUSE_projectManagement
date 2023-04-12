import {userProjectSchema} from '../Model/ProjectSchema'
import {projectDetailsInterface} from '../Types/project.types'


export class ProjectServices{

//-----------create a project
    async createProjectService(details:projectDetailsInterface){
        try {            
             await userProjectSchema.create(details);
             return ("project created succesfully")
        } catch (error) {
            console.log("Error from project creation ",error);
           throw {messsage: "Project creation failed"} 
        }
    }

    async findProjectByNameandWorkspaceId({workspaceName,projectName}:{workspaceName:string,projectName:string}){
        try {
           return await userProjectSchema.find({workspaceName,projectName}) 
        } catch (error) {
            console.log("This error is where we find project with workspace name and project name " ,error);
            throw {message:"somethting went wrong on database"}            
        }
    }
}