import React from 'react';
import { Box, Button, Typography ,Link} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import  bgimage from '../image/bg1.jpg'
import '../css/HeroSection.css'
const HeroSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleShopNow = () => {
    navigate('/shop'); // Navigates to the shop page when the button is clicked
  };

  return (
    <Box
    className="Box"
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
        Discover our latest collection
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
      Explore our wide range of high-quality products. We offer the best selection of goods, for <Link href="#" id="link" >Men</Link>, <Link href="#"  id="link">Women</Link> and <Link href="#" id="link">Kids</Link>. Whether you're looking for the latest trends or timeless classics, we have something for everyone. Our commitment to quality ensures that you get the best value for your money.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleShopNow} sx={{ px: 4, py: 2, fontSize: '1.2rem' }} className='btn'>
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;
