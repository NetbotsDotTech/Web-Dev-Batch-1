import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()


const app=express()
app.use(express.json())


const databaseConnection=async()=>{
    try {
      await  mongoose.connect(process.env.MONGO_URI)
      console.log("Data base connected......")
    } catch (error) {
        console.log(`Database Connection Error ${error}`)
    }
}

mongoose.connection.on('Disconnected',()=>{
    console.log("MongoDB Disconnected")
})

app.get('/',(req,res)=>{
    res.json("I am Talking from Backend")
})
app.post("/post/:id", (req, res) => {
    const body = req.body.email
    const query = req.query.name
    const param = req.params.id
    const Data = `Requests From Frontend ", Body : ${body}, Query :  ${query}, Param: ${param}`
    res.status(200).json({ message: "Successfull", data: Data })
})

const port=process.env.PORT
console.log(port)

app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is running at the port${port}`)
    console.log("connected ")
})