import mongoose from "mongoose";
import rewive from './rewive.model.js'
import subCategories from './subcategory.model.js'

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
    }

},
{
    timestamps:true
})

export default mongoose.model("Product",productSchema)