import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dataBaseConnection=async(res,req)=>{
    try {
        await mongoose.connect(process.env.DB)
        console.log(`Database connected Successfull.......at ${process.env.DATABASENAME}`)

        
    } catch (error) {
        console.log(`Database connection Error :${error}`)
        
    }
}
export default dataBaseConnection;