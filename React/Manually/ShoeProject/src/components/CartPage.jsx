import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from './ReactContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { selectedProduct, cartItems, setCartItems } = useContext(CartContext);
  const location = useLocation();
  const data = location.state; // This is the passed data which should include quantity
  console.log("quantity:", data)

  if (!selectedProduct && cartItems.length === 0) {
    return <Typography>No product selected and your cart is empty.</Typography>;
  }

  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    if (selectedProduct) {
      const {
        id,
        images = [], // default to an empty array if no images are available
        price,
        title,
      } = selectedProduct;

      const newItem = {
        id,
        image: images[0] || '', // Handle missing image case
        title,
        price,
        quantity: data, // Use the quantity passed in the state
      };

      setCart((prevCart) => {
        const itemExists = prevCart.find((item) => item.id === id);
        if (itemExists) {
          // If the item already exists, update its quantity by adding the new one
          return prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity } // Add to existing quantity
              : item
          );
        }
        return [...prevCart, newItem]; // Add the new item to the cart
      });
    }
  }, [selectedProduct]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(cart);
  }, [cart, setCartItems]);

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0); // Use item.quantity here
  };

  return (
    <Box sx={{ padding: 3, height: 'auto', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <IconButton onClick={() => navigate('/')} sx={{ position: 'absolute', left: 20, top: 20 }}>
          <CloseIcon />
        </IconButton>
        <AddShoppingCartIcon sx={{ fontSize: 50 }} />
        <Typography variant="h3">{cart.length} Cards</Typography>
        <Typography variant="h6">
          Congratulations! You get free standard shipping 
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: 2, height: '12px', backgroundColor: '#ccc' }} />

      <Grid container spacing={1} sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid item xs={12} md={8}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Card
                key={item.id}
                sx={{
                  textAlign: 'center',
                  width: "70%",
                  display: 'flex',
                  marginBottom: 2,
                  padding: 2,
                  position: 'relative',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  transition: '0.3s',
                  marginLeft: "10%",
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.image || '/placeholder.png'} // Default image if not available
                  sx={{ width: 100, height: 100, objectFit: 'contain' }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="body1">Title: {item.title}</Typography>
                  <Typography variant="body1" sx={{ alignSelf: 'flex-end', margin: 1 }}>
                    Price: {item.price * item.quantity} PKR
                  </Typography>
                </CardContent>
                <IconButton
                  sx={{ position: 'absolute', right: 10, top: 10 }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <CloseIcon />
                </IconButton>
              </Card>
            ))
          ) : (
            <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6">Your cart is empty</Typography>
              <Button
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={() => navigate('/service')} // Adjust the route to your service component
              >
                Shop Now
              </Button>
            </Box>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ padding: 5, border: '2px solid #ccc', borderRadius: '4px' }}>
            <Typography variant="h4">Cart Summary</Typography>
            <Divider sx={{ marginY: 5 }} />
                       <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}>
              Total Quantity: {getTotalQuantity()}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "20px", marginLeft: "10px" }}>
              Subtotal: {getSubtotal()} PKR
            </Typography>
            <Divider sx={{ marginY: 5 }} />
            <Button
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={() => navigate('/checkout')} // Navigate to the checkout page
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
