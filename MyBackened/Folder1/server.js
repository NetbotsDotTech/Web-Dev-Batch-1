import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './src/routes/patient.route.js'

const app=express()

app.use(express.json())
dotenv.config()
app.use('/hospital',router)

const databaseConnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Conncetion Successfully.........and the databased name is${process.env.DATABASENAME}`)
    } catch (error) {
        console.log(`Data Connection Error..........${error}`)
        
    }

    await mongoose.connection.on('disconnected',()=>{
        console.log("MongoDB is Disconnect..........")
    })
}

app.get('/',(req,res)=>{
    res.json({
        message:"Hello From Backened"
    })
})



const port=process.env.PORT || 4000
app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is runing at port ...${port}`)
})