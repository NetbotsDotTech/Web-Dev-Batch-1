import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Service = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          At our shoe collection store, we offer a variety of services to cater to all your footwear needs:
        </Typography>
        <Typography variant="h6" component="h2">
          Shoe Sales
        </Typography>
        <Typography variant="body1" paragraph>
          We provide a wide range of modern and stylish shoes for men, women, and children. Our collection includes casual wear, formal wear, sports shoes, and more.
        </Typography>
        <Typography variant="h6" component="h2">
          Custom Orders
        </Typography>
        <Typography variant="body1" paragraph>
          Looking for something unique? We offer custom orders to help you get the perfect pair of shoes tailored to your preferences.
        </Typography>
        <Typography variant="h6" component="h2">
          Shoe Repair
        </Typography>
        <Typography variant="body1" paragraph>
          Our skilled craftsmen offer professional shoe repair services to give your favorite pairs a new lease on life.
        </Typography>
      </Box>
    </Container>
  );
};

export default Service;
