import User from '../models/user.model.js'
const controller=async(req,res,next)=>{
    const {userId,prodId}=req.params;
    try {
        const whishlist=new User.findByIdAndUpdate({userId,whishlist:prodId})
        await whishlist.save();
        res.json({
            status:200,
            message:"add product as a faviorate",
            data:whishlist

        })
    
    } catch (error) {
        console.error(error.message)
        res.json({
            message:"Server side error",
            err:error
        })
        
    }
}