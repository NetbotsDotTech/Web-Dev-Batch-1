import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Rating, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const handleBuyNowClick = (event) => {
    event.stopPropagation(); // Prevents the card click event from triggering
    navigate(`/checkout/${id}`, { state: product }); // Pass product details to Checkout
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
      onClick={handleCardClick}
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
        {rating && rating.rate ? (
          <Rating name="read-only" value={rating.rate} readOnly />
        ) : (
          <Typography variant="body2" color="text.secondary">
            No rating available
          </Typography>
        )}
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleBuyNowClick}>
            Buy Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
