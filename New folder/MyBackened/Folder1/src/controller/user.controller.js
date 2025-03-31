import User from '../model/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register=async(req,res)=>{
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

export const login=async(req,res)=>{
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

        res.cookie('acccess',token,{httpOnly:false})
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

export const viewUserbyId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).populate('wishList');
    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not Found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: `User with this Id is: ${id}`,
      userDetail: user,
    });
  } catch (error) {
    return res.status(500).json({
      // status: 500,
      message: error.message,
      err: error,
    });
  }
};

export const delUserbyId = async (req, res, next) => {
    const { id } = req.params; 
    try {
      const delUser = await User.findByIdAndDelete(id); // await is necessary to wait for the result
      if (!delUser) {
        return res.status(404).json({
          status: 404,
          message: `User with ID ${id} not found.`,
        });
      }
      return res.status(200).json({
        status: 200,
        message: `Successfully deleted the user with ID: ${id}`,
        deletedUser: delUser, // Return deleted user details if needed
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Server side error",
        err: error.message, // Provide the error message for better debugging
      });
    }
  };
  

  export const updateUserbyId = async (req, res, next) => {
    const { id } = req.params;
    const updateData = req.body; // Data to update the user with
  
    try {
      const updatedUser = await User.findByIdAndUpdate(id, updateData, {
        new: true, // Return the updated user after modification
        runValidators: true, // Ensure any schema validators are enforced
      });
  
      if (!updatedUser) {
        return res.status(404).json({
          status: 404,
          message: `User with ID ${id} not found.`,
        });
      }
  
      return res.status(200).json({
        status: 200,
        message: `Successfully updated the user with ID: ${id}`,
        updatedUser, // Return the updated user details
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "Server side error",
        err: error.message, // Return the error message for debugging
      });
    }
  };

export const viewAllUser=async(req,res,next)=>{
    try {
        const allUser=await User.find().populate('wishList')
        if(!allUser){
            return res.status(400).json({
                status:400,
                message:"User not Found"

            })
        }
        return res.status(200).json({
            status:200,
            message:"All user are:-",
            userDetail:allUser
        })
        
    } catch (error) {
        console.log("Error are:",error)
        return res.status(500).json({
            status:500,
            message:"Server side error ",
            err:error,

        })
        
    }
}
  
export const deleteAllUser=async(req,res,next)=>{
  try {
      
  } catch (error) {
    
  }

}
export const addWishlist=async(res,req,next)=>{
  const {userId,productId}=req.params;

  try {
    const updateUser=new User.findByIdAndUpdate(
      userId,
      {
        $addToSet:{wishList:productId} // Adds prodId only if it's not already in the array
      },
      {
        new:true

      }
    )
    if(!updateUser){
      return res.status(404).json({
        status:404,
        message:"User not Found",
      })
    }
    res.status(201).json({
      status:201,
      message:"WishList add successfully.....",
      userDetail:updateUser
    })
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status:500,
      message:"Server side error",
      err:error.message,
    })
    
  }
}
export const removeWishlist=async(res,req,next)=>{
const {userId,productId}=req.body;
try {
  const deleteWishList=new User.findByIdAndUpdate(
    userId,
    {
      $pull:{wishList:productId}// Removes prodId from the array
    },
    {
      new:true
    }

  );
  if(!deleteWishList){
    return res.status(404).json({
      status:404,
      message:"User not Found",
    })
  }
  
  res.status(200).json({
    status:200,
    message:"WishList remove successfully.....",
  })
  
} catch (error) {
  console.log(error.message);
  res.status(500).json({
    status:500,
    message:`Wishlist Successfully Removed which Id is:${userId}`,
    data:deleteWishList
  })
  
}
}
