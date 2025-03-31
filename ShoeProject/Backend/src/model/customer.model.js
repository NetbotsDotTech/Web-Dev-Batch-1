    import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        // required:true,
        uniqe:true,
        trim:true
    },
    email:{
        type:String,
        // required:true,
        uniqe:true,
        trim:true
    },
    password:{
        type:String,
        // required:true,
        uniqe:true,
        trim:true
    },
    image:{
        type:[String],
    },
    phoneNumber:{
        type:String,
        // required:true,
        // uniqe:true,
        trim:true
    },
    address:{
        type:String,
        // required:true,   
    },
    role:{
        type:[String],
        default:"user"
    },
    wishList:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        default:null

        }
    ]

})
export default mongoose.model('User',userSchema)