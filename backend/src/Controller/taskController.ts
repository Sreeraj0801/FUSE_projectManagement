import { Request, Response } from "express";
import {taskHelper} from '../Helpers/taskHelper';
const tasks = new taskHelper();
const {addtaskHelper,getTasksHelper,updateStatusHelper} = tasks;


//--------adding new task-------------
export const addNewTask = async (req:Request,res:Response) => {
    console.log(req.body);
    
    try {
        const response =  await addtaskHelper(req.body) ; 
        res.status(201).json(response)
    } catch (error) {
       res.status(402).json(error) 
    }
}

export const fetchTask = async (req:Request,res:Response) => {
    try {
        const response = await getTasksHelper(req.params.projectId);  
        console.log(response);
                     
        res.status(201).json(response);
    } catch (error) {
        res.status(402).json(error)  
    }
}

export const changeStatus = async (req:Request,res:Response)=>{
try {
    const response = await updateStatusHelper(req.body)
    res.status(201).json(response);
    
} catch (error) {
    res.status(402).json(error) 
}
}