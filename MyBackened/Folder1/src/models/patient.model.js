import mongoose from "mongoose";

const patientSchema=mongoose.Schema({
    patientName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    patientAge:{
        type:Number,
        required:true,
        
    },
    patientGender:{
        type:String,
        required:true,
        
    },
    patientAddress:{
        type:String,
        required:true,
        trim:true
    }
})

export default mongoose.model('Patient',patientSchema)