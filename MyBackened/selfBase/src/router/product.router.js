import express from "express";

const productRouter=express.Router();

productRouter.get('/',(req,res)=>{
    res.send("hey i am working in product")
})





export default productRouter;