import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, CircularProgress } from '@mui/material';
import DestinationCard from './DestinationCard';

export const  DestinationList=()=> {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/destinations')
      .then((response) => {
        setDestinations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching destinations:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress style={{ display: 'block', margin: 'auto' }} />;
  }

  return (
    <Grid container spacing={3}>
      {destinations.map((destination) => (
        <Grid item xs={12} sm={6} md={4} key={destination.id}>
          <DestinationCard destination={destination} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DestinationList;
