import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid, FormControl, InputLabel, Select, MenuItem, styled } from '@mui/material';
import shoesImage from '../assets/image/box1/shoes1.avif'; // Example image
import shoes2 from '../assets/image/backgroundImage/bg4.avif'
// Styled components for thumbnail and size options
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

const SizeButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '4px',
  padding: '8px 16px',
  marginRight: '8px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.05)',
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
  justifyContent: 'space-between',
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
    lineHeight: '40px', // Ensure consistent vertical alignment
  },
  '& .label-men': {
    color: isMenSelected ? 'white' : theme.palette.text.primary,
  },
  '& .label-women': {
    color: !isMenSelected ? 'white' : theme.palette.text.primary,
  },
  '& .switch': {
    position: 'absolute',
    top: '0',  // Align to the top of the container
    left: isMenSelected ? '50%' : '0',  // Adjust left position based on selection
    width: '90px',  // Adjust width of the switch for better fit
    height: '100%',  // Full height to fit the parent
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    transition: 'left 0.3s ease',
    zIndex: 1,
  },
}));



const MenShoes = () => {
  const [isMenSelected, setIsMenSelected] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [mainImage, setMainImage] = useState(shoesImage);

  // Dummy product data
  const products = [
    { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoesImage, shoesImage, shoes2, shoesImage], availableSizes: ['1','2','3','4','5','6','7','8','9','10'], category: 'Men' },
    { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['8', '9', '10'], category: 'Men' },
    { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['6', '7', '8'], category: 'Women' },
    { id: 4, title: 'Leather Boots', price: '8500 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['8', '9', '10'], category: 'Women' },
    { id: 5, title: 'Sporty Trainers', price: '5500 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['7', '8', '9'], category: 'Men' },
    { id: 6, title: 'Elegant Loafers', price: '6000 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['7', '8', '9'], category: 'Men' },
    { id: 7, title: 'Fashionable Heels', price: '6200 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['6', '7', '8'], category: 'Women' },
    { id: 8, title: 'Winter Boots', price: '9000 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['7', '8', '9'], category: 'Women' },
  ];

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Filter products based on selected category
  const filteredProducts = products.filter(product => product.category === (isMenSelected ? 'Men' : 'Women'));

  return (
    <Box display="flex" p={3} mt={15}>
      {/* Left Column (Filters) */}
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

        {/* Categories */}
        <Typography variant="body1">Home /</Typography>
        <Typography variant="body2">Women's Shoes</Typography>
        <Typography variant="body2">Everyday Sneakers</Typography>
        <Typography variant="body2">Active Shoes</Typography>
        <Typography variant="body2">Water-Repellent Shoes</Typography>
        <Typography variant="body2">Flats</Typography>
        <Typography variant="body2">Slip-Ons</Typography>
        <Typography variant="body2">Hiking Shoes</Typography>
        <Typography variant="body2">High Tops</Typography>
        <Typography variant="body2">Sale Shoes</Typography>

        {/* Size Filter */}
        <Typography variant="h6" mt={2}>Sizes</Typography>
        <Typography variant="body2">Most of our shoes only come in full sizes. If you’re a half size, select your nearest whole size too.</Typography>
        {['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'].map(size => (
          <Typography key={size} variant="body2">{size}</Typography>
        ))}

        {/* Other Filters */}
        <Typography variant="h6" mt={2}>Best For</Typography>
        <Typography variant="body2">Everyday</Typography>
        <Typography variant="body2">Warm Weather</Typography>
        <Typography variant="body2">Cool Weather</Typography>
        <Typography variant="body2">Active</Typography>
        <Typography variant="body2">Wet Weather</Typography>

        <Typography variant="h6" mt={2}>Material</Typography>
        <Typography variant="body2">Cozy & Durable Cotton Blend</Typography>
        <Typography variant="body2">Soft & Cozy Wool</Typography>
        <Typography variant="body2">Light & Breezy Tree</Typography>
        <Typography variant="body2">Lightweight & Durable Canvas</Typography>

        <Typography variant="h6" mt={2}>Hue</Typography>
        {['Black', 'Beige', 'Grey', 'Red', 'Blue', 'White', 'Green', 'Purple', 'Pink', 'Brown'].map(hue => (
          <Typography key={hue} variant="body2">{hue}</Typography>
        ))}
      </Box>

      {/* Right Column (Product Cards) */}
      <Box width="75%" pl={2}>
        {/* Custom Switch for Men/Women */}
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <CustomSwitch isMenSelected={isMenSelected} onClick={() => setIsMenSelected(!isMenSelected)}>
            <div className="label label-women">Women</div>
            <div className="switch"></div>
            <div className="label label-men">Men</div>
          </CustomSwitch>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard>
                <CardMedia component="img" height="140" image={mainImage} alt={product.title} />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.price}</Typography>

                  {/* Thumbnail Images */}
                  <Box display="flex" mt={2} mb={2}>
                    {product.images.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                      />
                    ))}
                  </Box>

                  {/* Size Options */}
                  <Box display="flex" flexWrap="wrap" mb={2}>
                    {product.availableSizes.map((size) => (
                      <SizeButton
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        style={{ backgroundColor: size === selectedSize ? '#ddd' : 'transparent' }}
                      >
                        {size}
                      </SizeButton>
                    ))}
                  </Box>

                  {/* Removed buttons: 'Buy Now' and 'View Details' */}
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
