import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName:{
        type:String,
        required:true,
    },
    projectDiscription:{
        type:String,
        required:true
    },
    projectTheme:{
        type:String,
        required:true
    },
    workspaceName:{
        type:String,
        required:true
    },
    members:{
        type:Array,
        default:[]
    },
    toDate:{
        type:String,
        required:true
    },
    fromDate:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    pending:{
        type:Boolean,
        default:false,
    }
})

export const userProjectSchema:any = mongoose.model("projectSchema",projectSchema,'projects')