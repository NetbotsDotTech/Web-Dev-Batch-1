import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const Login=async(req,res,next)=>{
    const {email,password}=req.body;

    try {
        const user= await User.findOne({email})
        if(!user){
            res.status(401).json({
                status:true,
                message:"Email dose not exits...."
            })
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).json({
                status:true,
                message:"Invalide passwor...!!!"
            })
        }
        const payload={id:user.id,role:user.role[0]}
        const token=jwt.sign(payload,process.env.SECRET)
        res.cookie('Access_token',token,{httpOnly:true})
        res.status(200).json({
            status:true,
            message:"Login Successfully........!"


        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:true,
            message:"Error in login process.....",
            err:error
        })
        
    }
}
export default Login