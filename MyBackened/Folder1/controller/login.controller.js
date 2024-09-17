import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const Login=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
           return res.status(401).json({
                status:true,
                message:"Email not exits ...."
                })

        }
        const isMatch=await bcrypt.compare(password,user.password)
        // console.log(password, "user",user.password)
        if(!isMatch){
           return res.status(401).json({
                status:true,
                message:"Invalide Password...."
            })
        }

        const payload={userId:user._id,role:user.role[0]}
        const token=jwt.sign(payload,process.env.SECRET)

        res.cookie('Access Token:',token,{httpOnly:true})
        res.status(200).json({
            status:true,
            message:`Login Successfully with ${user.userName}`
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:true,
            message:"Server Error .......",
            err:error
        })
        
    }
}
export default Login