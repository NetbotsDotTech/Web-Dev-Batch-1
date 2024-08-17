import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const categories = [
  { title: 'Men', image: '/path/to/men-category.jpg' },
  { title: 'Women', image: '/path/to/women-category.jpg' },
  { title: 'Electronics', image: '/path/to/electronics-category.jpg' },
  { title: 'Home Decor', image: '/path/to/home-decor-category.jpg' },
];

const CategoryCards = () => {
  return (
    <Grid container spacing={4} sx={{ my: 4 }}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={3} key={category.title}>
          <Card>
            <CardMedia component="img" image={category.image} alt={category.title} height="140" />
            <CardContent>
              <Typography variant="h6">{category.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryCards;
