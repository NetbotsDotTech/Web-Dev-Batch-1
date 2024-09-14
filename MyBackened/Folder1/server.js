import express from "express"
import databaseConncetion from "./src/DB/user.db.js"
import dotenv from 'dotenv'
import router from "./src/router/regeister.router.js"

dotenv.config()



const app=express()
app.use(express.json())

app.use('/user',router)

const port =process.env.PORT || 5000

app.listen(port,()=>{
    databaseConncetion()
    console.log(`Server is running....... at port number ${port}`)
})

