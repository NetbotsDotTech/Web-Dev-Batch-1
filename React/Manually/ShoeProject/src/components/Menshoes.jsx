import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled, IconButton } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom'; // For URL handling and navigation
import shoesImage from '../assets/image/box1/shoes1.avif';
import shoes2 from '../assets/image/backgroundImage/bg4.avif';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // New Icon Import

// Styled components
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

const CustomSwitch = styled('div')(({ theme, isMenSelected }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '30px',
  padding: '5px',
  width: '180px',
  justifyContent: 'flex-end',
  backgroundColor: '#f0f0f0',
  position: 'relative',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s ease',
  '& .label': {
    width: '50%',
    textAlign: 'center',
    zIndex: 2,
    position: 'relative',
    transition: 'color 0.3s ease',
    lineHeight: '40px',
  },
  '& .label-men': {
    color: isMenSelected ? 'white' : theme.palette.text.primary,
  },
  '& .label-women': {
    color: !isMenSelected ? 'white' : theme.palette.text.primary,
  },
  '& .switch': {
    position: 'absolute',
    top: '0',
    left: isMenSelected ? '50%' : '0',
    width: '90px',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    transition: 'left 0.3s ease',
    zIndex: 1,
  },
}));

const MenShoes = () => {
  const [isMenSelected, setIsMenSelected] = useState(true);
  const [hoveredImage, setHoveredImage] = useState({}); // Tracks the hovered image for each card
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  // URL Search Params (for filters)
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSize = searchParams.get('size') || '';
  const selectedColor = searchParams.get('color') || '';

  useEffect(() => {
    const dummyProducts = [
      { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoesImage, shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9', '10'], color: 'Red', category: 'Men' },
      { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['8', '9', '10', '11'], color: 'Black', category: 'Men' },
      { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8', '9'], color: 'Blue', category: 'Women' },
      { id: 4, title: 'Basketball Shoes', price: '6000 PKR', images: [shoesImage, shoesImage], availableSizes: ['7', '8', '9', '10', '11'], color: 'White', category: 'Men' },
      { id: 5, title: 'Trail Running Shoes', price: '5500 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7', '8'], color: 'Green', category: 'Men' },
      { id: 6, title: 'Formal Loafers', price: '4500 PKR', images: [shoesImage], availableSizes: ['8', '9', '10', '11'], color: 'Brown', category: 'Men' },
      { id: 7, title: 'Flat Sandals', price: '3000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'Tan', category: 'Women' },
      { id: 8, title: 'High Top Sneakers', price: '6500 PKR', images: [shoesImage, shoes2], availableSizes: ['7', '8', '9', '10'], color: 'Black', category: 'Men' },
      { id: 9, title: 'Ballet Flats', price: '3500 PKR', images: [shoesImage], availableSizes: ['5', '6', '7'], color: 'Pink', category: 'Women' },
      { id: 10, title: 'Slip-On Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['7', '8', '9'], color: 'Gray', category: 'Women' },
      { id: 11, title: 'Outdoor Sandals', price: '3800 PKR', images: [shoesImage, shoesImage], availableSizes: ['8', '9', '10'], color: 'Beige', category: 'Men' },
      { id: 12, title: 'Fitness Shoes', price: '5200 PKR', images: [shoesImage], availableSizes: ['6', '7', '8', '9'], color: 'Black', category: 'Women' },
      { id: 13, title: 'Canvas Shoes', price: '3200 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7'], color: 'Navy', category: 'Men' },
      { id: 14, title: 'Combat Boots', price: '8000 PKR', images: [shoesImage], availableSizes: ['9', '10', '11'], color: 'Olive', category: 'Men' },
      { id: 15, title: 'Wedge Sneakers', price: '7000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'White', category: 'Women' },
      { id: 16, title: 'Running Sandals', price: '3900 PKR', images: [shoesImage], availableSizes: ['7', '8', '9'], color: 'Black', category: 'Men' },
      { id: 17, title: 'Knee-High Boots', price: '8500 PKR', images: [shoesImage, shoes2], availableSizes: ['7', '8', '9'], color: 'Brown', category: 'Women' },
      { id: 18, title: 'Dress Shoes', price: '6000 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Black', category: 'Men' },
      { id: 19, title: 'Platform Sandals', price: '4800 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'Red', category: 'Women' },
      { id: 20, title: 'Snow Boots', price: '9000 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Gray', category: 'Men' },
      { id: 21, title: 'Leather Sneakers', price: '6200 PKR', images: [shoesImage], availableSizes: ['6', '7', '8', '9'], color: 'Brown', category: 'Women' },
      { id: 22, title: 'Waterproof Boots', price: '7700 PKR', images: [shoesImage], availableSizes: ['8', '9', '10', '11'], color: 'Black', category: 'Men' },
      { id: 23, title: 'Dress Sandals', price: '4400 PKR', images: [shoesImage], availableSizes: ['5', '6', '7', '8'], color: 'Silver', category: 'Women' },
      { id: 24, title: 'Suede Sneakers', price: '5100 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7'], color: 'Beige', category: 'Women' },
      { id: 25, title: 'Track Shoes', price: '5800 PKR', images: [shoesImage], availableSizes: ['9', '10', '11'], color: 'Red', category: 'Men' },
      { id: 26, title: 'Ankle Boots', price: '6500 PKR', images: [shoesImage], availableSizes: ['7', '8', '9'], color: 'Gray', category: 'Women' },
    ];
    
    setProducts(dummyProducts);
  }, []);

  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];

  const filteredProducts = products.filter(product =>
    product.category === (isMenSelected ? 'Men' : 'Women') &&
    (selectedSize ? product.availableSizes.includes(selectedSize) : true) &&
    (selectedColor ? product.color === selectedColor : true)
  );
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
    navigate(`/men/product/${productId}`); // Navigate to the product detail page
  };

  return (
    <Box display="flex" p={3} mt={15}>
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

        {/* Sizes */}
        <Typography variant="h6" mt={2}>Sizes</Typography>
        <Box display="flex" flexWrap="wrap" mb={2}>
          {['5', '6', '7', '8', '9', '10', '11', '12', '13'].map(size => (
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

        {/* Reset Filters Button */}
        <Box mt={2} display="flex" justifyContent="flex-end">
          <button onClick={resetFilters} style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545', // Red for reset
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            '&:hover': { backgroundColor: '#c82333' } // Darker red on hover
          }}>
            Reset Filters
          </button>
        </Box>
      </Box>

      {/* Product Grid */}
      <Box width="75%">
        <Box display="flex" justifyContent="flex-end">
          {/* Switch for Men/Women */}
          <CustomSwitch onClick={() => setIsMenSelected(!isMenSelected)} isMenSelected={isMenSelected}>
            <Box className="switch" />
            <Typography className={`label label-men`}>Men</Typography>
            <Typography className={`label label-women`}>Women</Typography>
          </CustomSwitch>
        </Box>

        <Typography variant="h4" mt={2} mb={2}>
          {isMenSelected ? 'Men\'s Shoes' : 'Women\'s Shoes'}
        </Typography>

        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard isHovered={true}>
                <CardMedia
                  component="img"
                  height="200"
                  image={hoveredImage[product.id] || product.images[0]} 
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2">{product.price}</Typography>
                  <Box mt={2} display="flex">
                    {product.images.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleThumbnailClick(product.id, image)}
                      />
                    ))}
                  </Box>
                  {/* Updated Icon Button for Product Details */}
                  <IconButton onClick={() => handleCardClick(product.id)} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
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

export default MenShoes;
