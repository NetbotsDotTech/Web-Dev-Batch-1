import React from 'react';
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const places = [
  {
    title: 'Hunza Valley',
    description: 'Known for its stunning landscapes and rich cultural heritage.',
    imageUrl: 'https://source.unsplash.com/1600x900/?hunza',
  },
  {
    title: 'Fairy Meadows',
    description: 'A magical place with breathtaking views of Nanga Parbat.',
    imageUrl: 'https://source.unsplash.com/1600x900/?fairy-meadows',
  },
  {
    title: 'Skardu',
    description: 'A paradise for trekkers and adventure enthusiasts.',
    imageUrl: 'https://source.unsplash.com/1600x900/?skardu',
  },
  {
    title: 'Naltar Valley',
    description: 'Famous for its colorful lakes and lush greenery.',
    imageUrl: 'https://source.unsplash.com/1600x900/?naltar',
  },
  {
    title: 'Passu Cones',
    description: 'Known for its unique cone-shaped peaks.',
    imageUrl: 'https://source.unsplash.com/1600x900/?passu-cones',
  },
  {
    title: 'Deosai National Park',
    description: 'The land of giants with rich flora and fauna.',
    imageUrl: 'https://source.unsplash.com/1600x900/?deosai',
  },
];

function Home() {
  const navigate = useNavigate();

  const handleLearnMore = (place) => {
    navigate(`/place/${place.title}`);
  };

  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to ZBS Company
      </Typography>
      <Typography variant="body1" align="center" paragraph>
      </Typography>
      <Grid container spacing={4}>
        {places.map((place, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={place.imageUrl}
                alt={place.title}
                onClick={() => handleLearnMore(place)}
                style={{ cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {place.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleLearnMore(place)}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Home;
