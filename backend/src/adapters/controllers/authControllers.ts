import {Request,Response} from 'express';
import { newUserInterface } from '../../types/userInterface';
import asyncHandler from 'express-async-handler'
import { UserDbInterface } from '../../application/repositories/userDbRepo';
import { UserRepository } from '../../frameworks/database/mongodb/repositories/userRepository';
import { userRegister } from '../../application/useCasess/auth/userAuth';
import { AuthServiceInterface } from '../../application/services/authServiceInterface';
import { AuthService } from '../../frameworks/services/authServices';

const authController = (
    userDbRepository:UserDbInterface,
    userRepository:UserRepository,    
    authServiceImpl:AuthService,
    authServiceInterface:AuthServiceInterface,
) => {
    

    const dpRepositoryUser = userDbRepository(userRepository());
    const authService = authServiceInterface (authServiceImpl());

    const registerUser = asyncHandler(async(req:Request,res:Response) => {
        const user:{name:string,email:string,pword?:string,mobile?:string} = req.body;
         const token = await userRegister(user,dpRepositoryUser,authService)
        res.json({status:'success',
        message:'new user registerd',
        token
        });
    })
    return {
        registerUser
    }
}

export default authController