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
exports.getProjectProgress = exports.deleteTask = exports.getAllComments = exports.postComment = exports.changeStatus = exports.fetchTask = exports.addNewTask = void 0;
const taskHelper_1 = require("../Helpers/taskHelper");
const tasks = new taskHelper_1.taskHelper();
const { addtaskHelper, getTasksHelper, updateStatusHelper, postCommentHelper, getAllCommentHelper, deleteTaskHelper, getProgressHelper } = tasks;
//--------adding new task-------------
const addNewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield addtaskHelper(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.addNewTask = addNewTask;
const fetchTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield getTasksHelper(req.params.projectId);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.fetchTask = fetchTask;
const changeStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield updateStatusHelper(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.changeStatus = changeStatus;
const postComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield postCommentHelper(req.body);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.postComment = postComment;
const getAllComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.taskId;
        const response = yield getAllCommentHelper(taskId);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getAllComments = getAllComments;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.taskId;
        console.log(taskId);
        const response = yield deleteTaskHelper(taskId);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.deleteTask = deleteTask;
const getProjectProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.params;
        console.log(projectId);
        const response = yield getProgressHelper(projectId);
        res.status(201).json(response);
    }
    catch (error) {
        res.status(402).json(error);
    }
});
exports.getProjectProgress = getProjectProgress;
