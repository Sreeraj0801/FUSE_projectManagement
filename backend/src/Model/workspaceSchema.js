"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userWorkspaceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const workspaceSchema = new mongoose_1.default.Schema({
    workspaceName: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#fff'
    },
    masterId: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        default: []
    },
    projects: {
        type: Array,
        default: []
    }
});
exports.userWorkspaceSchema = mongoose_1.default.model("workspaceSchema", workspaceSchema, 'workspace');
