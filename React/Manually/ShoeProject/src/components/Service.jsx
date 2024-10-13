import React, { useState, useEffect,useContext } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Grid, styled, IconButton } from '@mui/material';
import { useSearchParams, useNavigate } from 'react-router-dom'; // For URL handling and navigation
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // New Icon Import
import { dummyProducts } from '../../public/Data.js';
import { CartContext } from './ReactContext.jsx';



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
  fontWeight: 'bwomen',
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


const Service = () => {

  const {addToCart}=useContext(CartContext)
  const [isMenSelected, setIsMenSelected] = useState(true);
  const [hoveredImage, setHoveredImage] = useState({}); // Tracks the hovered image for each card
  const [products, setProducts] = useState(dummyProducts);
  const navigate = useNavigate()


  // URL Search Params (for filters)
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSize = searchParams.get('size') || '';
  const selectedColor = searchParams.get('color') || '';

  useEffect(() => {
    // Simulate fetching products and adding them to cart
    if (products.length > 0) {
      addToCart(products);
    }
  }, [products]);

  const colors = ['Grey', 'Black', 'Beige', 'Blue', 'Red', 'White', 'Gray', 'Purple'];
 

  const filteredProducts = products.filter(product =>
    product.category === (isMenSelected ? 'men' : 'women') &&
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
  const handleAddToCart = (product) => {
    addToCart(product); // Add individual product to cart when user clicks on the button
    navigate(`/service/product/${product.id}` )
  };

  return (
    <Box display="flex" p={3} mt={15}>
      <Box width="25%" pr={2}>
        <Typography variant="h6">Filter By:</Typography>

        {/* Sizes */}
        <Typography variant="h6" mt={2}>Sizes</Typography>
        <Typography   >Select Your Size.....</Typography>
        
        <Box display="flex" flexWrap="wrap" mb={2} m={5} >
          {['5', '6', '7', '8', '9', '10', '11', '12', '13'].map(size => (
            <Box
              key={size}
              sx={{
                backgroundColor: size === selectedSize ? '#000' : 'grey',
                color:size===selectedSize ? "#fff":'#ddd',
                border: '1px solid #ddd',
                borderRadius: '4px',
                padding: '8px',
                marginRight: '12px',
                marginTop:"15px",
                cursor: 'pointer',
                textAlign: 'center',
                '&:hover': { backgroundColor: '#ccc' },
               
              }}
              onClick={() => updateSearchParams(size, selectedColor)}
             
            >
              {size}
            </Box>
          ))}
        </Box>

        {/* Colors */}
        <Typography variant="h6" mt={2}>Color Base</Typography>
        <Typography   >Select Your Color.....</Typography>

        <Box display="flex" flexDirection="row" flexWrap="wrap" mb={2} m={5}>
          {colors.map(color => (
            <Box key={color} display="flex" alignItems="center" onClick={() => updateSearchParams(selectedSize, color)}>
              <Box sx={{ backgroundColor: color, width: '20px', height: '20px', borderRadius: '50%',  cursor: 'pointer', border: '1px solid #ddd', marginLeft:"22px",marginRight:"22px", marginTop:"15px" ,marginBottom:"15px"}} />
              <Typography variant="body2" style={{ color: selectedColor === color ? color : 'inherit' }}>{color}</Typography>
            </Box>
          ))}
        </Box>

        {/* Reset Filters Button */}
        <Box mt={20} mr={10} display="flex" justifyContent="flex-end">
          <button onClick={resetFilters} style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545', // Red for reset
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bwomen',
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
                  <Typography variant="body2">{product.price} PKR</Typography>
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
                  <IconButton onClick={() => handleAddToCart(product)} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
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

export default Service;
