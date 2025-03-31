import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

// Import images
import menCategoryImage from '../assets/images/men-category.jpg';
import womenCategoryImage from '../assets/images/women-category.jpg';
import electronicsCategoryImage from '../assets/images/electronics-category.jpg';
import homeDecorCategoryImage from '../assets/images/home-decor-category.jpg';

const categories = [
  { title: 'Men', image: menCategoryImage },
  { title: 'Women', image: womenCategoryImage },
  { title: 'Electronics', image: electronicsCategoryImage },
  { title: 'Home Decor', image: homeDecorCategoryImage },
];

const CategoryCards = () => {
  return (
    <Grid container spacing={4} sx={{ my: 4 }}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={3} key={category.title}>
          <Card>
            <CardMedia
              component="img"
              image={category.image}
              alt={category.title}
              height="140"
            />
            <CardContent>
              <Typography variant="h6" align="center">
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryCards;
