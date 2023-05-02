"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userTaskSchema = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
    },
    assignee: {
        type: Array,
    },
    reporter: {
        type: String,
        required: true,
    },
    projectId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "ongoing",
        required: true,
    },
    comments: {
        type: Array,
    },
});
//export const userTaskSchema:any = model("taskSchema",taskSchema,'tasks');
exports.userTaskSchema = (0, mongoose_1.model)("tasks", taskSchema);
