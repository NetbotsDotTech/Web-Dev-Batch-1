import express from "express";
import { addProduct, getProductById, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import upload from "../utils/multer.js"; // Multer config

const router = express.Router();

// Routes
router.post("/", upload.array("images", 5), addProduct); // Limit to 5 images
router.get("/:id", getProductById);
router.get("/", getProducts);
router.put("/:id", upload.array("images", 5), updateProduct); // Allow updating images
router.delete("/:id", deleteProduct);

export default router;
