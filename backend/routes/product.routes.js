import express from "express"
import {
    addProduct,
    deleteProduct,
    getProductById,
    getProducts,
    updatePrduct
} from "../controllers/product.controller.js";

const router = express.Router();



router.post('/', addProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updatePrduct);
router.delete('/:id', deleteProduct);

//http://localhost:8000/api/user/register

export default router;