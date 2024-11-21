// components/Contact.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import contactImage from '../assets/contact.jpg'; // Import the contact image

export const Contact=()=> {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box component="img" src={contactImage} alt="Contact" sx={{ml:30, width: '50%', height: '300px', mb: 3 }} />
      <Typography variant="body1">
        You can reach us at contact@ourwebsite.com.
      </Typography>
    </Container>
  );
}

export default Contact;
