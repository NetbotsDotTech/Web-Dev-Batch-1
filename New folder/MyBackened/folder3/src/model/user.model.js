import mongoose  from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    role:{
        default:['admin']
    },
    phoneNumber:{
        type:Number,
        required:true,
        trim:true
    },
    DOB:{
        type:String,
        required:true,
        trim:true
    },
  
},{timestamps:true })
export default mongoose.model('User',userSchema)