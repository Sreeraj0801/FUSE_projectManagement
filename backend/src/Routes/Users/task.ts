import express from "express";
const router = express.Router();
import {
  addNewTask,
  fetchTask,
  changeStatus,
  postComment,
  getAllComments,
  deleteTask,
  getProjectProgress
} from "../../Controller/taskController";

router.post("/create", addNewTask);

router.get("/:projectId", fetchTask);

router.patch("/updateStatus", changeStatus);

router.post("/postComment", postComment);

router.get("/comments/:taskId", getAllComments);

router.delete('/delete/:taskId',deleteTask);

router.get('/progress/:projectId',getProjectProgress);

export default router;
