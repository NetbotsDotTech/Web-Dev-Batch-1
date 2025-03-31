import dotenv from 'dotenv';
import databaseConnection from './DB/local.db.js';
import app from './app.js';
dotenv.config()


const port=process.env.PORT ||6000
databaseConnection()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port: ${port}`)
        app.on('Error:',(error)=>{
            console.log("Error: ",error)
            throw error
        })
    })

})
.catch((error)=>{
    console.log("Mongo db connection error !!",error)
})
