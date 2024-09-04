import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our company! We are dedicated to providing you with the best products and services.
          Our mission is to deliver quality and excellence in everything we do. With years of experience
          in the industry, we have built a reputation for reliability and customer satisfaction.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is passionate about innovation and constantly seeks to improve our offerings to meet
          the evolving needs of our customers. We believe in building strong relationships with our clients
          based on trust and transparency. Your satisfaction is our priority, and we are committed to
          exceeding your expectations with every interaction.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our company. We look forward to serving you and helping you achieve your goals.
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutUs;
