import express from "express";
import { ownerController } from "../controller/owner.controller.js";

const ownerRouter=express.Router();

ownerRouter.get('/',(req,res)=>{
    res.send("hey i am working in owner")
})

ownerRouter.post('/create',ownerController)




export default ownerRouter;