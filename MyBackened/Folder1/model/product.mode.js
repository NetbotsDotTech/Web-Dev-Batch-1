import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
        trim:true,
        
    },
    productDescription:{
        type:String,
        required:true,
        trim:true,        
    },
    image:{
        type:[String]
    },
    category:{
        type:String,
        required:true,
        trim:true,
        enum:['men','women','kids']
    },
    subCategories:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subcategory'
    },
    review:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'reviwe'
    },


},{timestamps:true})

export default mongoose.model('Product',productSchema)