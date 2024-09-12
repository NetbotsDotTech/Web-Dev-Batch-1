import mongoose from "mongoose";

const studentSchema= mongoose.Schema({
    studentName:{
        type:String,
        required:true,
        trim:true
    },
    fatherName:{
        type:String,
        required:true

    },
    registrationNumber:{
        type:String,
        unique:true,
        required:true,
        
    },
    currentSemester:{
        type:String,
        require:true,
        trim:true
    },

})

 export default mongoose.model("StudentModel",studentSchema)