import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, MenuItem, Grid, Box } from '@mui/material';

const generateSKU = () => {
  return 'SKU-' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

const AddProductComponent = ({ open,  onClose,  }) => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    category: '',
    brand: '',
    size: '',
    color: '',
    stock: '',
    price: '',
    sku: generateSKU(),
    productImage: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      productImage: file,
    }));
    setImagePreview(URL.createObjectURL(file));
    setUploadStatus(null); // Reset any previous status messages
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.productName) validationErrors.productName = 'Product name is required';
    if (!formData.price || formData.price <= 0) validationErrors.price = 'Price must be a positive number';
    if (!formData.stock || formData.stock <= 0) validationErrors.stock = 'Stock must be a positive number';
    if (!formData.category) validationErrors.category = 'Category is required';
    if (!formData.productImage) validationErrors.productImage = 'Product image is required';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

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

    // Logging the data being sent
    console.log("Data being sent:", data);

    try {
      const response = await fetch('http://localhost:8000/api/product/add', {
        method: 'POST',
        headers: {
          // Don't set Content-Type here, as FormData automatically sets it
        },
        body: data,
      });

      const result = await response.json(); // Assuming the response is JSON
      console.log("Server Response:", result);

      if (response.ok) {
        setUploadStatus('Product added successfully!');
        handleResetForm(); // Reset the form on successful submission
        onClose(); // Close dialog
      } else {
        setUploadStatus('Error adding product.');
      }
    } catch (error) {
      console.error('Error while submitting form:', error);
      setUploadStatus('Error adding product: ' + error.message);
    }
  };

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
      sku: generateSKU(),
      productImage: null,
    });
    setImagePreview(null);
    setErrors({});
    setUploadStatus(null);
  };

  return (
    <Dialog  open={open} onClose={onClose}>
      <DialogTitle >Add New Product</DialogTitle>
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
                label="Brand"
                fullWidth
                value={formData.brand}
                onChange={handleChange}
                name="brand"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Size"
                fullWidth
                value={formData.size}
                onChange={handleChange}
                name="size"
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Color"
                fullWidth
                value={formData.color}
                onChange={handleChange}
                name="color"
                margin="normal"
              />
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
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="productImage"
              />
              <label htmlFor="productImage">
                <Button variant="outlined" component="span" fullWidth>
                  Upload Product Image
                </Button>
              </label>

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
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductComponent;
