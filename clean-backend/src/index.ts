import express, { Application, NextFunction } from "express";
import http from "http";
import serverConfig from "./frameworks/webserver/server";
import routes from "./frameworks/webserver/routes";
import expressConfig from "./frameworks/webserver/express";
import Colors = require("colors.ts");
import errorHandlingMiddleware from "./frameworks/webserver/middlewares/errorHandlingMiddleware";
import AppError from "./frameworks/webserver/utils/appError";
import connectDB from "./frameworks/database/mongodb/connection";
Colors.enable;

const app: Application = express();
const server = http.createServer(app);

//connectiong mongoDB
connectDB();

expressConfig(app);
//routes for each endPoint
routes(app, express);

app.use(errorHandlingMiddleware);

app.all("*", (req, res, next: NextFunction) => {
  next(new AppError("Not Found ", 404));
});

serverConfig(server).startServer();
