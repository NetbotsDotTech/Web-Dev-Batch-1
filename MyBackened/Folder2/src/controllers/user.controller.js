import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
const register=async(req,res)=>{

    const {userName,email,firstName,lastName,password,...rest}=req.body
    const salt=await bcrypt.genSalt(5)
    const hashedPassword=await bcrypt.hash(password,salt)

    try {
        const user=new User({
            userName,
            email,
            firstName,
            lastName,
            password: hashedPassword,
            // password,
            ...rest
        })

        await user.save();
        res.status(201).json({
            status: true,
          message: 'User created successfully',
          data:user
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:   'Error creating  user',
            err:error
        })
    }


}
export default register