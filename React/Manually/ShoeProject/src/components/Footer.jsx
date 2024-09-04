import React from 'react';
import { Box, Typography, Container, Link as MuiLink } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: 4, marginTop: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Abdupa's Shoe Collection
        </Typography>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <MuiLink href="mailto:contact@abdushoes.com" color="inherit">
            contact@abdushoes.com
          </MuiLink> | 
          <MuiLink href="https://goo.gl/maps/yourmaplink" target="_blank" color="inherit">
            Alamdar Chowck, Skardu, Pakistan
          </MuiLink> | 
          <MuiLink href="tel:+1234567890" color="inherit">
            +92 300 1234567
          </MuiLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
