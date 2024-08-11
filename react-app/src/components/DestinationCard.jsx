import React from 'react';
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

export const DestinationCard=({ destination })=> {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {destination.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {destination.country}, {destination.continent}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Population: {destination.population}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Currency: {destination.currency}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Language: {destination.language}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Best Time to Visit: {destination.best_time_to_visit}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {destination.description}
        </Typography>
       
      </CardContent>
    </StyledCard>
  );
}

export default DestinationCard;
