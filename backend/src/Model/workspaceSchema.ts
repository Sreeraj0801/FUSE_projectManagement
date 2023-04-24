import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
    workspaceName:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        default:'#fff'
    },
    masterId:{
        type:String,
        required:true
    },
    members:{
        type:Array,
        default:[]
    },
    projects:{
        type:Array,
        default:[]
    }
})

export const userWorkspaceSchema = mongoose.model("workspaceSchema",workspaceSchema,'workspace')