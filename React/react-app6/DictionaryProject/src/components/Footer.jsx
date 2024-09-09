import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 4 }}>
      <Typography variant="body1" align="center">Contact Us: info@example.com | Location: Skardu, Pakistan</Typography>
      <Typography variant="body2" align="center">
        <Link href="/about" color="inherit">About Us</Link> | <Link href="/contact" color="inherit">Contact Us</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
