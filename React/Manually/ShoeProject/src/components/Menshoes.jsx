import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled, Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import shoesImage from '../assets/image/box1/shoes1.avif';
import shoes2 from '../assets/image/backgroundImage/bg4.avif';

// Styled components
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

const SizeBox = styled(Box)(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? '#ddd' : 'transparent',
  border: '1px solid #ddd',
  borderRadius: '4px',
  padding: '8px',
  marginRight: '8px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#ccc',
  },
}));

const ColorBox = styled(Box)(({ color }) => ({
  backgroundColor: color,
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  marginBottom: '8px',
  cursor: 'pointer',
  border: '1px solid #ddd',
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
  justifyContent: 'space-between', // Adjusted to space-between
  backgroundColor: '#f0f0f0',
  position: 'relative',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s ease',
  marginBottom: '20px',

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
    right: isMenSelected ? '90px' : '0', // Adjusted for position
    width: '90px',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '30px',
    transition: 'right 0.3s ease', // Keep transition for right
  },
}));


const ResetButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
  marginTop: '20px',
  width: '100%',
}));

const MenShoes = () => {
  const [isMenSelected, setIsMenSelected] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [products, setProducts] = useState([]); // State to manage products
  const navigate = useNavigate();
  const location = useLocation();

  // Dummy product data with mainImage field
  const initialProducts = [
    { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9'], color: 'Red', category: 'Men', mainImage: shoesImage },
    { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoes2], availableSizes: ['8', '9', '10'], color: 'Black', category: 'Men', mainImage: shoesImage },
    { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'Blue', category: 'Women', mainImage: shoesImage },
    { id: 4, title: 'Leather Boots', price: '8500 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Brown', category: 'Women', mainImage: shoesImage },
    { id: 5, title: 'Sports Shoes', price: '6000 PKR', images: [shoesImage], availableSizes: ['5', '6'], color: 'Green', category: 'Men', mainImage: shoesImage },
    { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9'], color: 'Red', category: 'Men', mainImage: shoesImage },
    { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoes2], availableSizes: ['8', '9', '10'], color: 'Black', category: 'Men', mainImage: shoesImage },
    { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'Blue', category: 'Women', mainImage: shoesImage },
    { id: 4, title: 'Leather Boots', price: '8500 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Brown', category: 'Women', mainImage: shoesImage },
    { id: 5, title: 'Sports Shoes', price: '6000 PKR', images: [shoesImage], availableSizes: ['5', '6'], color: 'Green', category: 'Men', mainImage: shoesImage }, { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9'], color: 'Red', category: 'Men', mainImage: shoesImage },
    { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoes2,shoes2,shoes2,shoes2], availableSizes: ['8', '9', '10'], color: 'Black', category: 'Men', mainImage: shoesImage },
    { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8'], color: 'Blue', category: 'Women', mainImage: shoesImage },
    { id: 4, title: 'Leather Boots', price: '8500 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Brown', category: 'Women', mainImage: shoesImage },
    { id: 5, title: 'Sports Shoes', price: '6000 PKR', images: [shoesImage], availableSizes: ['5', '6'], color: 'Green', category: 'Men', mainImage: shoesImage },
    { id: 6, title: 'Fashion Sneakers', price: '4200 PKR', images: [shoesImage], availableSizes: ['7', '9'], color: 'Purple', category: 'Women', mainImage: shoesImage },
  ];

  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];

  useEffect(() => {
    // Load initial products into state
    setProducts(initialProducts);

    // Parse the query parameters
    const params = new URLSearchParams(location.search);
    const size = params.get('size') || '';
    const color = params.get('color') || '';

    if (size) setSelectedSize(size);
    if (color) setSelectedColor(color);
  }, [location]);

  useEffect(() => {
    // Update URL query parameters on size/color change
    const params = new URLSearchParams();
    if (selectedSize) params.set('size', selectedSize);
    if (selectedColor) params.set('color', selectedColor);
    navigate({ search: params.toString() });
  }, [selectedSize, selectedColor, navigate]);

  // Update the specific product's mainImage when a thumbnail is clicked
  const handleImageClick = (productId, image) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, mainImage: image } : product
    );
    setProducts(updatedProducts);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  // Filter products based on selected criteria
  const filteredProducts = products.filter(product =>
    product.category === (isMenSelected ? 'Men' : 'Women') &&
    (selectedSize ? product.availableSizes.includes(selectedSize) : true) &&
    (selectedColor ? product.color === selectedColor : true)
  );

  // Reset filters
  const resetFilters = () => {
    setSelectedSize('');
    setSelectedColor('');
  };

  // Toggle between Men and Women products
  const toggleCategory = () => {
    setIsMenSelected(!isMenSelected);
  };

  return (
    <Box display="flex" p={3} mt={10}> {/* Adjusted the margin-top */}
      {/* Left Column (Filters) */}
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

        {/* Size Filter */}
        <Typography variant="h6" mt={2}>Sizes</Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Select your preferred size
        </Typography>
        <Box display="flex" flexWrap="wrap" mb={2}>
          {['5', '6', '7', '8', '9', '10', '11', '12', '13','4.5'].map(size => (
            <SizeBox
              key={size}
              isSelected={size === selectedSize}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </SizeBox>
          ))}
        </Box>

        {/* Color Filter */}
        <Typography variant="h6" mt={2}>Colors</Typography>
        <Typography variant="body2" color="textSecondary" mb={2}>
          Choose your favorite color
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
  {colors.map(color => (
    <Box display="flex" alignItems="center" key={color}>
      <ColorBox color={color} onClick={() => handleColorClick(color)} />
      <Typography variant="body2" style={{ marginLeft: '8px' }}>
        {color}
      </Typography>
    </Box>
  ))}
</Box>


        {/* Reset Filters Button */}
        <ResetButton variant="contained" onClick={resetFilters}>Reset Filters</ResetButton>
      </Box>

      {/* Right Column (Products) */}
      <Box width="75%" pl={2}>
        {/* Category Toggle Switch */}
        <CustomSwitch isMenSelected={isMenSelected} onClick={toggleCategory}>
  <div className="label label-men">Men</div>
  <div className="label label-women">Women</div>
  <div className="switch" />
</CustomSwitch>


        {/* Product Grid */}
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.mainImage}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{product.price}</Typography>

                  {/* Thumbnail images */}
                  <Box display="flex" mt={1}>
                    {product.images.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleImageClick(product.id, image)}
                      />
                    ))}
                  </Box>
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
