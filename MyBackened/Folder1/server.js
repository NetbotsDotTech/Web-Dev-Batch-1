import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./src/routes/register.route.js"

const app=express()
dotenv.config()

app.use(express.json())
app.use('/users',router)

const connectDatabase=async()=>{
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log(`Data_Base Connected Successsfully..........${process.env.DATABASENAME}`)

        
    } catch (error) {

        console.log(`Data_Base Conncetion error which is : ${error}`)

        
    }

    await mongoose.connection.on('disconnect',()=>{
        console.log("Database Disconnectd")
    })
}

const port=process.env.PORT || 2000

app.listen(port,()=>{
    connectDatabase()
    console.log(`Server is running at port number......${port}`)
})