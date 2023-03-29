import { userInterface, loginInterface ,veriyCredentialsInterface ,googleUserInterface} from "../Types/Auth.types";
import bcrypt from "bcrypt";
import {JWTauth } from '../Auth/JWT.auth'
import { UserService } from "../Repostitory/UserService";
import { sentMail } from "../Verification/Email/nodemailer";
//------------------------------- @ Importing the instance ------------------------
const userService = new UserService();
const { insertUser, findUserByMobileOrEmail,findUserById,updateUserIsValidate,insertGoogleUser } = userService;

// @ importing instance
const newJWTauth = new JWTauth ();
const {createVerifyToken ,verifyEmailToken} = newJWTauth ;




export class authHelper {
  //--------------------------- Register a user -------------------------------------
  async doSignUp(details: userInterface) {
    try {
      const response = await findUserByMobileOrEmail(details.email);
      if(response && !response?.isVerified){
        return response
      }
      else if(response && response?.isVerified){
        throw new Error("User Already Exist");
      }
      else if (details.pword && details.email && details.name ) {
        details.pword = await bcrypt.hash(details.pword, 10);
        return await insertUser(details);
      } else {
        throw new Error("Require every field");
      }
    } catch (error: object | any) {
      const EmptyError: string | any = error.message;
      if (EmptyError) throw EmptyError;
      if (error?.error?.code === 11000) {
        const value = Object.keys(error.error.keyValue)[0];
        throw { error, message: `${value} already exist` };
      } else if (error?.error?.message) {
        throw { error, message: error.error.message };
      } else throw { error };
    }
  }

  //------------------------ Do Login ------------------------------------------------
  async doLogin(details: loginInterface) {
    try {
      if (details.credential && details.pword) {
        const response = await findUserByMobileOrEmail(details.credential);
        if (response && response.pword) {
          const auth = await bcrypt.compare(details.pword, response.pword);
          if(!response?.isVerified) throw new Error("Please verify your email Id")
          if (auth && response.isVerified){ return response}
          else { throw new Error("Incorrect password")}
          
        }
        throw new Error(" User not found ");
      } else throw new Error("Every field is required");
    } catch (error: object | any) {
      const EmptyError: string | any = error.message;
      if (EmptyError) throw EmptyError;
      else throw error;
    }
  }
  //---------------  Generate URL ------------------------------------------------
  async generateLink(userId:string ) {
    try {
      const verifyToken = await createVerifyToken(userId);
      return  `${process.env.BASE_URL}/verifyUser/${verifyToken}/${userId}`
    } catch (error) {
    console.log(error)
    throw {error}
    }
  }

  
  async sendVerifyMail (email:string,link:any){
    try {
    return sentMail( email,link) ; 
    } catch (error) {
      console.log("Mail error message" , error);
      throw(error);
    }
  }

  async verifyEmail(details:veriyCredentialsInterface){
  try {
    const {userId, verifyToken} = details ;
    const userDetails  :any = await findUserById(userId);
    const tokenDetails :any = await verifyEmailToken (verifyToken);
    if(tokenDetails.userId === userDetails._id.toString()){
    await updateUserIsValidate(userId);
      return {succes:true,userDetails}
    }
    else{
      "Invalid Link "
    }
  } catch (error) {
    throw {error}
  }
  }

  async googleUserSignUp(details:googleUserInterface){
    try {
      const response = await findUserByMobileOrEmail(details.email);
      if(response){throw {msg:"User already Exist"}}
      return await insertGoogleUser(details)
    } catch (error) {
      throw {error}
    }
  }

  async verifyUserId(userId:string){
    try {
      const response = await findUserById(userId);
      return response;
    } catch (error) {
      throw {msg:"Invalid Link Details"}
    }
  }

  async googleLogin(email:string){
    try {
      const response = await findUserByMobileOrEmail(email);
      console.log(response);
      if(!response){
        throw {msg:"User not found ! Please Register"}
      }
      if(!response?.isVerified) {
        const userId:any = response?._id
        await updateUserIsValidate(userId);
        return response;
      }else if(response?.isVerified){
        return response
      }
    } catch (error) {
      throw {error}
    }
  }

  async otpLoginAuth(number:string){
    try {
      const response = await findUserByMobileOrEmail(number);
      if(!response) throw "User not registerd";
      if(!response?.isVerified) throw "Please verify your email Id"
      else if(response?.isVerified) return response
    } catch (error) {
     throw {error}
    }
  }
}
