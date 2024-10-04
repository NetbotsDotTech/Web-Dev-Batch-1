import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled, IconButton } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom'; // For URL handling and navigation
import shoesImage from '../assets/image/box1/shoes1.avif';
import shoes2 from '../assets/image/backgroundImage/bg4.avif';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // New Icon Import
// import images
import card11 from '../assets/image/card/card1/1.avif'
import card12 from '../assets/image/card/card1/2.avif'
import card13 from '../assets/image/card/card1/3.avif'
import card14 from '../assets/image/card/card1/4.avif'
import card21 from '../assets/image/card/card2/1.avif'
import card22 from '../assets/image/card/card2/2.avif'
import card23 from '../assets/image/card/card2/3.avif'
import card24 from '../assets/image/card/card2/4.avif'
import card31 from '../assets/image/card/card3/1.avif'
import card32 from '../assets/image/card/card3/2.avif'
import card33 from '../assets/image/card/card3/3.avif'
import card34 from '../assets/image/card/card3/4.avif'
import card41 from '../assets/image/card/card4/1.avif'
import card42 from '../assets/image/card/card4/2.avif'
import card43 from '../assets/image/card/card4/3.avif'
import card44 from '../assets/image/card/card4/4.avif'
import card51 from '../assets/image/card/card5/1.avif'
import card52 from '../assets/image/card/card5/2.avif'
import card53 from '../assets/image/card/card5/3.avif'
import card54 from '../assets/image/card/card5/4.avif'
import card61 from '../assets/image/card/card6/1.avif'
import card62 from '../assets/image/card/card6/2.avif'
import card63 from '../assets/image/card/card6/3.avif'
import card64 from '../assets/image/card/card6/4.avif'
import card71 from '../assets/image/card/card7/1.avif'
import card72 from '../assets/image/card/card7/2.avif'
import card73 from '../assets/image/card/card7/3.avif'
import card74 from '../assets/image/card/card7/4.avif'
import card81 from '../assets/image/card/card8/1.avif'
import card82 from '../assets/image/card/card8/2.avif'
import card83 from '../assets/image/card/card8/3.avif'
import card84 from '../assets/image/card/card8/4.avif'
import card91 from '../assets/image/card/card9/1.avif'
import card92 from '../assets/image/card/card9/2.avif'
import card93 from '../assets/image/card/card9/3.avif'
import card94 from '../assets/image/card/card9/4.avif'
import card101 from '../assets/image/card/card10/1.avif'
import card102 from '../assets/image/card/card10/2.avif'
import card103 from '../assets/image/card/card10/3.avif'
import card104 from '../assets/image/card/card10/4.avif'
import card111 from '../assets/image/card/card11/1.avif'
import card112 from '../assets/image/card/card11/2.avif'
import card113 from '../assets/image/card/card11/3.avif'
import card114 from '../assets/image/card/card11/4.avif'
import card121 from '../assets/image/card/card12/1.avif'
import card122 from '../assets/image/card/card12/2.avif'
import card123 from '../assets/image/card/card12/3.avif'
import card124 from '../assets/image/card/card12/4.avif'

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
      { id: 1, title: 'Running Shoes', price: '5000 PKR', images: [card11, card12, card13, card14], availableSizes: ['5', '6', '7', '8', '9', '10'], color: 'Red', category: 'Young' },
      { id: 2, title: 'Hiking Boots', price: '7500 PKR', images: [card21, card22, card23, card24], availableSizes: ['8', '9', '10', '11'], color: 'Black', category: 'Old' },
      { id: 3, title: 'Casual Sneakers', price: '4000 PKR', images: [card31,card32,card33,card34], availableSizes: ['6', '7', '8', '9'], color: 'Blue', category: 'Young' },
      { id: 4, title: 'Basketball Shoes', price: '6000 PKR', images: [card41, card42,card43,card44], availableSizes: ['7', '8', '9', '10', '11'], color: 'White', category: 'Old' },
      { id: 5, title: 'Trail Running Shoes', price: '5500 PKR', images: [card51, card52,card53,card54], availableSizes: ['5', '6', '7', '8'], color: 'Green', category: 'Young' },
      { id: 6, title: 'Formal Loafers', price: '4500 PKR', images: [card61,card62,card63,card64], availableSizes: ['8', '9', '10', '11'], color: 'Brown', category: 'Old' },
      { id: 7, title: 'Flat Sandals', price: '3000 PKR', images: [card71,card72,card73,card74], availableSizes: ['6', '7', '8'], color: 'Tan', category: 'Young' },
      { id: 8, title: 'High Top Sneakers', price: '6500 PKR', images: [card81, card82,card83,card84], availableSizes: ['7', '8', '9', '10'], color: 'Black', category: 'Young' },
      { id: 9, title: 'Ballet Flats', price: '3500 PKR', images: [card91,card92,card93,card94], availableSizes: ['5', '6', '7'], color: 'Pink', category: 'Old' },
      { id: 10, title: 'Slip-On Sneakers', price: '4000 PKR', images: [card101,card102,card103,card104], availableSizes: ['7', '8', '9'], color: 'Gray', category: 'Young' },
      { id: 11, title: 'Outdoor Sandals', price: '3800 PKR', images: [card111, card112,card113,card114], availableSizes: ['8', '9', '10'], color: 'Beige', category: 'Old' },
      { id: 12, title: 'Fitness Shoes', price: '5200 PKR', images: [card121,card122,card123,card124], availableSizes: ['6', '7', '8', '9'], color: 'Black', category: 'Old' },
     
    ];
    setProducts(dummyProducts);
  }, []);

  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];

  const filteredProducts = products.filter(product =>
    product.category === (isMenSelected ? 'Young' : 'Old') &&
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
            <Typography className={`label label-men`}>Young</Typography>
            <Typography className={`label label-women`}>Old</Typography>
          </CustomSwitch>
        </Box>

        <Typography variant="h4" mt={2} mb={2}>
          {isMenSelected ? 'Young\'s Shoes' : 'Old\'s Shoes'}
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
