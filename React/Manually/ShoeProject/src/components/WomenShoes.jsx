import React, { useState, useEffect, useMemo } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled, IconButton, Button } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom'; 
import shoesImage from '../assets/image/box1/shoes1.avif';
import shoes2 from '../assets/image/backgroundImage/bg4.avif';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Thumbnail = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
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

const StyledCard = styled(Card)(({ theme, isHovered }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: isHovered ? 'scale(1.05)' : 'none',
    boxShadow: theme.shadows[8],
    zIndex: 1,
  },
}));

const WomenShoes = () => {
  const [hoveredImage, setHoveredImage] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSize = searchParams.get('size') || '';
  const selectedColor = searchParams.get('color') || '';

  useEffect(() => {
    const dummyProducts = [
      { id: 1, title: 'Elegant Heels', price: '7000 PKR', images: [shoesImage, shoesImage, shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9'], color: 'Red', category: 'Women' },
      { id: 2, title: 'Fashion Sneakers', price: '5000 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['6', '7', '8', '9', '10'], color: 'Black', category: 'Women' },
      { id: 3, title: 'Sporty Shoes', price: '6000 PKR', images: [shoesImage], availableSizes: ['7', '8', '9'], color: 'Blue', category: 'Women' },
      { id: 4, title: 'Casual Flats', price: '4000 PKR', images: [shoesImage, shoesImage], availableSizes: ['5', '6', '7', '8'], color: 'White', category: 'Women' },
      // Additional dummy products...
    ];
    
    setProducts(dummyProducts);
  }, []);

  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.category === 'Women' &&
      (selectedSize ? product.availableSizes.includes(selectedSize) : true) &&
      (selectedColor ? product.color === selectedColor : true)
    );
  }, [products, selectedSize, selectedColor]);

  const updateSearchParams = (newSize, newColor) => {
    const params = {};
    if (newSize) params.size = newSize;
    if (newColor) params.color = newColor;
    setSearchParams(params);
  };

  const resetFilters = () => {
    setSearchParams({}); // Clear URL parameters
  };

  const handleThumbnailClick = (productId, image) => {
    setHoveredImage(prevState => ({ ...prevState, [productId]: image }));
  };
  
  const handleCardClick = (productId) => {
    navigate(`/women/product/${productId}`); // Navigate to the product detail page
  };

  return (
    <Box display="flex" p={3} mt={15}>
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

        {/* Sizes */}
        <Typography variant="h6" mt={2}>Sizes</Typography>
        <Box display="flex" flexWrap="wrap" mb={2}>
          {['5', '6', '7', '8', '9', '10', '11', '12'].map(size => (
            <Box
              key={size}
              sx={{
                backgroundColor: size === selectedSize ? '#ddd' : 'transparent',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '8px',
                marginRight: '8px',
                cursor: 'pointer',
                textAlign: 'center',
                '&:hover': { backgroundColor: '#ccc' }
              }}
              onClick={() => updateSearchParams(size, selectedColor)}
            >
              {size}
            </Box>
          ))}
        </Box>

        {/* Colors */}
        <Typography variant="h6" mt={2}>Color Base</Typography>
        <Box display="flex" flexDirection="column">
          {colors.map(color => (
            <Box key={color} display="flex" alignItems="center" onClick={() => updateSearchParams(selectedSize, color)}>
              <Box sx={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', marginBottom: '8px', cursor: 'pointer', border: '1px solid #ddd' }} />
              <Typography variant="body2" style={{ color: selectedColor === color ? color : 'inherit' }}>{color}</Typography>
            </Box>
          ))}
        </Box>

        {/* Reset Filters */}
        <Button variant="outlined" onClick={resetFilters} sx={{ mt: 2 }}>
          Reset Filters
        </Button>
      </Box>

      <Box width="75%">
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard onClick={() => handleCardClick(product.id)} isHovered={hoveredImage[product.id] === product.images[0]}>
                <CardMedia
                  component="img"
                  height="140"
                  image={hoveredImage[product.id] || product.images[0]}
                  alt={product.title}
                  onMouseEnter={() => handleThumbnailClick(product.id, product.images[1])}
                  onMouseLeave={() => handleThumbnailClick(product.id, product.images[0])}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">{product.price}</Typography>
                  <IconButton color="primary">
                    <AddShoppingCartIcon />
                  </IconButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WomenShoes;
