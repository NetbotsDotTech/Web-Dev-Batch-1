// components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, Home as HomeIcon } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ mt: 5, py: 3, bgcolor: 'grey.200' }}>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          px: 3,
          alignItems: 'center'
        }}
      >
        <Typography variant="body1">ZBS Company</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon />
          <Typography variant="body2">Email: contact@zbscompany.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon />
          <Typography variant="body2">Phone: +123 456 7890</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <HomeIcon />
          <Typography variant="body2">Address: 123 Main St, Gilgit-Baltistan</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
