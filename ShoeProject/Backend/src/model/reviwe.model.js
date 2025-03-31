import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String,
        trim:true,

    }


},{timestamps:true})
export default mongoose.model('Reviwe',reviewSchema);