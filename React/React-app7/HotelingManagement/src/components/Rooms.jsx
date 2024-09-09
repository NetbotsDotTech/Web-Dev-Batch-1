import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Room from './Room';

function Rooms({ roomData }) {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Rooms
      </Typography>
      <Grid container spacing={4}>
        {roomData.map((room) => (
          <Grid item key={room.id} xs={12} sm={6}>
            <Room room={room} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Rooms;
