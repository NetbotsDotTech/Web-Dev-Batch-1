import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';

const ProductDetailPage = ({ productId }) => {
  // Fetch product data based on `productId`
  const product = {
    id: 1,
    name: 'Running Shoes',
    price: '3000 PKR',
    description: 'High-quality running shoes for all terrains.',
    images: ['/path/to/image1', '/path/to/image2'],
    reviews: [{ user: 'John', rating: 4, comment: 'Great shoes!' }],
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" color="primary">{product.price}</Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>{product.description}</Typography>

          <Box sx={{ marginTop: 4 }}>
            <Button variant="contained">Add to Cart</Button>
            <Button variant="outlined" sx={{ marginLeft: 2 }}>Buy Now</Button>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5">Customer Reviews</Typography>
        {product.reviews.map((review, index) => (
          <Box key={index} sx={{ marginTop: 2 }}>
            <Typography variant="h6">{review.user}</Typography>
            <Typography variant="body2">Rating: {review.rating}/5</Typography>
            <Typography variant="body2">{review.comment}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
