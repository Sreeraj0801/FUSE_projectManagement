"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "config.env" });
const configKeys = {
    mongo: {
        url: process.env.DATABASE,
        dbName: "",
    },
    server: {
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT_NUMBER,
    },
};
exports.default = configKeys;
//# sourceMappingURL=config.js.map