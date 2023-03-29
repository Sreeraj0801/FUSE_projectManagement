import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    credential: {
        type: String,
        required:true
    },
    pword :{
        type:String,
        required:true
    }
})
  
  
  export default mongoose.model('users',LoginSchema);