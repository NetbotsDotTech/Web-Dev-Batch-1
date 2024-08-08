import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#f1f1f1' }}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          Mountain View Hotel
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'© '}
          {new Date().getFullYear()}
          {' All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
