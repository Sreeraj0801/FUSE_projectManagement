import { Request, Response } from "express";
import { taskHelper } from "../Helpers/taskHelper";
const tasks = new taskHelper();
const {
  addtaskHelper,
  getTasksHelper,
  updateStatusHelper,
  postCommentHelper,
  getAllCommentHelper,
  deleteTaskHelper,
  getProgressHelper
} = tasks;

//--------adding new task-------------
export const addNewTask = async (req: Request, res: Response) => {
  try {
    const response = await addtaskHelper(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const fetchTask = async (req: Request, res: Response) => {
  try {
    const response = await getTasksHelper(req.params.projectId);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const changeStatus = async (req: Request, res: Response) => {
  try {
    const response = await updateStatusHelper(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const postComment = async (req: Request, res: Response) => {
  try {
    const response = await postCommentHelper(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const getAllComments = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    const response = await getAllCommentHelper(taskId);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const deleteTask = async(req:Request,res:Response) =>{
  try {
    const taskId = req.params.taskId;
    console.log(taskId);
    const response = await deleteTaskHelper(taskId);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
}

export const getProjectProgress = async(req:Request,res:Response) =>{
  try {
    const {projectId} = req.params ;
    console.log(projectId);
    
    const response = await getProgressHelper(projectId);
    res.status(201).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
}
