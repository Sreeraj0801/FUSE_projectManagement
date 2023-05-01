
import { UserDetails } from "../../../../entities/users";
import userModel from "../models/userModel";
export class userRepositoryMongoDb{
  constructor(){
    //
  }
  
  async add(userData:UserDetails){
   return await new userModel(userData).save() ; 
  }
} 