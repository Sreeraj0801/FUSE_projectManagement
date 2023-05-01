import { Request, Response } from "express";
import { workspaceClass } from "../Helpers/workspaceHelper";
import cryptoEncryption from "../Encryption/cryptoEncryption";
const { decryptEmail } = cryptoEncryption();
import { JWTauth } from "../Auth/JWT.auth";


/*
    Exporting classControllers and destructing it
*/
const workspace = new workspaceClass();
const {
  createWorkspaceHelper,
  getAllWorkspaceHelper,
  inviteMembersHelper,
  verityMemberHelper,
  getAllWorkspaceMembersHelper,
  getWorkspaceDetailHelper,
  getMyWorkspacesHelper
} = workspace;

// @ importing instance
const newJWTauth = new JWTauth();
const { generateAccessToken, generateRefreshToken, verifyRefreshToken } =
  newJWTauth;


//------------------------------ user Registration ----------------------
export const createWorkspaceController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await createWorkspaceHelper(req.body);
    res.status(201).json(response);
  } catch (error: any) {
    res.status(401).json(error?.error);
  }
};

export const getAllWorkspaceController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId: string = req.params?.userId;    
    const response = await getAllWorkspaceHelper(userId);    
    res.status(200).json(response);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const inviteMembersController = async (req: Request, res: Response) => {
  try {
    const response = await inviteMembersHelper(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
};

export const verifyMemberController = async (req: Request, res: Response) => {
  try {
    const { workspace, choise } = req.params;
    const email = await decryptEmail(req.params.email);    
    const response = await verityMemberHelper({ workspace, email, choise });

    const accessToken = await generateAccessToken(response._id.toString());
    const refreshToken = await generateRefreshToken(response._id.toString());
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({ response, accessToken });
  } catch (error) {
    console.log(error);
    
    res.status(401).json(error);
  }
};

export const getAllWorkspaceMembers = async (req:Request,res:Response) => {
  try {
    const {workspaceId} = req.params
    const response =  await getAllWorkspaceMembersHelper(workspaceId) ; 
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json(error) ;
  }
}

export const getWorksapceDetails = async (req:Request,res:Response) => {
  try {
    const {workspaceId} = req.params;
    const response = await getWorkspaceDetailHelper(workspaceId)
    res.status(200).json(response)
  } catch (error) {
    res.status(401).json(error) ;
  }
}

export const getMyWorkspaces = async(req:Request,res:Response) =>{
  try {
    const {userId,email} = req.params;
    const response = await getMyWorkspacesHelper(userId,email);
    res.status(200).json(response);
  } catch (error) {
   res.status(401).json(error) ;
  }
}
