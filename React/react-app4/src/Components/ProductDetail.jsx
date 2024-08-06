import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';

const product = { id: 1, name: 'Product 1', price: '$10', description: 'Product description', image: 'path_to_image' };

const ProductDetail = () => {
  const { id } = useParams();
  // Fetch product details based on ID (simulated here with a static product)
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h4">{product.name}</Typography>
            <Typography variant="h5">{product.price}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
