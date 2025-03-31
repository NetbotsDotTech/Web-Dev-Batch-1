import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dataBaseConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB);
        console.log(`Database connected Successfully with ${process.env.DATABASENAME}`)
        
    } catch (error) {
        console.log(`Database Connection Error: ${error}`)
    }
}
export default dataBaseConnection;