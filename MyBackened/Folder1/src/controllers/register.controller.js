import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'

const register=async(req,res)=>{
    const {userName,email,password,firstName,lastName,fatherName,...rest}=req.body
    const salt=await bcrypt.genSalt(10)
    const incryptedPassword= await bcrypt.hash(password,salt)

    try {

        const user=new User({
            userName,
            email,
            password:incryptedPassword,
            firstName,
            lastName,
            fatherName,
            ...rest

        })
        await user.save();
        res.status(201).json({
            status:true,
            message:"User Registrated Successfully........",
            data:user,
        })

        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status:true,
            message:"Server side Problem in register Controller......",
            error:err
        })
    }
}

export default  register
