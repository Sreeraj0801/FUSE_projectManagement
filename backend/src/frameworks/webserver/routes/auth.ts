import express from 'express';
import authController from '../../../adapters/controllers/authControllers';
import { userDbRepository } from '../../../application/repositories/userDbRepo';
import { userRepository } from '../../database/mongodb/repositories/userRepository';
import { authService } from '../../services/authServices';
import { authServiceInterface } from '../../../application/services/authServiceInterface';


const authRouter = () => {
    const router = express.Router();

    const controller = authController(
        userDbRepository,
        userRepository,
        authService,
        authServiceInterface
    );

    router.post('/register',controller.registerUser)

    return router
}

export default authRouter;