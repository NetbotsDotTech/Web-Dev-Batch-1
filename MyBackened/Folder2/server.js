import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './src/routes/user.route.js'


dotenv.config()
const app=express()
app.use(express.json())

app.use('/user',router)
//DataBase work

const databaseConnection=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/')
        console.log("Database Connected Successfully at......",process.env.DATABASENAME)
        
    } catch (error) {
        console.log(`Database Connection Error which is:${error}`)
        
    }

    mongoose.connection.on('disconnected',()=>{
        console.log("MongoDB  Disconnected..")
    })
}

app.get('/user',(req,res)=>{
    res.json({message:"Hello "})
})

const port=process.env.PORT || 6000
app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is listing at ${port}`)
    
})