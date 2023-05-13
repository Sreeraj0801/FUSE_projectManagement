import mongoose, { ObjectId } from "mongoose";
import { userChatSchema } from "../Model/ChatSchema";
import { ChatMessage } from "../Helpers/chatHelper";
import { userMessageSchema } from "../Model/MessageSchema";

export class ChatService {
  //-------------findby project Id ------------
  async findChatByProjectId(projectId: string) {
    try {
      const response = await userChatSchema.aggregate([
        {
          $match: { projectId: new mongoose.Types.ObjectId(projectId) },
        },
        {
          $unwind: "$users",
        },
        {
          $lookup: {
            from: "users",
            localField: "users",
            foreignField: "email",
            as: "userDetails",
          },
        },
        {
          $lookup: {
            from: "messages",
            localField: "lastMessage",
            foreignField: "_id",
            as: "lastMessage",
          },
        },
      ]);
      return response[0];
    } catch (error) {
      console.log("its the error from fetching the chat project", error);
      throw { msg: "unable to fetch chat" };
    }
  }

  //-------- create chat -------------------
  async createChat(details: {
    chatName: string;
    projectId: ObjectId;
    users: [];
  }) {
    try {
      return await userChatSchema.create({
        chatName: details.chatName,
        projectId: details.projectId,
        users: details.users,
      });
    } catch (error) {
      console.log("its the error from creating the chat project", error);
      throw { msg: "unable to create chat" };
    }
  }

  async addMessage(details: ChatMessage) {
    try {
      let response:any = await userMessageSchema.create(details);
      response = await response.populate("sender", "name email");
      return response;
    } catch (error) {
      console.log("Its the error from adding the message", error);
      throw { msg: "Unable to post message" };
    }
  }

  async findChatByIdUpdateLatestMsg(
    _id: ObjectId,
    lastMessage: mongoose.Types.ObjectId
  ) {
    try {
      return userChatSchema.findByIdAndUpdate(
        { _id },
        { $set: { lastMessage } }
      );
    } catch (error) {
      console.log("Its the error from finding chat by id ", error);
      throw { msg: "Unable to find chat by id " };
    }
  }

  async getAllMessages(chatId: string) {
    try {
      const chat = new mongoose.Types.ObjectId(chatId);
      const response = await userMessageSchema
        .find({ chat })
        .populate("sender", "-pword -workspace,-isActive,-isVerified")
        .exec();
      return response;
    } catch (error) {
      console.log("Its the error from fetching messages ", error);
      throw { msg: "Unable to fetch messages " };
    }
  }
}
