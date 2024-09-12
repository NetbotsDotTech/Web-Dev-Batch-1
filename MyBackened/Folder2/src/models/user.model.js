import mongoose from "mongoose";

const userSchema=mongoose.Schema({

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
        trim:true        
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
    DOB:Number,
    address:String,
    

    
    
    
})

export default mongoose.model("User",userSchema)