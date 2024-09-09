import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Rooms from './Rooms';
import Amenities from './Amenities';
import Booking from './Booking';

function Hotel({ name, address, roomData, amenities }) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {address}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Rooms roomData={roomData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Amenities amenities={amenities} />
        </Grid>
      </Grid>
      <Booking hotelName={name} />
    </Box>
  );
}

export default Hotel;
