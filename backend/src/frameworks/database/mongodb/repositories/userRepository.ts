import { UserInterface, newUserInterface } from "../../../../types/userInterface"; 
import User from "../models/userModel";


//implementaion Layer

export const userRepository = () => {

    const addUser = async (user:{
      //parameter's
        name:string,
        email:string,
        mobile?:string,
        password?:string
    }) => await User.create(user) ;


        const getUserEmail = async (email:string) => {
            const user:UserInterface | null  = await User.findOne({email});
            return getUserEmail;
        }

    return {
        addUser,
        getUserEmail,
    };
};

export type UserRepository = typeof userRepository;