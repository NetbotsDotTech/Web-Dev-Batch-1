import mongoose from "mongoose";
const ownerSchema=mongoose.Schema({
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
    
    
    Picture:{
        type:String,
        trim:true
    },
})
export default mongoose.model('Owner',ownerSchema);