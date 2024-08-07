import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Cambridge Dictionary, a leading resource for English language learners. Our mission is to provide the most accurate and up-to-date information on English words and their meanings. We cater to intermediate and advanced learners, offering detailed explanations, examples, and translations into Urdu.
        </Typography>
        <Typography variant="body1" paragraph>
          Our dictionary is regularly updated with new words and meanings sourced from the Cambridge English Corpus. We strive to deliver comprehensive and reliable content to help you improve your English language skills effectively.
        </Typography>
        <Typography variant="body1" paragraph>
          In addition to word definitions, our platform offers valuable insights into grammar, usage, and contextual examples. Whether you're preparing for exams, working on professional projects, or simply expanding your vocabulary, Cambridge Dictionary is here to support your learning journey.
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to enhancing your language learning experience and providing tools that facilitate a deeper understanding of English. Thank you for choosing Cambridge Dictionary as your trusted resource for English language education.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
