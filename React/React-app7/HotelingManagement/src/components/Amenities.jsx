import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Amenity from './Amenity';

function Amenities({ amenities }) {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Amenities
      </Typography>
      <Grid container spacing={4}>
        {amenities.map((amenity) => (
          <Grid item key={amenity.id} xs={12} sm={6}>
            <Amenity amenity={amenity} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Amenities;
