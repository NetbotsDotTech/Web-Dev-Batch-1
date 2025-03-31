import mongoose from "mongoose";
const subCategorySchema=new mongoose.Schema({
    brand:{
        type:String,
        trim:true
    },
    color:{
        type:String,
        trime:true
    },
    size:{
        type:Number,
        trime:true
    },
    stock:{
        type:Number,
        trime:true
    },
    price:{
        type:Number,
        default:0
    },
    sku:{
        type:String,
            
    }
},{timestamps:true})

export default mongoose.model('ProductSubcategory',subCategorySchema)