import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function Amenity({ amenity }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={amenity.icon}
        alt={amenity.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {amenity.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Amenity;
