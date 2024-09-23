import express from 'express'
import { addProduct, deleteProduct, getProductById, updateProduct } from "../controllers/product.controller.js";

export const productRouter=express.Router();

productRouter.post('/add',addProduct);
productRouter.get('/get/:id',getProductById)
productRouter.delete('/del/:id',deleteProduct)
productRouter.put('/update/:id',updateProduct)
