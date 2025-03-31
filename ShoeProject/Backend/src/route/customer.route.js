import express from 'express'
import { addWishlist, delCustomerbyId, login, register, removeWishlist, updateCustomerbyId, viewAllCustomer, viewCustomerbyId } from '../controller/customer.controller.js'
import { upload } from '../middlewares/multer.middleware.js'


const router=express.Router()

router.post('/register',upload.single('image'),register)
router.post('/login',login)
router.get('/get/:id',viewCustomerbyId)
router.get('/get',viewAllCustomer)
router.delete('/del/:id',delCustomerbyId)
router.put('/update/:id',updateCustomerbyId)


export default  router