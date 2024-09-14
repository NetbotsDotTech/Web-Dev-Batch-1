import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'

const register=async(req,res,next)=>{
    const {userName,email,password,...rest}=req.body
    const salt=await bcrypt.genSalt(10);
    const incryptedPassword=await bcrypt.hash(password,salt)
    try {
        const user=new User({
            userName,
            email,
            password:incryptedPassword,
            ...rest
        })

        await user.save();
        res.status(201).json({
            status:true,
            message:"user register Successfully......",
            data:user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status:true,
            message:"Server error when a user register himself ......",
            err:error,
        })
        
    }

}

export default  register
