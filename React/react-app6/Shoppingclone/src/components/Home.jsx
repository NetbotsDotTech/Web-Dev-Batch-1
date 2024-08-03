import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Paper>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to ShoppingClone
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore our collection of amazing products.
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        {/* Add your promotional banners, featured products, etc. here */}
      </Grid>
    </Container>
  );
};

export default Home;
