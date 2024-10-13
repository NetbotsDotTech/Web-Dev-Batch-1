import React, { useState, useContext } from 'react';
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
import Rating from '@mui/material/Rating';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from './ReactContext'; // Import the CartContext

const ProductDetail = () => {
  const { selectedProduct } = useContext(CartContext); // Access selected product from context
  console.log('selectedProduct', selectedProduct);
  if (!selectedProduct) {
    return <Typography>No product selected.</Typography>; // Handling for no product case
  }
  
  const {
    availableSizes = [],
    color,
    id,
    images = [],
    price,
    title,
    rating,
    description,
  } = selectedProduct || {}; // Destructure the product details

  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(images[2] || '');
  const [selectedSize, setSelectedSize] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1); // State for quantity

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setModalOpen(true);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1); // Increase quantity by 1
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); // Decrease quantity by 1
    }
  };

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', height: '130vh' }}>
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
            onClick={() => handleImageClick(images[(images.indexOf(selectedImage) - 1 + images.length) % images.length])}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            sx={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: 'white', '&:hover': { backgroundColor: '#e0e0e0' } }}
            onClick={() => handleImageClick(images[(images.indexOf(selectedImage) + 1) % images.length])}
          >
            <ChevronRightIcon />
          </IconButton>
        </Grid>
      </Grid>

      {/* Product Details Row */}
      <Box sx={{ marginTop: 2, backgroundColor: 'white', borderRadius: '5px', padding: 3, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="body1" sx={{ color: '#666' }}>
          {`/product/:productId ${id}`}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>{title || 'Product Title'}</Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Price: {price} PKR
        </Typography>
        <Typography variant="body1" sx={{position:'relative'}} >
          Rating:<Rating sx={{position:'absolute'}} name="read-only" value={rating} readOnly />
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Color: {color}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Description: {description}
        </Typography>

        {/* Quantity Control */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <Typography>Quantity:</Typography>
          <IconButton onClick={decrementQuantity} disabled={quantity <= 1}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ marginX: 2 }}>{quantity}</Typography>
          <IconButton onClick={incrementQuantity}>
            <AddIcon />
          </IconButton>
        </Box>

        {/* Size Selection */}
        <Typography variant="body1" sx={{ marginTop: 2 }}>Select Size:</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: 1 }}>
          {availableSizes.map((size) => (
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
              <Typography variant="body1">{title}</Typography>
              <Typography variant="body1">Price: {price} PKR</Typography>
              <Typography variant="body1">Size: {selectedSize}</Typography>
              <Typography variant="body1">Quantity: {quantity}</Typography> {/* Displaying Quantity */}
            </Box>
            <Box>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="body1">{price * quantity} PKR</Typography> {/* Updated to show quantity in subtotal */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <Button variant="outlined" sx={{ marginRight: 1 }} onClick={() => navigate(`/service/product/${id}/Cart` ,{state:quantity})}>
                  View Cart & Checkout
                </Button>
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
