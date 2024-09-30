import express from 'express'
import cookieParser from 'cookie-parser';
import dataBaseConnection from './src/DB/config.Database.js';
import userRouter from './src/router/user.router.js';
import productRouter from './src/router/product.router.js';
import ownerRouter from './src/router/owner.router.js';



const app=express();
app.use(express.json())
app.use(cookieParser())
app.use('/user',userRouter)
app.use('/product',productRouter)
app.use('/owner',ownerRouter)



const port=process.env.PORT || 4000
app.listen(port,()=>{
    dataBaseConnection() 
    console.log(`Server is running at Port Number:- ${port}`)
})