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
            trim:true
            },
    password:{
                type:String,
                required:true,
                unique:true,
                trim:true
                },
    role:{
        type:String,
        role:["user"],
        unique:true
    }
})
export default mongoose.model('User',userSchema)