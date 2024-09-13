import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true,
        unique:true,
       
    },
    firstName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    fatherName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    DOB:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        
    },
    PhoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    Address:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    role:{
        type:[String],
       default:["user"]
    },
})

export default mongoose.model("User",userSchema)