import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
const Login=async(req,res,next)=>{
    const {email,password}=req.body
    try {
        const user=await  User.findOne({email})
        if(!user){
            return res.status(401).json({
                message:"Email not found"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"Invalide Password"})
        }
        const payload={userId: user._id,role:user.roles[0]}
        const token=jwt.sign(payload,process.env.JWT_SECRET)

        res.cookie('access_token',token,{httpOnly:true})
        res.status(200).json({message:"Login Successfully",Detail:user.email})
       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Error in Login ",
            err:error
        
        })
    }
}
export default Login