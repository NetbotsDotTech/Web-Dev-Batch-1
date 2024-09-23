import express from 'express'
import { addProduct, delProduct, getProduct, updateProduct } from '../controller/product.controller.js'

const routerPro=express.Router()

routerPro.post('/add',addProduct);
routerPro.get('/get/:id',getProduct);
routerPro.delete('/del/:id',delProduct);
routerPro.put('/update/:id',updateProduct)

export default routerPro;