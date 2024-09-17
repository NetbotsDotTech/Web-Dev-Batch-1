import mongoose from "mongoose";

const subCategory=new mongoose.Schema({
    brand:{
        type:String,
        required:true,
        trim:true
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    size:{
        type:String,
        required:true,
        trim:true
    },
    stock:{
        type:Number,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    sku:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps:true})

export default mongoose.model("SubCategory",subCategory)