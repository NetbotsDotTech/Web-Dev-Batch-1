import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import  bgimage from '../image/bg1.jpg'

const HeroSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleShopNow = () => {
    navigate('/shop'); // Navigates to the shop page when the button is clicked
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 11,
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff', // White text for better contrast
        minHeight: '400px', // Ensure the section has a minimum height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better readability
        backgroundBlendMode: 'darken', // Blend the dark overlay with the image
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
        Welcome to Our Shop
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Discover our latest collection and exclusive offers!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Whether you're looking for the latest fashion trends, electronics, or home decor, we've got you covered. Explore our vast selection and find the perfect items that suit your style and needs.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleShopNow} sx={{ px: 4, py: 2, fontSize: '1.2rem' }}>
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;
