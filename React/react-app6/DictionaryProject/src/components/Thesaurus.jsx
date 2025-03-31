import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Thesaurus = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center">Thesaurus</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Enhance your vocabulary with our thesaurus tool. Find synonyms and antonyms for thousands of English words to add variety and depth to your language. Whether you are writing an essay, a story, or a professional document, our thesaurus helps you find the perfect words to express your ideas more effectively.
        </Typography>
      </Box>
    </Container>
  );
};

export default Thesaurus;
