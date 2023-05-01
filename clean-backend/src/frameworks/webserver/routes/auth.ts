import Express from "express";
import asyncHandler from "express-async-handler";
import authController from "../../../adapters/controllers/authControllers";
import { userRepositoryMongoDb } from "../../database/mongodb/repositories/userRepositoryMongoDb";
import userDbRepository from "../../../application/repositories/userDbRepository";

export default function authRouter(express: typeof Express) {
  const userRepository = new userDbRepository(new userRepositoryMongoDb());
  
  const userController = new authController(userRepository);
  const router = express.Router();

  router.post("/register", asyncHandler(userController.registerUser));

  return router;
}
