import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const placeDetails = {
  'Hunza Valley': 'Detailed information about Hunza Valley...',
  'Fairy Meadows': 'Detailed information about Fairy Meadows...',
  'Skardu': 'Detailed information about Skardu...',
  'Naltar Valley': 'Detailed information about Naltar Valley...',
  'Passu Cones': 'Detailed information about Passu Cones...',
  'Deosai National Park': 'Detailed information about Deosai National Park...',
};

function PlaceDetail() {
  const { placeTitle } = useParams();
  const detail = placeDetails[placeTitle] || 'No information available.';

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        {placeTitle}
      </Typography>
      <Typography variant="body1">
        {detail}
      </Typography>
    </Box>
  );
}

export default PlaceDetail;
