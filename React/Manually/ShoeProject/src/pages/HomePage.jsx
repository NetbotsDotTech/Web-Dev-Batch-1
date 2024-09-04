import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';  // Import the Footer component

const HomePage = () => {
  // Function to generate a list of 50 products
  const generateProducts = () => {
    const products = [];
    for (let i = 1; i <= 50; i++) {
      products.push({
        id: i,
        name: `Product ${i}`,
        price: `${(Math.random() * 5000 + 1000).toFixed(0)} PKR`,
        rating: (Math.random() * 5).toFixed(1),
        description: `This is the description for product ${i}.`,
        img: `/path/to/image${i}.jpg`,
      });
    }
    return products;
  };

  // Sample data for products
  const products = generateProducts();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/path/to/hero-image)',
          backgroundSize: 'cover',
          height: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h2">New Arrivals</Typography>
        <Button variant="contained" component={Link} to="/shop">
          Shop Now
        </Button>
      </Box>

      {/* View Cart Button */}
      <Container sx={{ marginTop: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="secondary" component={Link} to="/cart">
          View Cart
        </Button>
      </Container>

      {/* Featured Products */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">Featured Products</Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Category Highlights */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4">Shop by Category</Typography>
        <Grid container spacing={4}>
          {/* Example categories */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                backgroundImage: 'url(/path/to/category-image)',
                height: '200px',
                backgroundSize: 'cover',
              }}
            />
            <Button fullWidth>Running Shoes</Button>
          </Grid>
          {/* More categories */}
        </Grid>
      </Container>

      {/* Promotional Banners */}
      <Container sx={{ marginTop: 4 }}>
        <Box
          sx={{
            padding: 2,
            backgroundColor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6">
            Get 20% off your first purchase! Use code FIRST20
          </Typography>
        </Box>
      </Container>

      {/* Footer Section */}
      <Footer />  {/* Adding the Footer component here */}
    </Box>
  );
};

export default HomePage;
