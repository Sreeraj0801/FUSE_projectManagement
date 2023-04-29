import { Schema, model } from "mongoose";

const taskSchema = new Schema({
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
  completedFiles: {
    type: Array,
  },
});

//export const userTaskSchema:any = model("taskSchema",taskSchema,'tasks');
export const userTaskSchema = model("tasks", taskSchema);
