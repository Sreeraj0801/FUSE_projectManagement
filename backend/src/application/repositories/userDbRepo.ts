import { UserRepository } from "../../frameworks/database/mongodb/repositories/userRepository"; 

export const userDbRepository = (repository:ReturnType <UserRepository> ) => {
    const addUser = async (user:{name:string , email:string ,password?:string,mobile?:string}) => await repository.addUser(user);
    const getUserByEmail = async(email:string) => await repository.getUserEmail(email)
    return {
        addUser,
    }
}

export type UserDbInterface = typeof userDbRepository