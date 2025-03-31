import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Translate = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Translate</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Our translation feature helps you convert English words and phrases into Urdu. Whether you are reading, writing, or just curious about how to say something in Urdu, our tool provides accurate and reliable translations. Explore the world of language with our easy-to-use translation tool!
        </Typography>
      </Box>
    </Container>
  );
};

export default Translate;
