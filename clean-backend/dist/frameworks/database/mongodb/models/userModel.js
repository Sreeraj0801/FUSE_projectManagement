"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator_1.default.isEmail, "Invalid Email"],
    },
    mobile: {
        type: String,
        unique: true,
        validate: [
            {
                validator: function (value) {
                    return /^\d{10}$/.test(value);
                },
                message: "Invalid mobile number",
            },
        ],
    },
    pword: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    workspace: {
        type: Array,
    },
});
const userModel = (0, mongoose_1.model)("User", userSchema, "users");
exports.default = userModel;
//# sourceMappingURL=userModel.js.map