import express from "express";


const app = express()

app.use(express.json());


app.get("/api", (req, res)=>{
    res.json({message:"Hello from Backend"})
    })
    
app.listen(8000, ()=>{
    console.log("Server is Running")
})