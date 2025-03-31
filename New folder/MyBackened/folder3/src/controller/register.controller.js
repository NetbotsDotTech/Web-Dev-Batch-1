import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
export const registerController=async(req,res)=>{
    const {userName,email,password,firstName,...other}=req.body
    const salt=await bcrypt.genSalt(10);
    const incryptPassword=await bcrypt.hash(password,salt)
    try {
        const user=new User({
            userName,
            email,
            password:incryptPassword,
            firstName,
            ...other
        })

        await user.save();
        res.status(201).json({
            message:"Successfully registered......",
            data:user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Something went wrong at the server side ....",
            err:error
        })
        
    }
}
