import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Grammar = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Grammar</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Understanding grammar is essential for mastering any language. Our grammar section provides detailed explanations and examples of English grammar rules, helping you improve your writing and speaking skills. Learn about tenses, sentence structure, punctuation, and more to become a more confident and proficient English user.
        </Typography>
      </Box>
    </Container>
  );
};

export default Grammar;
