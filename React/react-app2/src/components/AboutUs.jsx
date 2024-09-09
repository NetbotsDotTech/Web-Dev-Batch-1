import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our shoe collection store located at Alamdar Chowck, Skardu. We are passionate about providing high-quality footwear to our customers. Our mission is to bring you the latest trends in shoes, ensuring comfort and style.
        </Typography>
        <Typography variant="body1" paragraph>
          Our store was established with the vision of becoming a one-stop-shop for all your footwear needs. We believe that the right pair of shoes can make a significant difference in your day, whether you’re heading to work, going for a run, or attending a special event.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team is dedicated to offering exceptional customer service. We are here to help you find the perfect shoes that match your style and needs. We also take pride in our community involvement and strive to contribute positively to the Skardu area.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our store. We look forward to serving you and helping you find your next favorite pair of shoes.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
