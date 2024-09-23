import mongoose from "mongoose";
const subCategorySchema=new mongoose.Schema({
    brand:{
        type:String,
        required:true,
        trim:true
    },
    color:{
        type:String,
        required:true,
        trime:true
    },
    size:{
        type:String,
        required:true,
        trime:true
    },
    stock:{
        type:Number,
        required:true,
        trime:true
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

export default mongoose.model('Subcategories',subCategorySchema)