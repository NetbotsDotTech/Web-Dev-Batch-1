import React from 'react';
import { Box, Grid, Typography, Pagination } from '@mui/material';
import ProductCard from '../components/ProductCard';

const ShopPage = () => {
  // Sample data (In a real app, fetch this data)
  const products = [
    { id: 1, name: 'Running Shoes', price: '3000 PKR', rating: 4, description: 'Comfortable running shoes', img: '/path/to/image' },
    // ...more products
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4">Shop All Shoes</Typography>
      <Grid container spacing={4} sx={{ marginTop: 2 }}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default ShopPage;
