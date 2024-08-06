import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 'auto',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
