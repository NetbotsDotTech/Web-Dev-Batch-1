import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Modal,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import image from '../assets/image/card/card4/1.avif';
import image1 from '../assets/image/card/card4/2.avif';
import CartPage from './CartPage.jsx';


// Mock product data
const productData = {
  images: [image, image1],
  title: 'Stylish Product',
  price: 5000,
  rating: 4.27,
  totalRatings: 107,
};

const sizes = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14];

const ProductDetail = () => {
  const navigate=useNavigate()
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setModalOpen(true);
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '100vh' }}>
      {/* Main Image Row */}
      <Grid container spacing={2} sx={{ height: '40%' }}>
        {/* Main Column: Main Image */}
        <Grid item xs={12} sx={{ position: 'relative', borderRadius: '5px', overflow: 'hidden', height: '100%', padding: 2 }}>
          <Box
            component="img"
            src={selectedImage}
            alt="Main Product"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '5px',
              transition: 'transform 0.3s',
              padding: 2,
            }}
          />
          <IconButton
            sx={{ position: 'absolute', bottom: 10, right: 50, backgroundColor: 'white', '&:hover': { backgroundColor: '#e0e0e0' } }}
            onClick={() => handleImageClick(productData.images[(productData.images.indexOf(selectedImage) - 1 + productData.images.length) % productData.images.length])}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            sx={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'white', '&:hover': { backgroundColor: '#e0e0e0' } }}
            onClick={() => handleImageClick(productData.images[(productData.images.indexOf(selectedImage) + 1) % productData.images.length])}
          >
            <ChevronRightIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Product Details Row */}
      <Box sx={{ marginTop: 2, backgroundColor: 'white', borderRadius: '5px', padding: 2, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body1" sx={{ color: '#666' }}>
          URL: /path/to/current
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>{productData.title}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Price: {productData.price} PKR (Free Shipping)
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Rating: {productData.rating} Stars ({productData.totalRatings})
        </Typography>

        {/* Size Selection */}
        <Typography variant="body1" sx={{ marginTop: 2 }}>Select Size:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 1 }}>
          {sizes.map((size) => (
            <Button
              key={size}
              variant="outlined"
              sx={{
                margin: 0.5,
                backgroundColor: selectedSize === size ? '#3f51b5' : 'white',
                color: selectedSize === size ? 'white' : 'black',
                '&:hover': {
                  backgroundColor: selectedSize === size ? '#2c387e' : '#e0e0e0',
                },
              }}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </Button>
          ))}
        </Box>
        <Button
          variant="contained"
          onClick={handleAddToCart}
          sx={{
            marginTop: 2,
            backgroundColor: selectedSize ? '#3f51b5' : '#ccc',
            color: 'white',          
            '&:hover': {
              backgroundColor: selectedSize ? '#2c387e' : '#ccc',
            },
            
          }}
          disabled={!selectedSize}

        >
          {selectedSize ? 'Add to Cart' : 'Select a Size'}
        </Button>
      </Box>

      {/* Modal for Cart Transaction */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: '80%', backgroundColor: 'white', padding: 4, borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', position: 'relative' }}>
          <IconButton
            onClick={() => setModalOpen(false)}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>You've Got Great Taste</Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Congrats! You get free standard shipping.</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Box>
              <Typography variant="body1">Product Image:</Typography>
              <img src={selectedImage} alt="Product" style={{ width: 100, height: 100, marginTop: 5 }} />
              <Typography variant="body1">{productData.title}</Typography>
              <Typography variant="body1">Price: {productData.price} PKR</Typography>
              <Typography variant="body1">Size: {selectedSize}</Typography>
            </Box>
            <Box>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="body1">{productData.price} PKR</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button variant="outlined" sx={{ marginRight: 1 }} onClick={()=>navigate('/men/product/:productId/ViewCard')}>View Cart & Checkout </Button>
                <Button variant="contained">Continue Shopping</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ProductDetail;
