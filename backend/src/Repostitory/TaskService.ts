import mongoose from "mongoose";
import { taskInterface } from "../Types/Task.types";
import { userTaskSchema } from "../Model/TaskSchema";

export class TaskService {
    async createTask(details:taskInterface){
        try {
           return await userTaskSchema.create(details); 
        } catch (error) {
            console.log("its the error from where we add new task Service",error);
            throw {msg:"something went wrong"}  
        }
    }

    async findDuplicate({name,reporter,projectId}:{name:string,reporter:string,projectId:string}){
        try {
            return await userTaskSchema.find({reporter,name,projectId})
        } catch (error) {
            console.log("its the error from where find duplicate task service",error);
            throw {msg:"something went wrong"}  
        }
    }
}