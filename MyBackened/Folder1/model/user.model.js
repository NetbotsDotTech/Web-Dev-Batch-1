    import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    firstName:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        uniqe:true,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        
    },
    DOB:{
        type:String,
        required:true,
       
    },
    address:{
        type:String,
        required:true,
        uniqe:true,
        
    },
    role:{
        type:String,
        default:['admin']
    },

})
export default mongoose.model('User',userSchema)