import mongoose from "mongoose"
import dotenv from 'dotenv'


dotenv.config()

export const databaseConnection=async()=>{
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

