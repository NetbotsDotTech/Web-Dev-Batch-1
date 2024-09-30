import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const loginController=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
            res.status(400).json({
                message:"Email not exits..."
            })
        }

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({
                message:"Invalide password...."
            })
        }

        const payload={userId:user._id,role:user.role}
        const token=jwt.sign(payload,process.env.JWT_SECRET)

        res.cookie('Acces token is: ',token,{httpOnly:true});
        res.status(200).json({
            message:"Login Successfully ...",

        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something wronge at the server side.......",
            err:error
        })
        
    }
}