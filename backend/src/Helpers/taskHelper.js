"use strict";
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
exports.taskHelper = void 0;
const TaskService_1 = require("../Repostitory/TaskService");
const taskClass = new TaskService_1.TaskService();
const { createTask, findDuplicate, fetchTasks, updateStatus, postComment, getAllComments, deleteTask, getProjectProgress } = taskClass;
class taskHelper {
    addtaskHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskDetails = yield findDuplicate({
                    name: details.name,
                    reporter: details.reporter,
                    projectId: details.projectId,
                });
                if (!taskDetails.length) {
                    return yield createTask(details);
                }
                else {
                    throw { msg: "Task name already exist" };
                }
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getTasksHelper(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield fetchTasks(projectId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    updateStatusHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield updateStatus(details);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    postCommentHelper(details) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield postComment(details);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getAllCommentHelper(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield getAllComments(taskId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    deleteTaskHelper(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield deleteTask(taskId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
    getProgressHelper(projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield getProjectProgress(projectId);
            }
            catch (error) {
                throw { error };
            }
        });
    }
}
exports.taskHelper = taskHelper;
