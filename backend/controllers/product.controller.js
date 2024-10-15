import { Product , SubCategory} from "../models/productModel.js";

// Add new product with image upload
export const addProduct = async (req, res, next) => {
  const {
    name,
    description,
    category,
    review,
    brand,
    color,
    size,
    stock,
    price,
    sku
  } = req.body;

  try {
    // Handle image upload if present
    let images = [];
    if (req.files) {
      images = req.files.map(file => file.path); // Store file paths in images array
    }

    const subCategory = new SubCategory({
      brand,
      color,
      size,
      stock,
      price,
      sku
    });

    // Save SubCategory
    const savedSubCategory = await subCategory.save();
    // Create product
    const product = new Product({
      name, 
      description, 
      category, 
      images,
      subCategory: savedSubCategory._id , 
      review
    });
    await product.save();

    res.status(201).json({
      message: "Product added successfully.",
      status: 201,
      result: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message
    });
  }
};

// Get product by ID
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('subCategory');
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
        status: 404
      });
    }

    res.status(200).json({
      message: "Product retrieved successfully.",
      status: 200,
      result: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message
    });
  }
};

// Get all products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('subCategory');
    res.status(200).json({
      message: "Products retrieved successfully.",
      status: 200,
      result: products
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message
    });
  }
};

// Update product by ID
export const updateProduct = async (req, res, next) => {
  const { name, description, category, ...others } = req.body;

  try {
    // Find product by ID and update it
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
        status: 404
      });
    }

    // Handle image update if provided
    let images = product.images;
    if (req.files) {
      images = req.files.map(file => file.path);
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.images = images;
    Object.assign(product, others);

    await product.save();

    res.status(200).json({
      message: "Product updated successfully.",
      status: 200,
      result: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message
    });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
        status: 404
      });
    }

    res.status(200).json({
      message: "Product deleted successfully.",
      status: 200
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message
    });
  }
};
