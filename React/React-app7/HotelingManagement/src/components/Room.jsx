import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function Room({ room }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={room.image}
        alt={`${room.type} room`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {room.type} Room
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${room.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Room;
