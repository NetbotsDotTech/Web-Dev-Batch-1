import mongoose from "mongoose";
const userSchema=new mongoose.Schema({

    fullName:{
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
    
    cart:{
        type:Array,
        default:[]
    },
    
    isAdmin:{
        type:Boolean
    },
    
    order:{
        type:Array,
       default:[]
    },
    
    contact:{
        type:Number,
        required:true,
        trim:true
    },
    
    Picture:{
        type:String,
        required:true,
        trim:true
    },

},{timestamps:true});
export default mongoose.model('User',userSchema)