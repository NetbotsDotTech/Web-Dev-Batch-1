import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, styled } from '@mui/material';

// Styled components for Thumbnail
const Thumbnail = styled('img')(({ theme }) => ({
  width: '60px',
  height: '60px',
  objectFit: 'cover',
  border: '1px solid #ddd',
  borderRadius: '4px',
  cursor: 'pointer',
  marginRight: '8px',
  transition: 'border-color 0.3s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

// Styled component for product card
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[8],
    zIndex: 1,
  },
}));

const ProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={mainImage}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
        <Box display="flex" mt={2}>
          {product.images.map((image, index) => (
            <Thumbnail
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
