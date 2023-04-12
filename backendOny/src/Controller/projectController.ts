import { Request,Response } from "express";
import {ProjectClass} from '../Helpers/projectHelpers';

const projectHelper = new ProjectClass();
const {createProjectHelper} = projectHelper;

export const createProjectController = async (req:Request,res:Response) => {
    try {
        const response = await createProjectHelper(req.body);
        res.status(200).json(response);
    } catch (error:any) {
        res.status(401).json(error)
    }

}