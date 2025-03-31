import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bgimage1 from '../assets/image/landingImage.webp';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${bgimage1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better contrast
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
            letterSpacing: 2,
            marginBottom: 2,
            animation: 'fadeIn 1s ease-out', // Fade-in animation for text
          }}
        >
          Welcome to Jamal Pool Club
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2rem' },
            marginBottom: 2,
            animation: 'fadeIn 1s ease-out',
            opacity: 0.8,
          }}
        >
          Where Fun and Skill Meet
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Dancing Script, cursive',
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            marginBottom: 3,
            animation: 'fadeIn 1s ease-out',
          }}
        >
          Join Us for a Game of Snooker or Pool
        </Typography>

        {/* Call to Action Button */}
        <Button
          variant="contained"
          sx={{
            fontSize: 18,
            fontWeight: 600,
            background: '#1abc9c',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 50,
            textTransform: 'capitalize',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.8s ease, background-color 0.3s ease',
            '&:hover': {
              backgroundColor: '#17a589',
              transform: 'scale(1.1)', // Button hover effect
            },
            animation: 'fadeIn 1.5s ease-out', // Fade-in animation for button
          }}
          onClick={() => navigate('/booking')}
        >
          Book Your Table Now
        </Button>
      </Box>
    </Box>
  );
};

export default LandingPage;
