import Product from '../model/product.model.js'
import ProductSubcategory from '../model/subcategories.model.js'
import Reviwe from '../model/reviwe.model.js'


// Add Product
export const addproduct = async (req, res, next) => {
  const { productName, productDescription, category, brand, color, size, stock, price, rating, comment, sku } = req.body;
  console.log("req.body", req.body);

  try {
      let images = [];
      if (req.file) { // Changed from req.files to req.file since we're using single file upload
          images.push(req.file.path);
      }
      console.log("Uploaded Image:", images);

      // Subcategory creation
      const subCategory = new ProductSubcategory({
          brand,
          color,
          size,
          stock,
          price,
          sku,
      });
      const savedSubCategory= await subCategory.save();


      // Review creation
      const review = new Reviwe({
          rating,
          comment,
      });

      // Product creation
      const product = new Product({
          productName,
          productDescription,
          category,
          images,
          productSubcategory: savedSubCategory,
          review: review,
      });

      await product.save();
      console.log("product is:",product)

      res.status(201).json({
          status: 201,
          message: "Product added successfully!",
          productDetail: product,
      });

  } catch (error) {
      console.log(error);
      res.status(500).json({
          status: 500,
          message: "Server-side error",
          err: error,
      });
  }
};


export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate('productSubcategory');
    
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not Found.........!",
      });  // Use return to stop execution after sending the response
    }

    return res.status(200).json({
      status: 200,
      message: `Product get Successfully by Id: ${id}`,
      productDetail: product,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Server side Error.........!",
      err: error,
    });
  }
};

// Get all products
export const getProduct = async (req, res, next) => {
  try {
    const { size, color } = req.query;
    console.log("Size and Color:", size, color);

    // Initialize conditions for filtering ProductSubcategory
    const subCategoryConditions = {};

    // Add condition for size if it's provided
    if (size) {
      subCategoryConditions.size = size;
    }

    // Add condition for color if it's provided
    if (color) {
      subCategoryConditions.color = color;
    }

    // Step 1: Find ProductSubcategories that match the size and color
    const subCategories = await ProductSubcategory.find(subCategoryConditions);

    // If no subcategories found, return empty result
    if (subCategories.length === 0) {
      return res.status(200).json({
        message: "No products found for the given filters.",
        status: 200,
        result: [],
      });
    }

    // Step 2: Find Products that match the subcategory ObjectIds
    const products = await Product.find({
      productSubcategory: { $in: subCategories.map(sub => sub._id) }
    }).populate('productSubcategory'); // Populate productSubcategory to get full details

    // Step 3: Return the filtered products
    res.status(200).json({
      message: "Products retrieved successfully.",
      status: 200,
      result: products,
    });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({
      message: "Something went wrong.",
      status: 500,
      error: error.message,
    });
  }
};



export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params; // Get product ID from the URL params
    const updatedData = req.body; // Get updated data from the request body

    // Find the product by ID
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Prepare the update object
    let updateFields = {
      productName: updatedData.productName || product.productName,
      productDescription: updatedData.productDescription || product.productDescription,
      category: updatedData.category || product.category,
    };

    // Ensure productSubcategory exists in the update object and set its values
    if (updatedData.productSubcategory) {
      updateFields.productSubcategory = {
        ...product.productSubcategory, // Retain existing values
        ...updatedData.productSubcategory, // Apply new values
      };
    }

    // Handle image update if a file or image URL is provided
    if (req.file) {
      const imagePath = req.file.path; // Path where the image is saved
      updateFields.images = [imagePath]; // Update the image path
    } else if (updatedData.productImage) {
      updateFields.images = [updatedData.productImage]; // If image URL is provided, update it
    }

    // Use $set to apply the updates in the database
    const updatedProduct = await Product.findByIdAndUpdate(id, { $set: updateFields }, { new: true });

    // If no product was updated, return an error response
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found or could not be updated." });
    }

    // Respond with the updated product
    res.status(200).json({ message: "Product updated successfully.", result: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Error updating product.", error: error.message });
  }
};



export const deleteProduct=async(req,res,next)=>{
    const {id}=req.params;
 
    try {
        const product=await Product.findByIdAndDelete(id)
        if(!product){
             res
            .status(404)
            .json({
                status:404,
                message:"Product not Found.........!",
                })
        }

        res
        .status(200)
        .json({
            status:200,
            message:`Product delete Successfully by Id: ${id}`,
        })

        
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .json({
            status:500,
            message:"Server side Error.........!",
            err:error
        })  
        
    }
}
