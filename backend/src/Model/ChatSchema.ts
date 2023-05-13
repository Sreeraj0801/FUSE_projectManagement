import mongoose, { model, Schema } from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      type: String,
      required: true,
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "projects",
      },
    users: 
[      {
        type: [],
        ref: "users",
      },],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "messages",
      default:null
    },
  },
  {
    timestamps: true,
  }
);

export const userChatSchema = model("chats", chatSchema);
