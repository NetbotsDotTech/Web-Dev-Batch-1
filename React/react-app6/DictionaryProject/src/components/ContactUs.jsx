import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Contact Us</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us. You can contact us via email at info@example.com or visit us at our office located at Skardu, Pakistan. Follow us on our social media accounts for the latest updates and news:
          <ul>
            <li>Facebook: @CambridgeDictionary</li>
            <li>Twitter: @CambridgeDict</li>
            <li>Instagram: @CambridgeDictionary</li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactUs;
