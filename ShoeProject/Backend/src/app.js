
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import routerPro from './route/product.router.js';
import router from './route/customer.route.js';
import purchaseRouter from './route/parchaseProd.route.js';
import wishRoute from './route/wishlist.route.js';



import path from 'path';
import { fileURLToPath } from 'url';

// Resolve the __dirname of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Define the path to the 'media' folder using an absolute path from the project root
const mediaPath = path.join(__dirname, '..', 'media');

// Log to verify that the path is correct


// Serve the 'media' folder as static content
app.use('/media', express.static(mediaPath));


const allowedOrigins = [
    'http://localhost:5173',  //  Dashboard URL
    'http://localhost:5174'   // Frontend URL
  ];
  
  app.use(cors({
    origin: function(origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));
// app.use("/media", express.static(path.join(__dirname, "media")));
app.use(express.json({limit:process.env.LIMITS}));
app.use(express.urlencoded({extended:true,limit:process.env.LIMITS}));
app.use(cookieParser())


app.use('/api/customer',router)
app.use('/api/product',routerPro)
app.use('/api/purchase',purchaseRouter)
app.use('/api/wish',wishRoute)

export default app;