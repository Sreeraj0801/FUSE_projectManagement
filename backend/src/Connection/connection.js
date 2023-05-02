"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const connectToDatabase = () => {
    mongoose_1.default.connect('mongodb+srv://sreeraj0801:fuseofficial@cluster0.8ewjrvu.mongodb.net/test', dbOptions).then(() => {
        console.log('successfully connected to database');
    }).catch((err) => {
        console.log("DataBase Error", err);
    });
};
exports.connectToDatabase = connectToDatabase;
