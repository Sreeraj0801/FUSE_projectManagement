import mongoose, { ObjectId } from "mongoose";
import { ChatService } from "../Repostitory/ChatServices";
import { ProjectServices } from "../Repostitory/ProjectService";
const { getMembersDetails } = new ProjectServices();
const {
  findChatByProjectId,
  createChat,
  addMessage,
  findChatByIdUpdateLatestMsg,
  getAllMessages
} = new ChatService();

export interface ChatMessage {
  readBy?: [];
  sender: string;
  content: string;
  chat: ObjectId;
}

export default class chatHelper {
  //-----------------fetchChatHelper------------
  async getProjectChat(projectId: string) {
    try {
      const isProject = await getMembersDetails(projectId);
      const { _id, projectName, members } = isProject;
      const isChat = await findChatByProjectId(projectId);
      if (isProject) {
        if (!isChat) {
          const ChatResponse = await createChat({
            chatName: projectName,
            projectId: _id,
            users: members,
          });
          if (ChatResponse) {
            console.log(ChatResponse);
            const objProjectId = ChatResponse.projectId;
            const projectId: any = objProjectId?.toString();
            return await findChatByProjectId(projectId);
          }
        } else {
          return isChat;
        }
      } else {
        throw { msg: "Invalid Project" };
      }
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async addMessageHelper(details: ChatMessage) {
    try {
      const response = await addMessage(details);
      const latestMessage = new mongoose.Types.ObjectId(response._id);
      await findChatByIdUpdateLatestMsg(details.chat, latestMessage);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async getMessagesHelper(chatId:string){
    try {
      return await getAllMessages(chatId);
    } catch (error) {
      throw { error };
    }
  }
}
