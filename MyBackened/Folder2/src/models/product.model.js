import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    images:{
        type:[String],
        required:true
    },
    category:{
        type:String,
        required:true,
        trim:true,
        enum:['men','women','kids']
    },
    subCategories:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'subCategory'
    },
    rewive:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'rewive',
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

},
{
    timestamps:true
})

export default mongoose.model("Product",productSchema)