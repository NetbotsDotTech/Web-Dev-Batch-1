import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import aboutImage1 from '../assets/image/aboutUs/about1.webp'
import about2 from '../assets/image/aboutUs/about2.jpg'
import about3 from '../assets/image/aboutUs/about3.jpg'
import about4 from '../assets/image/aboutUs/about4.jpg'



const teamMembers = [
  { name: 'James', role: 'Founder & CEO', imgSrc:about3  },
  { name: 'Olivia', role: 'Co-Founder', imgSrc: about2 },
  { name: 'Ethan', role: 'Chief Marketing Officer', imgSrc: about4},
  // Add more team members as needed
];

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '100px', marginBottom: '50px' }}>
      {/* Hero Section */}
      <Box
  sx={{
    position: 'relative',  // Make the container relative to position the overlay
    padding: '80px 30px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',  // Ensures content like the overlay is clipped to the container's border radius
  }}
>
  {/* Background Image */}
  <Box
    sx={{
      backgroundImage: `url(${aboutImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute',  // Ensure the image fills the container
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,  // Image stays beneath the content
      filter: 'brightness(0.6)',  // Optionally darken the image for better contrast
    }}
  />

  {/* Overlay (Semi-Transparent) */}
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',  // Add a semi-transparent overlay
      zIndex: 2,
    }}
  />

  {/* Content */}
  <Box sx={{ position: 'relative', zIndex: 3 }}>
    <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
      Our Story
    </Typography>
    <Typography variant="h5" sx={{ fontStyle: 'italic', marginTop: '10px', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
      Crafting Quality Products for You
    </Typography>
    <Typography variant="h6" sx={{ marginTop: '20px', maxWidth: '600px', margin: 'auto', color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
      Our journey began with a simple belief: to create products that inspire and enhance everyday life. We strive for excellence in everything we do.
    </Typography>
  </Box>
</Box>


      {/* Brand Story */}
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Our Brand Story</Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          Founded in 2020, we started with a vision to create high-quality products that cater to your needs. Our journey has been filled with passion and innovation, driven by the desire to push boundaries and deliver exceptional value. From humble beginnings to becoming a trusted brand, we are proud of the impact we have made.
        </Typography>
      </Box>

      {/* Mission and Vision */}
      <Grid container spacing={3} sx={{ marginTop: '50px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Our Mission</Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            To provide exceptional quality and service to our customers, ensuring satisfaction with every purchase. We are committed to continuous improvement and understanding our customers' needs to exceed their expectations.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Our Vision</Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            To be a leader in our industry, known for our commitment to quality and customer experience. We envision a future where our brand is synonymous with trust and innovation.
          </Typography>
        </Grid>
      </Grid>

      {/* Core Values */}
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Our Core Values</Typography>
        <Grid container spacing={2}>
          {['Quality', 'Customer Satisfaction', 'Sustainability'].map((value, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{value}</Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    We prioritize {value.toLowerCase()} in everything we do, ensuring our products are not only functional but also responsibly made.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Meet Our Team</Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.imgSrc}
                  alt={member.name}
                  sx={{ borderRadius: '8px 8px 0 0' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{member.name}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>{member.role}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginTop: '50px', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>What Our Customers Say</Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: '10px', maxWidth: '600px', margin: 'auto' }}>
          "I love the quality and service of this company! Highly recommend!" - Ali Haider
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', maxWidth: '600px', margin: 'auto' }}>
          "Best purchase I've made this year. Excellent experience." - Shahid Hussain
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
