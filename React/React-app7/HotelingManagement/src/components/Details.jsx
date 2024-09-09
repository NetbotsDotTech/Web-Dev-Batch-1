import React from 'react';
import { Box, Typography } from '@mui/material';

function Details({ hotelName, bookingInfo }) {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Booking Details
      </Typography>
      <Typography variant="body1">
        Hotel: {hotelName}
      </Typography>
      <Typography variant="body1">
        Name: {bookingInfo.name}
      </Typography>
      <Typography variant="body1">
        Email: {bookingInfo.email}
      </Typography>
      <Typography variant="body1">
        Room Type: {bookingInfo.roomType}
      </Typography>
    </Box>
  );
}

export default Details;
