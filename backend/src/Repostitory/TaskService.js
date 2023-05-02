"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const TaskSchema_1 = require("../Model/TaskSchema");
class TaskService {
    createTask(details) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newArray = (_a = details.assignee) === null || _a === void 0 ? void 0 : _a.map((member) => new mongoose_1.Types.ObjectId(member));
                details.assignee = newArray; // Add explicit type assertion
                return yield TaskSchema_1.userTaskSchema.create(details);
            }
            catch (error) {
                console.log("its the error from where we add new task Service", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    findDuplicate({ name, reporter, projectId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield TaskSchema_1.userTaskSchema.find({ reporter, name, projectId });
            }
            catch (error) {
                console.log("its the error from where find duplicate task service", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    fetchTasks(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield TaskSchema_1.userTaskSchema.aggregate([
                    {
                        $match: {
                            projectId,
                        },
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "assignee",
                            foreignField: "_id",
                            as: "assigneeDetails",
                        },
                    },
                ]);
            }
            catch (error) {
                console.log("its the error from where we fetch tasks ", error);
                throw { msg: "something went wrong" };
            }
        });
    }
    //return userTaskSchema.findOneAndUpdate({_id:taskId,{ $or: [{ reporter:details.userId  }, { assignee:details.userId }] }})
    updateStatus(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskId = new mongoose_1.default.Types.ObjectId(details.taskId);
                return TaskSchema_1.userTaskSchema.findOneAndUpdate({
                    $and: [
                        { _id: taskId },
                        {
                            $or: [{ assignee: details.userId }, { reporter: details.userId }],
                        },
                    ],
                }, { $set: { status: details.status } });
            }
            catch (error) {
                console.log("its the error from where we fetch tasks ", error);
                throw { msg: "task not updated" };
            }
        });
    }
    postComment(details) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(details);
            try {
                const _id = new mongoose_1.default.Types.ObjectId(details.taskId);
                console.log(_id);
                const result = yield TaskSchema_1.userTaskSchema.updateOne({ _id }, {
                    $push: {
                        comments: {
                            reporterId: new mongoose_1.default.Types.ObjectId(details.userId),
                            reporterName: details.userName,
                            comment: details.comment,
                            time: new Date(),
                        },
                    },
                });
                console.log(result);
            }
            catch (error) {
                console.log("its the error from where we post comment : ", error);
                throw { msg: "unable to post comment" };
            }
        });
    }
    getAllComments(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield TaskSchema_1.userTaskSchema.findById({ _id: taskId });
                if (response === null || response === void 0 ? void 0 : response.comments) {
                    const sortedComments = response.comments.sort((a, b) => b.time - a.time);
                    return sortedComments;
                }
                throw { msg: "no comments" };
            }
            catch (error) {
                console.log("its the error from where fetch all the tasks :", error);
                throw { msg: "unable to fetch comments" };
            }
        });
    }
    deleteTask(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TaskSchema_1.userTaskSchema.deleteOne({ _id: taskId });
                return "succesfully deleted";
            }
            catch (error) {
                console.log("its the error from we delet task :", error);
                throw { msg: "unable to delete task" };
            }
        });
    }
    getProjectProgress(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield TaskSchema_1.userTaskSchema.find({ projectId });
                const completedTask = response.filter((task) => {
                    return task.status === "completed";
                });
                return (completedTask.length / response.length) * 100;
            }
            catch (error) {
                console.log("its the error from we fetch project progress :", error);
                throw { msg: "unable to fetch progress " };
            }
        });
    }
}
exports.TaskService = TaskService;
