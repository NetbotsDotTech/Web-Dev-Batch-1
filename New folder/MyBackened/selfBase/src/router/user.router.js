import express from "express";

const userRouter=express.Router();

userRouter.get('/',(req,res)=>{
    res.send("hey i am working in user")
})





export default userRouter;