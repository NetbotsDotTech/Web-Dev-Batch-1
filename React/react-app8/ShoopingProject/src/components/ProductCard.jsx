import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        cursor: 'pointer'
      }} 
      onClick={handleClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          PKR {price}
        </Typography>
        {/* Safely check for rating and rate */}
        {rating && rating.rate ? (
          <Rating name="read-only" value={rating.rate} readOnly />
        ) : (
          <Typography variant="body2" color="text.secondary">
            No rating available
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
