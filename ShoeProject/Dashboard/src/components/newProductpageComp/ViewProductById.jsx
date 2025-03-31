import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, Grid, Box } from '@mui/material';

const ViewProductById = ({ open, onClose, product }) => {
  // Check if product exists
  if (!product) {
    return (
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Product not found</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  // Generate the full image URL if available
  // console.log("Product in ViewProductById:", product);
  const productImageUrl = product?.images?.[0]?.replace(/\\/g, '/'); // Handle possible backslashes in image path
  const fullImageUrl = productImageUrl?.startsWith('media/')
    ? `http://localhost:8000/${productImageUrl}`
    : productImageUrl;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Product Details</DialogTitle>
      <DialogContent>
        {/* Product Image */}
        <Box mb={2} display="flex" justifyContent="center">
          <img
            src={fullImageUrl || 'https://via.placeholder.com/300'}
            alt={product?.productName}
            style={{ width: '100%', maxWidth: '300px', height: 'auto', objectFit: 'cover' }}
          />
        </Box>

        {/* Product Information */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" color="primary" gutterBottom>
              {product?.productName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" paragraph>
              <strong>Description:</strong> {product?.productDescription || 'No description available'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Price:</strong> {product.productSubcategory?.price?.toFixed(2) || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Stock:</strong> {product.productSubcategory?.stock || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Category:</strong> {product?.category || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Brand:</strong> {product.productSubcategory?.brand || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Size:</strong> {product.productSubcategory?.size || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Color:</strong> {product.productSubcategory?.color || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>SKU:</strong> {product.productSubcategory?.sku || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Created At:</strong> {new Date(product?.createdAt).toLocaleDateString() || 'N/A'}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              <strong>Last Updated:</strong> {new Date(product?.updatedAt).toLocaleDateString() || 'N/A'}
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewProductById;
