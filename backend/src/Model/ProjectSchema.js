"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProjectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    projectName: {
        type: String,
        required: true,
    },
    projectDiscription: {
        type: String,
        required: true,
    },
    projectTheme: {
        type: String,
        required: true,
    },
    workspaceName: {
        type: String,
        required: true,
    },
    members: {
        type: Array,
        default: [],
    },
    masterId: {
        type: String,
        required: true,
    },
    toDate: {
        type: String,
        required: true,
    },
    fromDate: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    pending: {
        type: Boolean,
        default: false,
    },
});
exports.userProjectSchema = mongoose_1.default.model("projectSchema", projectSchema, "projects");
