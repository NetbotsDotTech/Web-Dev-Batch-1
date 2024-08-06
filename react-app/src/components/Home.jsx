// components/Home.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import homeImage from '../assets/home.jpg'; // Import the home image

export const Home = () =>{
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Our Website
      </Typography>
      <Box component="img" src={homeImage} alt="Home" sx={{ml:30, mt : 0, width: '50%', height: '300px', mb: 3 }} />
      <Typography variant="body1">
        This is the home page. Explore the site using the navigation bar.
      </Typography>
    </Container>
  );
}

export default Home;

