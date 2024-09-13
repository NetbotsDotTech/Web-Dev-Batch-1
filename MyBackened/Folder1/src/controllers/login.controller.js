import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


const Login=async(req,res,next)=>{

    const {email,password}=req.body;
    try {

        const user= await User.findOne({email})
        if(!user){
            res.status(401).json({
                message:"email not exits......"
            })
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(401).json({
                message:"Invalid password....."
            })
        }
        const payload={User:user.id,role:user.role[0]}
        const token=jwt.sign(payload,process.env.SECRET)
        res.cookie("access token...",token,{httpOnly:true})
        res.status(200).json({
            message:`Login Successfully........${user.userName}`
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Try again to login ......",
            err:error
        })
        
    }
}
export default Login