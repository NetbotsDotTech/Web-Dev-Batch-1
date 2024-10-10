import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '50px', marginBottom: '50px' }}>
      {/* Hero Section */}
      <Box sx={{ backgroundImage: 'url(/path-to-image.jpg)', padding: '50px', backgroundSize: 'cover', color: '#fff' }}>
        <Typography variant="h2" align="center">Our Story</Typography>
        <Typography variant="h5" align="center">Crafting Quality Products for You</Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Shop Now</Button>
      </Box>

      {/* Brand Story */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>Our Brand Story</Typography>
        <Typography variant="body1">
          We started with a vision to create high-quality products that cater to your needs. Our journey began in [Year], and since then, we've...
        </Typography>
      </Box>

      {/* Mission and Vision */}
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Our Mission</Typography>
          <Typography variant="body1">
            To provide exceptional quality and service to our customers, ensuring satisfaction with every purchase.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>Our Vision</Typography>
          <Typography variant="body1">
            To be a leader in our industry, known for our commitment to quality and customer experience.
          </Typography>
        </Grid>
      </Grid>

      {/* Core Values */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h5" gutterBottom>Our Core Values</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Quality</Typography>
                <Typography variant="body2">We prioritize quality in everything we do.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Customer Satisfaction</Typography>
                <Typography variant="body2">Our customers are our top priority.</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Sustainability</Typography>
                <Typography variant="body2">We are committed to environmentally friendly practices.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>Meet Our Team</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2">Founder & CEO</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Jane Smith</Typography>
                <Typography variant="body2">Chief Marketing Officer</Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more team members as needed */}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h4" gutterBottom>What Our Customers Say</Typography>
        <Typography variant="body1">"I love the quality and service of this company! Highly recommend!" - Customer A</Typography>
        <Typography variant="body1">"Best purchase I've made this year. Excellent experience." - Customer B</Typography>
      </Box>

      {/* Footer Section */}
      <Box sx={{ marginTop: '30px', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Typography variant="body1">Contact Us: support@yourecommerce.com | +1-800-123-456</Typography>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
