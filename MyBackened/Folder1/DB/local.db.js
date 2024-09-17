import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const databaseConnection=async()=>{
    try {
        await mongoose.connect(`${process.env.DATABASELINK}`)
        console.log(`Database Connect at ${process.env.DATABASENAME} Successfully........!`)
        
    } catch (error) {
        console.log(`Database Connection error: ${error}`)

        
    }
}
export default databaseConnection;