import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(express.json());





const DatabaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to mongoDB.");
    } catch {
        console.log("Connection Error");
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected!");
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Backend" })
})
app.post("/post/:id", (req, res) => {
    const body = req.body.email
    const query = req.query.name
    const param = req.params.id
    const Data = `Requests From Frontend ", Body : ${body}, Query :  ${query}, Param: ${param}`

    res.status(200).json({ message: "Successfull", data: Data })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    DatabaseConnection();
    console.log(`Server Listen on port ${port}`);
    console.log("Connected to backend.");
});