import { Request, Response } from "express";
import {taskHelper} from '../Helpers/taskHelper';
const tasks = new taskHelper();
const {addtaskHelper} = tasks;


//--------adding new task-------------
export const addNewTask = async (req:Request,res:Response) => {
    try {
        const response =  await addtaskHelper(req.body) ; 
        res.status(201).json(response)
    } catch (error) {
       res.status(402).json(error) 
    }
}