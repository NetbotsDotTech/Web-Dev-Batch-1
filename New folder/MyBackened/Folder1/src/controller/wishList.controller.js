import User from '../model/user.model.js'
export const addWishlist=async(req,res,next)=>{
    const {userId,productId}=req.params;
  
    try {
      const updateUser=await User.findByIdAndUpdate(
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
  export const removeWishlist=async(req,res,next)=>{
  const {userId,productId}=req.params;
  try {
    const deleteWishList=await User.findByIdAndUpdate(
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
      message:`Wishlist Successfully Removed which Id is:${userId}`,
    })
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message:"Server side error",
      err:error.message,

    })
    
  }
  }