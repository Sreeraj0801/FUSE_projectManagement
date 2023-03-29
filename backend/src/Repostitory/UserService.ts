import {userInterface,googleUserInterface} from '../Types/Auth.types'
import {userSchemaRegistration} from "../Model/UserSchema";

export class  UserService {
  // ------------------------------ Insert a new User -----------------
    async insertUser(details:userInterface){
      try {
        const {name,mobile,email,pword} = details;       
        return await userSchemaRegistration.create({name,mobile,email,pword});
    }catch (error) {
        throw {error}
      }
    }

  //----------------- find user by email / mobile ----------------------
    async findUserByMobileOrEmail(identifier:string){
      try {        
        return  await userSchemaRegistration.findOne({$or: [{ email: identifier }, { mobile: identifier }],});
      } catch (error) {        
        throw {error}
      }
    }

    async findUserById(userId:string){
      try {
        return await userSchemaRegistration.findById(userId)
      } catch (error) {
        throw {error};
      }
    }

    async updateUserIsValidate(userId:string){
      try {
        return await userSchemaRegistration.updateOne({ _id:userId}, { $set: {isVerified:true} }); 
      } catch (error) {
        console.log(error);
        
        throw {error}
      }
    }

    async insertGoogleUser(details:googleUserInterface){
      try {
        const {displayName , email} = details;
        const name = displayName;
       return await userSchemaRegistration.create({name,email}) ;
      } catch (error) {
        console.log(error);
        throw {error}
      }
    }
  }
