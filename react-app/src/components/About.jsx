// components/About.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import aboutImage from '../assets/about.jpg'; // Import the about image

export const About = ()=> {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Box component="img" src={aboutImage} alt="About" sx={{ml:30, width: '50%', height: '300px', mb: 3 }} />
      <Typography variant="body1">
        We are a company dedicated to providing the best services for our clients.
      </Typography>
    </Container>
  );
}

export default About;
