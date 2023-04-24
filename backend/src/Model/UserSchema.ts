import mongoose from "mongoose";
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Invalid Email"],
    },
    mobile: {
        type: String,
        validate: [
            {
                validator: function (value: string) {
                    return /^\d{10}$/.test(value);
                },
                message: "Invalid mobile number",
            },
        ]
    },
    pword:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    workspace:{
        type:Array
    }
});

export const  userSchemaRegistration =  mongoose.model ('users',userSchema);
