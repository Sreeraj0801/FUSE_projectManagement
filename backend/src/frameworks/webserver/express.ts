import express,{Application,NextFunction } from "express";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import configKeys from "../../config";

const expressConfig = (app:Application) => {

    //Development form logging
    if(configKeys.nodeEnv === 'development'){
        app.use(morgan('dev'));
    }

    app.use(
        cors({
          origin: "http://127.0.0.1:5173",
          methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
          credentials: true,
        })
      );
    
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
}

export default expressConfig ;