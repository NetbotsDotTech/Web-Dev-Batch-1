import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { Sports, Pool, Event, LocalBar } from '@mui/icons-material'; // Fixed icon import
import { useNavigate } from 'react-router-dom';
import snooker from '../assets/image/snooker.jpg';
import pool from '../assets/image/pool.jpg';
import bar from '../assets/image/bar.jpg';

const ServicesPage = () => {
  const navigate=useNavigate();
  const handleServiceSelection = (service) => {
    // Navigate to the BookingPage and pass the selected service
    navigate('/booking', { state: { service } });
  };
  return (
    <Box
      sx={{
        padding: { xs: 3, sm: 5, md: 6 },
        backgroundColor: '#f4f6f9',
        minHeight: '100vh',
        marginTop: 3,
      }}
    >
      {/* Page Heading */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 700,
          color: '#333',
        }}
      >
        Discover Our Premium Snooker & Entertainment Services
      </Typography>

{/* Services Grid Layout */}
<Grid container spacing={4} justifyContent="center">
        {/* Snooker Tables */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              },
            }}
            onClick={() => handleServiceSelection('Snooker')}
          >
            <CardMedia
              component="img"
              alt="Snooker Tables"
              height="220"
              image={snooker}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ padding: 4 }}>
              <IconButton
                sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: '#1abc9c' }}
              >
                <Sports sx={{ color: '#fff' }} />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1abc9c', marginTop: 2 }}>
                Snooker Tables
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Experience premium snooker tables with professional-grade equipment and a luxurious atmosphere. Perfect for enthusiasts and professionals alike.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Pool Tables */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              },
            }}
            onClick={() => handleServiceSelection('Pool')}
          >
            <CardMedia
              component="img"
              alt="Pool Tables"
              height="220"
              image={pool}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ padding: 4 }}>
              <IconButton
                sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: '#1abc9c' }}
              >
                <Pool sx={{ color: '#fff' }} />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1abc9c', marginTop: 2 }}>
                Pool Tables
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Our pool tables provide an excellent environment for friendly games. Whether you’re an expert or a beginner, we have the right table for you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Bar & Refreshments */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              borderRadius: '20px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              },
            }}
            onClick={() => handleServiceSelection('Bar & Refreshments')}
          >
            <CardMedia
              component="img"
              alt="Bar & Refreshments"
              height="220"
              image={bar}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ padding: 4 }}>
              <IconButton
                sx={{ position: 'absolute', top: 10, left: 10, backgroundColor: '#1abc9c' }}
              >
                <LocalBar sx={{ color: '#fff' }} />
              </IconButton>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1abc9c', marginTop: 2 }}>
                Bar & Refreshments
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Enjoy a curated selection of drinks and snacks while you play. From cocktails to snacks, we have everything to keep you refreshed.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Testimonials Section */}
      <Box sx={{ textAlign: 'center', marginTop: 6 }}>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          What Our Guests Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 4, backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic', color: '#555' }}>
                "The best snooker tables I’ve ever played on!"
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2, color: '#777' }}>
                — Aahil Ali, Skardu
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ padding: 4, backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
              <Typography variant="h6" sx={{ fontStyle: 'italic', color: '#555' }}>
                "A fantastic place for corporate events and fun nights out!"
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2, color: '#777' }}>
                — Muhammad Nawaz, Gilgit Baltistan
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesPage;
