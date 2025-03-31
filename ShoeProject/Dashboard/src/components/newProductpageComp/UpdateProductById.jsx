import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, Grid, Box } from '@mui/material';

const UpdateProductById = ({ open, onClose, product }) => {
  console.log("Product data is:", product);

  // Initialize form data state
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    category: '',
    brand: '',
    size: '',
    color: '',
    stock: '',
    price: '',
    sku: '',
    productImage: null, // Initially set to null
  });

  // Initialize errors, image preview, and upload status
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null); // For image preview
  const [uploadStatus, setUploadStatus] = useState(null);

  // Populate the form data when the product data is available
  useEffect(() => {
    if (product) {
      console.log("Product data is:", product);
  
      // Check if the product image already includes the base URL
      const baseUrl = 'http://localhost:8000/'; // Base URL for your images
      let imageUrl = product?.images[0];
  
      // If the image URL doesn't already start with the base URL, prepend it
      if (imageUrl && !imageUrl.startsWith(baseUrl)) {
        imageUrl = `${baseUrl}${imageUrl}`;
      }
  
      // Set the form data with the corrected image URL
      setFormData({
        productName: product.productName || '',
        productDescription: product.productDescription || '',
        category: product.category || '',
        brand: product.productSubcategory?.brand || '',
        size: product.productSubcategory?.size || '',
        color: product.productSubcategory?.color || '',
        stock: product.productSubcategory?.stock || '',
        price: product.productSubcategory?.price || '',
        sku: product.productSubcategory?.sku || '',
        productImage: imageUrl, // Store the full image URL
      });
  
      // Set image preview from the full image URL
      setImagePreview(imageUrl);
    }
  }, [product]);
  

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        productImage: file,
      }));
      setImagePreview(URL.createObjectURL(file)); // Update image preview with the new file
    } else {
      setImagePreview(null); // Reset the preview if no file is selected
    }

    setUploadStatus(null); // Reset any previous status messages
  };
  

  // Form validation
  const validateForm = () => {
    let validationErrors = {};
    if (!formData.productName) validationErrors.productName = 'Product name is required';
    if (!formData.price || formData.price <= 0) validationErrors.price = 'Price must be a positive number';
    if (!formData.stock || formData.stock <= 0) validationErrors.stock = 'Stock must be a positive number';
    if (!formData.category) validationErrors.category = 'Category is required';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate the form
    if (!validateForm()) return;
  
    // Prepare the form data for submission
    const data = new FormData();
    data.append('productName', formData.productName);
    data.append('productDescription', formData.productDescription);
    data.append('category', formData.category);
    data.append('productImage', formData.productImage);
    data.append('brand', formData.brand);
    data.append('size', formData.size);
    data.append('color', formData.color);
    data.append('stock', formData.stock);
    data.append('price', formData.price);
    data.append('sku', formData.sku);
  
    // Log the data being sent
    console.log("Data being sent:", data);
  
    try {
      const response = await fetch(`http://localhost:8000/api/product/update/${product._id}`, {
        method: 'PUT',
        body: data,
      });
  
      const result = await response.json(); // Assuming the response is JSON
      console.log("Server Response:", result);
  
      if (response.ok) {
        setUploadStatus('Product updated successfully!');
        onClose(); // Close dialog on successful submission
      } else {
        setUploadStatus('Error updating product.');
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
      setUploadStatus('Error updating product: ' + error.message);
    }
  };
  
  // Handle form reset
  const handleResetForm = () => {
    setFormData({
      productName: '',
      productDescription: '',
      category: '',
      brand: '',
      size: '',
      color: '',
      stock: '',
      price: '',
      sku: '',
      productImage: null,
    });
    setImagePreview(null);
    setErrors({});
    setUploadStatus(null);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Product</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Product Name"
                fullWidth
                value={formData.productName}
                onChange={handleChange}
                name="productName"
                error={!!errors.productName}
                helperText={errors.productName}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Product Description"
                fullWidth
                value={formData.productDescription}
                onChange={handleChange}
                name="productDescription"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Category"
                value={formData.category}
                onChange={handleChange}
                name="category"
                fullWidth
                margin="normal"
                error={!!errors.category}
                helperText={errors.category}
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Brand"
                value={formData.brand}
                onChange={handleChange}
                name="brand"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Nike">Nike</MenuItem>
                <MenuItem value="Adidas">Adidas</MenuItem>
                <MenuItem value="Puma">Puma</MenuItem>
                <MenuItem value="Reebok">Reebok</MenuItem>
                <MenuItem value="Vans">Vans</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Size"
                value={formData.size}
                onChange={handleChange}
                name="size"
                fullWidth
                margin="normal"
              >
                {[1, 2, 3, 4,5,6,7,8,9,10].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Color"
                value={formData.color}
                onChange={handleChange}
                name="color"
                fullWidth
                margin="normal"
              >
                <MenuItem value="Black">Black</MenuItem>
                <MenuItem value="Blue">Blue</MenuItem>
                <MenuItem value="Red">Red</MenuItem>
                <MenuItem value="White">White</MenuItem>
                <MenuItem value="Green">Green</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Stock"
                fullWidth
                type="number"
                value={formData.stock}
                onChange={handleChange}
                name="stock"
                error={!!errors.stock}
                helperText={errors.stock}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Price"
                fullWidth
                type="number"
                value={formData.price}
                onChange={handleChange}
                name="price"
                error={!!errors.price}
                helperText={errors.price}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12}>
              {/* Modern File Input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                id="productImage"
                style={{ display: 'block', margin: '10px 0' }}
              />
              
              {/* Display the Image Preview */}
              {imagePreview && (
                <Box mt={2}>
                  <img src={imagePreview} alt="Image preview" style={{ width: '100%', height: 'auto' }} />
                </Box>
              )}

              {errors.productImage && (
                <Box color="error.main" mt={1}>
                  {errors.productImage}
                </Box>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="SKU"
                fullWidth
                value={formData.sku}
                name="sku"
                disabled
                margin="normal"
              />
            </Grid>
          </Grid>

          {uploadStatus && (
            <Box color={uploadStatus.includes('Error') ? 'error.main' : 'success.main'} mt={2}>
              {uploadStatus}
            </Box>
          )}

          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Save Update</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProductById;
