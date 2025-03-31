import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    productname:{
        type:String,
        trim:true,
        
    },
    productDescription:{
        type:String,
        trim:true,        
    },
    images:{
        type:[String]
    },
    category:{
        type:String,
        trim:true,
        enum:['men','women','kids']
    },
    Subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subcategory'
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reviwe'
    },


},{timestamps:true})

export default mongoose.model('Product',productSchema)