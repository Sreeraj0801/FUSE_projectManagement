"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const authControllers_1 = __importDefault(require("../../../adapters/controllers/authControllers"));
const userRepositoryMongoDb_1 = require("../../database/mongodb/repositories/userRepositoryMongoDb");
const userDbRepository_1 = __importDefault(require("../../../application/repositories/userDbRepository"));
function authRouter(express) {
    const userRepository = new userDbRepository_1.default(new userRepositoryMongoDb_1.userRepositoryMongoDb());
    const userController = new authControllers_1.default(userRepository);
    const router = express.Router();
    router.post("/register", (0, express_async_handler_1.default)(userController.registerUser));
    return router;
}
exports.default = authRouter;
//# sourceMappingURL=auth.js.map