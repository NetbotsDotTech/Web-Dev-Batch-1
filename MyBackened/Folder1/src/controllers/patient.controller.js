import Patient from '../models/patient.model.js'

const patientController=async(req,res)=>{
    const {patientName,patientAge,patientGender,patientAddress,...rest}=req.body
    try {

        const patientInfor=new Patient({
            patientName,
            patientAge,
            patientGender,
            patientAddress,
            ...rest
        })

        await patientInfor.save();
        res.status(201).json({
            status:true,
            message:"Successfully Patient Register......",
            data:patientInfor

        })

        
    } catch (error) {

        res.status(500).json({
            status:true,
            message:"Patient does something wrong.......",
            err:error
        })
        
    }


}
export default patientController