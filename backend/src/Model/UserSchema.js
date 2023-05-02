"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchemaRegistration = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const userSchema = new mongoose_1.default.Schema({
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
        validate: [
            {
                validator: function (value) {
                    return /^\d{10}$/.test(value);
                },
                message: "Invalid mobile number",
            },
        ]
    },
    pword: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    workspace: {
        type: Array
    }
});
exports.userSchemaRegistration = mongoose_1.default.model('users', userSchema);
