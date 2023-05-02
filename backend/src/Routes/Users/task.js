"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const taskController_1 = require("../../Controller/taskController");
router.post("/create", taskController_1.addNewTask);
router.get("/:projectId", taskController_1.fetchTask);
router.patch("/updateStatus", taskController_1.changeStatus);
router.post("/postComment", taskController_1.postComment);
router.get("/comments/:taskId", taskController_1.getAllComments);
router.delete('/delete/:taskId', taskController_1.deleteTask);
router.get('/progress/:projectId', taskController_1.getProjectProgress);
exports.default = router;
