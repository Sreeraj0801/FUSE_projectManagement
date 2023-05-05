import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectToDatabase } from "./Connection/connection";
import * as dotenv from "dotenv";
const server = express();
const app = express.Router()


connectToDatabase();
dotenv.config();

//----------------------- middleware ------------------------------
server.use(
  cors({
    origin: ["*", "http://localhost:5173","http://fuse-official.online","https://fuse-official.online","http://127.0.0.1:5173"],
    methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
    credentials: true,
  })
);

server.use(morgan("dev"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use(express.static("Public"));
server.use(express.json());

/* ------------------------ Routes --------------------------------
   # importing Routes and Using It
   ## Import Routes - User
 */
import UserRouter from "./Routes/Users/auth";
import WorkspaceRouter from './Routes/Users/workspace'
import ProjectRouter from './Routes/Users/project';
import TaskRouter from './Routes/Users/task'
//Using the Routes
server.use('/server',app)

app.use("/", UserRouter);
app.use("/workspace",WorkspaceRouter);
app.use("/project",ProjectRouter)
app.use('/task',TaskRouter)


//--------------------- Port Running -----------------------------
server.listen(process.env.PORT_NUMBER, () => {
  console.log(`server started at http://localhost:${process.env.PORT_NUMBER}`);
});
