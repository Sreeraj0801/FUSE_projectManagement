import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectToDatabase } from "./Connection/connection";
import * as dotenv from "dotenv";
import { createServer } from "http";
import socketConfig from "./config/socket";

connectToDatabase();
dotenv.config();

const app = express();
const Router = express.Router();
const httpServer = createServer(app);

//----------------------- middleware ------------------------------
app.use(
  cors({
    origin: [
      "*",
      "http://localhost:5173",
      "http://fuse-official.online",
      "https://fuse-official.online",
      "http://127.0.0.1:5173",
      "https://fuse-official.netlify.app/",
    ],
    methods: ["PUT", "POST", "DELETE", "GET", "PATCH"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("Public"));
app.use(express.json());

/* ------------------------ Routes --------------------------------
   # importing Routes and Using It
   ## Import Routes - User
 */
import UserRouter from "./Routes/Users/auth";
import WorkspaceRouter from "./Routes/Users/workspace";
import ProjectRouter from "./Routes/Users/project";
import TaskRouter from "./Routes/Users/task";
import ChatRouter from "./Routes/Users/chat";
//Using the Routes
app.use("/server", Router);

Router.use("/", UserRouter);
Router.use("/workspace", WorkspaceRouter);
Router.use("/project", ProjectRouter);
Router.use("/task", TaskRouter);
Router.use("/chat", ChatRouter);

//--------------------- Port Running -----------------------------
const PORT = process.env.PORT_NUMBER || 3000;
httpServer.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});


//-----------------------configaration file for socket.IO
socketConfig(httpServer);
