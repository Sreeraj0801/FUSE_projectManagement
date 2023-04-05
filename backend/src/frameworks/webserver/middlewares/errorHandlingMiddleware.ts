import { NextFunction,Request,Response } from "express";
import AppError from "../utils/appError";

const errorHandlingMidlleware=(err:AppError, req:Request, res:Response, next: NextFunction)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    if (err.message == 'fail') {
        res.status(err.statusCode).json({ errors: err.status, errorMessage: err.message })
    } else {
        res.status(err.statusCode).json({
            status: err.status,
        })
    }
}

export default errorHandlingMidlleware