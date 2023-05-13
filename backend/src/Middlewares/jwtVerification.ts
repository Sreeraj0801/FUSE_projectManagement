import { Request,Response,NextFunction } from "express";
import {verify} from 'jsonwebtoken';


export const verifyAccesToken = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const accessToken:any = req.headers['authorization']?.split(' ')[1];
          verify(accessToken,process.env.JWT_ACCESS_TOKEN_SECRET as string);                
        next();
    } catch (error) {
        console.log(error)
        res.status(403).json("frobidden token")
    }
}