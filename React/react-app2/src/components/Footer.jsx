import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Email as EmailIcon, LocationOn as LocationOnIcon, Phone as PhoneIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginX: 2 }}>
            <EmailIcon />
            <Typography variant="subtitle1" color="text.secondary">
              abdupa@example.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginX: 2 }}>
            <LocationOnIcon />
            <Typography variant="subtitle1" color="text.secondary">
              Shop No 19, Alamdar Chowck, Skardu
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginX: 2 }}>
            <PhoneIcon />
            <Typography variant="subtitle1" color="text.secondary">
              +92 3475495500
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
