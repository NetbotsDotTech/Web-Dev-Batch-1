import express from 'express'
import dataBaseConnection from './src/DB/index.db.js';


const app=express();
app.use(express.json())


const port=process.env.PORT || 4000
app.listen(port,()=>{
    dataBaseConnection() 
    console.log(`Server is running at Port Number:- ${port}`)
})