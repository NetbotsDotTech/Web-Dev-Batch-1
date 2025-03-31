import express from 'express'
import { addWishlist, removeWishlist } from '../controller/wishList.controller.js';

const wishRoute=express.Router();

wishRoute.post('/addWish/:userId/:productId',addWishlist);
wishRoute.delete('/delWish/:userId/:productId',removeWishlist)

export default wishRoute;