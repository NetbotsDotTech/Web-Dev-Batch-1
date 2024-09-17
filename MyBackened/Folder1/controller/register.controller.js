import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
const register=async(req,res)=>{
    const {userName,email,password,firstName,lastName,...rest}=req.body
    const salt=await bcrypt.genSalt(10)
    const handlePass=await bcrypt.hash(password,salt)
    try {
        const user=new User({
            userName,
            email,
            password:handlePass,
            firstName,
            lastName,
            ...rest


        })
        await user.save();
        res.status(201).json({
            status:true,
            message:"Register Successfully........!",
            data:user
        })
        
    } catch (error) {
   
        console.log(error);
        
        res.status(500).json({
            status:true,
            message:'Server side Error.......! Please try again to register',
            err:error
        })
        
    }

}
export default register