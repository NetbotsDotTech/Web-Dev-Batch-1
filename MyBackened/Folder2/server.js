import express from 'express'
import dotenv from 'dotenv'
import router from './src/routes/user.route.js'
import { databaseConnection } from './src/DB/localdatatbase.db.js'
import { productRouter } from './src/routes/product.router.js'


dotenv.config()
const app=express()
app.use(express.json())

app.use('/user',router)
app.use('/product',productRouter)

//DataBase work




const port=process.env.PORT || 6000
app.listen(port,()=>{
    databaseConnection()
    console.log(`Server is listing at ${port}`)
    
})