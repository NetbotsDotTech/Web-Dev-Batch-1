import express from 'express'
import { deletePurchaseProduct, purchaseProduct, AllPurchaseProduct, viewPurchaseProductbyId } from '../controller/productPurchase.controller.js';
import { upload } from '../middlewares/multer.middleware.js';
import { verifyUser } from '../middlewares/verifyToken.middleware.js';

const purchaseRouter=express.Router()
 
purchaseRouter.post('/add',purchaseProduct)
purchaseRouter.get('/get/:id',viewPurchaseProductbyId)
purchaseRouter.get('/getAll',verifyUser,AllPurchaseProduct)
purchaseRouter.delete('/del/:id',deletePurchaseProduct)




export default purchaseRouter;