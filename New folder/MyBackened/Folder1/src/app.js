import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import routerPro from './route/product.router.js';
import router from './route/user.route.js';
import purchaseRouter from './route/parchaseProd.route.js';
import wishRoute from './route/wishlist.route.js';

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGION,
    credentials:true
}))

app.use(express.json({limit:process.env.LIMITS}));
app.use(express.urlencoded({extended:true,limit:process.env.LIMITS}));
app.use(cookieParser())


app.use('/api/user',router)
app.use('/api/product',routerPro)
app.use('/api/purchase',purchaseRouter)
app.use('/api/wish',wishRoute)

export default app;