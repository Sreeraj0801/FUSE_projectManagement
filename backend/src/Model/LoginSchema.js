"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LoginSchema = new mongoose_1.default.Schema({
    credential: {
        type: String,
        required: true
    },
    pword: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('users', LoginSchema);
