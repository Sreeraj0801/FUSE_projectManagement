import { Request, Response, json, response } from "express";
import  {authHelper} from '../Helpers/authHelper' ;
import {JWTauth} from '../Auth/JWT.auth'

// @ importing instance and destructurin
const authHelpers = new authHelper();
const {doLogin, doSignUp, generateLink ,sendVerifyMail ,verifyEmail ,googleUserSignUp ,verifyUserId,googleLogin ,otpLoginAuth} = authHelpers

// @ importing instance
const newJWTauth = new JWTauth ();
const {generateAccessToken, generateRefreshToken } = newJWTauth ;

//------------------------------ user Registration ----------------------
export const userRegistration = async (req: Request, res: Response) => {
  try {
    //@fetching data ...
      const response  = await doSignUp(req.body);
      const geratedLink   = await generateLink(response._id.toString());
      res.status(200).json(response)
      const mailResponse  = await sendVerifyMail(response.email , geratedLink) ; 
  } catch (error) {
    console.log(error)
      res.status(409).json(error)
  }};

//----------------------------- User Login -------------------------------
  export const userLogin = async (req:Request,res:Response) => {
    try {
      //@    
      const response = await doLogin(req.body);
      const userId     = response._id.toString();
      const accessToken   = await  generateAccessToken(userId);
      const refreshToken  = await  generateRefreshToken(userId);
      res.cookie("accessToken" , accessToken ,{httpOnly:true}) ;
      res.cookie("refreshToken", refreshToken,{httpOnly:true}) ;
      res.status(200).json({response,accessToken})
    } catch (error) {
      res.status(409).json(error)
    }
  }

  export const verifyLink = async (req:Request,res:Response) => {
    try {
      const response = await verifyEmail(req.body);
      console.log(response);
      res.status(200).json(response);
    } catch (error) {
      res.status(302).json(error)
    }
  }

  export const userGoogleRegistration = async (req:Request,res:Response) => {
    try {
      const response = await googleUserSignUp(req.body);
      res.status(200).json(response)
    } catch (error) {
     res.status(302).json(error) 
    }
  }

  export const resendVerifyLInk = async(req:Request,res:Response) => {
    try {      
      const response = await verifyUserId(req.body.userId);
      if(response){
        const geratedLink   = await generateLink(response._id.toString());
        res.status(200).json({msg:"mail succesfully resended"})
        const mailResponse  = await sendVerifyMail(response.email , geratedLink) ; 
      }else {
        res.status(302).json("Invalid Link")
      }
    } catch (error) {
      res.status(302).json(error)
    }
  }

  export const googleSignIn = async(req:Request,res:Response) => {
    try {
    const response = await googleLogin(req.body.email);
    const userId:any     = response?._id.toString();
    const accessToken   = await  generateAccessToken(userId);
    const refreshToken  = await  generateRefreshToken(userId);
    res.cookie("accessToken" , accessToken ,{httpOnly:true}) ;
    res.cookie("refreshToken", refreshToken,{httpOnly:true}) ;    
    res.status(200).json({response,accessToken})
    } catch (error) {
      res.status(302).json(error)
    }
  }

  export const otpLogin = async (req:Request,res:Response) => {
    try {
      const response = await otpLoginAuth(req.body.number);
      const userId:any     = response?._id.toString();
      const accessToken   = await  generateAccessToken(userId);
      const refreshToken  = await  generateRefreshToken(userId);
      res.cookie("accessToken" , accessToken ,{httpOnly:true}) ;
      res.cookie("refreshToken", refreshToken,{httpOnly:true}) ;    
      res.status(200).json({response,accessToken})
    } catch (error) {
      res.status(302).json(error)
    }
  }

