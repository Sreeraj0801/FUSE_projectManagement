import { Request, Response } from "express";
import chatHelper from '../Helpers/chatHelper' ;
const {getProjectChat,addMessageHelper,getMessagesHelper} = new chatHelper();
export const fetchProjectChat = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const response = await getProjectChat(projectId);
    res.status(200).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
};

export const addMessage = async (req:Request,res:Response) => {
  try {
    const response = await addMessageHelper(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
}

export const getAllMessages = async (req:Request,res:Response) => {
  try {
    const chatId = req.params.chatId;
    const response = await getMessagesHelper(chatId);    
    res.status(200).json(response);
  } catch (error) {
    res.status(402).json(error);
  }
}
