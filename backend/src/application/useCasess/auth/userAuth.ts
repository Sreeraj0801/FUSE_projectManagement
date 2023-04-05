import { UserInterface } from "../../../types/userInterface";
import AppError from "../../../frameworks/webserver/utils/appError";
import { UserDbInterface } from "../../repositories/userDbRepo";
import { authService } from "../../../frameworks/services/authServices";
import { AuthServiceInterface } from "../../services/authServiceInterface";


export const userRegister = async (
    user:{name:string,email:string,mobile?:string,password?:string},
    userRepository:ReturnType<UserDbInterface>,
    authService:ReturnType<AuthServiceInterface>
    
    
) => {
    user.email  = user.email.toLowerCase();
    //const isExistingEmail = await userRepository.
}