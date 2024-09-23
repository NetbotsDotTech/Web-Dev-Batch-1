import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './DB/local.db.js'
import router from './route/routers.route.js'
import routerPro from './route/product.router.js'



const app=express()
dotenv.config()
app.use(express.json())
app.use('/user',router)
app.use('/product',routerPro)

const port=process.env.PORT ||6000

app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is running ........ at ${port}`)
})