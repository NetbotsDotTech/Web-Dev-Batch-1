import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config
const databaseConncetion = async()=>{
    try {
        await mongoose.connect(process.env.DATABASECONNECTION)
        console.log(`Database Connected Successfully........... at ${process.env.DATABASENAME}`)
        
    } catch (error) {
        console.log(`Database connectoin error..........`,error);
     
        
    }
}
export default databaseConncetion
