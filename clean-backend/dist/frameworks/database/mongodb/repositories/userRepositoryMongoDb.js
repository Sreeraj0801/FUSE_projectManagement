"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryMongoDb = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
class userRepositoryMongoDb {
    constructor() {
        //
    }
    async add(userData) {
        return await new userModel_1.default(userData).save();
    }
}
exports.userRepositoryMongoDb = userRepositoryMongoDb;
//# sourceMappingURL=userRepositoryMongoDb.js.map