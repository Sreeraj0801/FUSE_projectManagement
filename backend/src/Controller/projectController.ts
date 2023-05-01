import { Request, Response } from "express";
import { ProjectClass } from "../Helpers/projectHelpers";

const projectHelper = new ProjectClass();
const {
  createProjectHelper,
  getAllProjectDetailsHelper,
  getProjectDetailsHelper,
  getAllMembersHelper,
} = projectHelper;

export const createProjectController = async (req: Request, res: Response) => {
  try {
    const response = await createProjectHelper(req.body);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(401).json(error);
  }
};

export const getAllProjectDetails = async (req: Request, res: Response) => {
  try {
    const { workspaceId,email,userId } = req.params;
    const response = await getAllProjectDetailsHelper(workspaceId,email,userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const getProjectDetail = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const response = await getProjectDetailsHelper(projectId);
    res.status(200).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const getAllregisterdProjectMembers = async (req:Request,res:Response) => {
    try {
        const {projectId} = req.params ; 
        const response = await getAllMembersHelper(projectId)   ;
        res.status(200).json(response);     
    } catch (error) {
        res.status(402).json(error)
    }
  };


