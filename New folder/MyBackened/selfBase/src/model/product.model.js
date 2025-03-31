import mongoose, { mongo } from "mongoose";
const productSchema=mongoose.Schema({
    productName:{
        type:String,
        required:true,
        trim:true
    },
    productImage:{
        type:String,
        required:true,
        trim:true
    },
    productPrice:{
        type:Number,
        required:true,
    },
    bgColor:{
        type:String,
        required:true
    },
    panelColor:{
        type:String,
        required:true
    },
    textColor:{
        type:String,
        required:true
    }
})
export default mongoose.model('ProductDetail',productSchema);