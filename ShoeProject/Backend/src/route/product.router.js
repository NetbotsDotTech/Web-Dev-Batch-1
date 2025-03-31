import express from 'express'
import { addproduct, deleteProduct, getProduct, getProductById, updateProduct } from '../controller/product.controller.js'
import { upload } from '../middlewares/multer.middleware.js';
import { verifyToken } from '../middlewares/verifyToken.middleware.js';

const routerPro=express.Router()

// routerPro.post('/add',upload.array("images",10),(req,res)=>{
//     console.log('always be ready for .....')
//     res.send("hellow i am comming")

// });
routerPro.post('/add', upload.single('productImage'), addproduct);
routerPro.get('/get/:id',getProductById);
routerPro.get('/get',getProduct)
routerPro.delete('/del/:id',deleteProduct);
routerPro.put('/update/:id',upload.single('productImage'),updateProduct)

export default routerPro;