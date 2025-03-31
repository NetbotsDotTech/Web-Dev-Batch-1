import React from 'react';
import { Box, Container, Typography, Grid, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook'; // MUI Facebook icon
import InstagramIcon from '@mui/icons-material/Instagram'; // MUI Instagram icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // MUI WhatsApp icon
import bgimage from '../assets/image/about.jpg';
import ownerImage from '../assets/image/jama1.jpg';
import eventhandler from '../assets/image/zakir1.jpg';
import headOfOperation from '../assets/image/gm.jpg'

// Full screen background style for the page with overlay
const Root = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bgimage})`, // Replace with your snooker club's background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(0, 3),
  position: 'relative', // Added to allow for the overlay
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',  // Darker overlay (increase opacity)
    zIndex: -1, // Ensure content is above the overlay
  },
}));

const TeamMemberCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '12px',
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
  },
}));

// Mission & Values Section
const MissionSection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 3),
  borderRadius: '10px',
  marginTop: theme.spacing(6),
}));

// Enhanced About Us Component
const AboutUs = () => {
  return (
    <Root sx={{  marginTop: '50px'}}>
      {/* Hero Section */}
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mt: 2 }}>
          Welcome to Jamal Pool Club
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
          At JPC we strive to create an inclusive community of snooker enthusiasts where players of all skill levels
          can improve, compete, and enjoy the game of snooker in a supportive and competitive environment.
        </Typography>
      </Box>

      {/* Team Section */}
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="Ghulam Mustafa"
                src={headOfOperation} // Replace with the actual image URL
                sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#000", opacity: 0.7 }}>Ghulam Mustafa</Typography>
              <Typography variant="body2" sx={{  color: "#000", opacity: 0.7 }}>Head of Operations</Typography>
            </TeamMemberCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="Jamal"
                src={ownerImage} // Replace with the actual image URL
                sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#000", opacity: 0.7 }}>Jamal</Typography>
              <Typography variant="body2" sx={{ color: "#000", opacity: 0.7 }}>Founder & Coach</Typography>
            </TeamMemberCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <TeamMemberCard>
              <Avatar
                alt="Mark Brown"
                src={eventhandler} // Replace with the actual image URL
                sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#000", opacity: 0.7 }}>Zakir</Typography>
              <Typography variant="body2" sx={{ color: "#000", opacity: 0.7 }}>Event Coordinator</Typography>
            </TeamMemberCard>
          </Grid>
        </Grid>
      </Container>

      {/* Mission & Values Section */}
      <MissionSection>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Our Mission & Values
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, fontSize: '1.2rem' }}>
          We believe in the power of snooker to bring people together, foster healthy competition, and cultivate lasting friendships. Our mission
          is to offer a space where players of all ages and skill levels can come together to improve their game and enjoy the camaraderie that
          snooker brings.
        </Typography>

        {/* Social Media Icons Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box sx={{ textAlign: 'center' }}>
              <FacebookIcon sx={{ fontSize: 40, color: '#3b5998' }} />
            </Box>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box sx={{ textAlign: 'center' }}>
              <InstagramIcon sx={{ fontSize: 40, color: '#e4405f' }} />
            </Box>
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box sx={{ textAlign: 'center' }}>
              <WhatsAppIcon sx={{ fontSize: 40, color: '#25D366' }} />
            </Box>
          </a>
        </Box>
      </MissionSection>
    </Root>
  );
};

export default AboutUs;
