import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:10
    },
    comment:{
        type:String,
        required:true,
        trim:true,

    }


},{timestamps:true})
export default mongoose.model('Reviwe',reviewSchema);