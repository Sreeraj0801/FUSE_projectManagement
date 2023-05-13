import mongoose, { Schema, model } from "mongoose";
const messageSchema = new Schema({
    readBy:{
        type:Array,
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    content:{
        type:String,
        trim:true,
        required:true,
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref:'chats'
    }
},{
    timestamps:true
});

export const userMessageSchema = model('messages',messageSchema);
