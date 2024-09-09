import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import Details from './Details';

function Booking({ hotelName }) {
  const [bookingInfo, setBookingInfo] = useState({ name: '', email: '', roomType: '' });
  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    setBookingInfo({ ...bookingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Book a Room
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={bookingInfo.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={bookingInfo.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="roomType"
              name="roomType"
              label="Room Type"
              value={bookingInfo.roomType}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {showDetails && <Details hotelName={hotelName} bookingInfo={bookingInfo} />}
    </Box>
  );
}

export default Booking;
