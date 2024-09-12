import StudentModel from "../models/student.model.js";

const student= async(req,res)=>{
    const {studentName,fatherName,registrationNumber,currentSemester,...rest}=req.body
    

    try {
        const studentVar=new StudentModel({
            studentName,
            fatherName,
            registrationNumber,
            currentSemester,
            ...rest
            

        })

        await studentVar.save();
        res.status(201).json({
            status:true,
            message:"Student Insert his Detail Successfully........",
            data:studentVar
        })
        console.log(studentVar)

        
    } catch (error) {
       res.status(500).json({
        message:"Student does Error......",
        err:error

       })
    }
}

export default student