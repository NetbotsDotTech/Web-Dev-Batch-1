import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerPro from './src/route/product.router.js';
import databaseConnection from './src/DB/local.db.js';

const app=express();
dotenv.config();

app.use(cors({
    origin:'http://localhost:3000' ,
    credentials:true
}))

app.use(express.json({limit:process.env.LIMITS}));
app.use(express.urlencoded({extended:true,limit:process.env.LIMITS}));
app.use(cookieParser())

app.get('/api/product',(req,res)=>{
    res.send("I am from the backend")
})

app.use('/api/product',routerPro)


const port=process.env.PORT|| 1000

app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is running at the port ${port}`)

})