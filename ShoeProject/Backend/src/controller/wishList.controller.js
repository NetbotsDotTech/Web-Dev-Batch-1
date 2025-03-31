import mongoose from 'mongoose';
import User from '../model/customer.model.js'
export const addWishlist = async (req, res, next) => {
  const { userId, productId } = req.params;

  // Check if productId is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    console.log("Invalid productId received:", productId); // For debugging
    return res.status(400).json({
      status: 400,
      message: "Invalid product ID",
    });
  }

  try {
    const convertedId = new mongoose.Types.ObjectId(productId);
    console.log("Converted ObjectId:", convertedId);

    const updateUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { wishList: convertedId } }, // Adds productId if not already in wishlist
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    res.status(201).json({
      status: 201,
      message: "Wishlist updated successfully",
      userDetail: updateUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: 500,
      message: "Server side error",
      err: error.message,
    });
  }
};

  export const removeWishlist=async(req,res,next)=>{
  const {userId,productId}=req.params;
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    console.log("Invalid productId received:", productId); // For debugging
    return res.status(400).json({
      status: 400,
      message: "Invalid product ID",
    });
  }
  try {
    const convertedId = new mongoose.Types.ObjectId(productId);
    // console.log("Converted from remov e ObjectId:", convertedId);


    const deleteWishList=await User.findByIdAndUpdate(
      userId,
      {
        $pull:{wishList:convertedId}// Removes prodId from the array
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