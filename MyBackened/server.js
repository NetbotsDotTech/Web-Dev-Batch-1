import express from 'express'

const app=express()

app.use(express.json())

app.get('/api',(req,res)=>{
    res.json({message:"Hello I am talking from Backend"})
})
app.listen( 3000,()=>{
    console.log("Server is Running")
})