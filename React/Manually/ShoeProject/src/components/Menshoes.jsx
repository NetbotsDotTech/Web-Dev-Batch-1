import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled } from '@mui/material';
import { useSearchParams, useLocation } from 'react-router-dom'; // Import necessary hooks
import shoesImage from '../assets/image/box1/shoes1.avif';
import shoes2 from '../assets/image/backgroundImage/bg4.avif';

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
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [products, setProducts] = useState([]);
  const [hoveredImage, setHoveredImage] = useState({});
  const [searchParams, setSearchParams] = useSearchParams(); // Get search params from URL

  useEffect(() => {
    const dummyProducts = [
      { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [shoesImage, shoesImage, shoesImage, shoes2], availableSizes: ['5', '6', '7', '8', '9', '10'], color: 'Red', category: 'Men' },
  { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [shoesImage, shoesImage, shoesImage, shoesImage], availableSizes: ['8', '9', '10', '11'], color: 'Black', category: 'Men' },
  { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8', '9'], color: 'Blue', category: 'Women' },
  { id: 4, title: 'Leather Boots', price: '8500 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Brown', category: 'Women' },
  { id: 5, title: 'Sports Sandals', price: '3500 PKR', images: [shoesImage, shoes2], availableSizes: ['6', '7', '8'], color: 'Green', category: 'Men' },
  { id: 6, title: 'Gym Trainers', price: '6000 PKR', images: [shoesImage, shoesImage], availableSizes: ['7', '8', '9'], color: 'Gray', category: 'Men' },
  { id: 7, title: 'Ankle Boots', price: '7800 PKR', images: [shoesImage, shoes2], availableSizes: ['6', '7', '8', '9'], color: 'Black', category: 'Women' },
  { id: 8, title: 'Slip-on Loafers', price: '4200 PKR', images: [shoesImage], availableSizes: ['8', '9', '10'], color: 'Navy Blue', category: 'Men' },
  { id: 9, title: 'High Heels', price: '5400 PKR', images: [shoesImage, shoesImage], availableSizes: ['5', '6', '7'], color: 'Red', category: 'Women' },
  { id: 10, title: 'Flip Flops', price: '2000 PKR', images: [shoesImage], availableSizes: ['6', '7', '8', '9'], color: 'White', category: 'Women' },
  { id: 11, title: 'Trail Running Shoes', price: '6800 PKR', images: [shoesImage, shoes2, shoesImage], availableSizes: ['7', '8', '9', '10'], color: 'Orange', category: 'Men' },
  { id: 12, title: 'Formal Oxfords', price: '9000 PKR', images: [shoesImage], availableSizes: ['7', '8', '9'], color: 'Black', category: 'Men' },
    ];
    setProducts(dummyProducts);
  }, []);

  useEffect(() => {
    // Sync component state with query parameters
    const menParam = searchParams.get('category') === 'Men';
    const sizeParam = searchParams.get('size') || '';
    const colorParam = searchParams.get('color') || '';

    setIsMenSelected(menParam);
    setSelectedSize(sizeParam);
    setSelectedColor(colorParam);
  }, [searchParams]);


  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];

  const filteredProducts = products.filter(product =>
    product.category === (isMenSelected ? 'Men' : 'Women') &&
    (selectedSize ? product.availableSizes.includes(selectedSize) : true) &&
    (selectedColor ? product.color === selectedColor : true)
  );

const resetFilters = () => {
    setSelectedSize('');
    setSelectedColor('');
    setSearchParams({ category: isMenSelected ? 'Men' : 'Women' }); // Reset to category only
  };
  const handleSizeChange = (size) => {
    setSelectedSize(size);
    setSearchParams({ category: isMenSelected ? 'Men' : 'Women', size, color: selectedColor }); // Update query params
  };
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSearchParams({ category: isMenSelected ? 'Men' : 'Women', size: selectedSize, color }); // Update query params
  };


  const handleThumbnailClick = (productId, image) => {
    setHoveredImage(prevState => ({ ...prevState, [productId]: image }));
  };

  return (
    <Box display="flex" p={3} mt={15}>
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

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
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Box>
          ))}
        </Box>

        <Typography variant="h6" mt={2}>Color Base</Typography>
        <Box display="flex" flexDirection="column">
          {colors.map(color => (
            <Box key={color} display="flex" alignItems="center" onClick={() => setSelectedColor(color)}>
              <Box sx={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%', marginBottom: '8px', cursor: 'pointer', border: '1px solid #ddd' }} />
              <Typography variant="body2" style={{ color: selectedColor === color ? color : 'inherit' }}>{color}</Typography>
            </Box>
          ))}
        </Box>

        <Box mt={2} display="flex" justifyContent="flex-end">
          <button onClick={resetFilters} style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>
            Reset Filters
          </button>
        </Box>
      </Box>

      <Box width="75%">
        <Box display="flex" justifyContent="flex-end">
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
                  height="140"
                  image={hoveredImage[product.id] || product.images[0]} // Display the hovered image or the default image
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="body1">{product.price}</Typography>

                  {/* Thumbnail images */}
                  <Box display="flex" mt={2}>
                    {product.images.map((image, index) => (
                      <Thumbnail
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        onClick={() => handleThumbnailClick(product.id, image)} // Update main image on click
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
