import React, { useEffect, useState } from 'react';
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
import VictoryIcon from '@mui/icons-material/EmojiEvents';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    const productData = location.state;

    if (productData) {
      const { availableSizes, id, images = [], price, title } = productData;
      const newItem = {
        id,
        image: images[0],
        title,
        size: availableSizes[0],
        price,
        quantity: 1,
      };

      setCart((prevCart) => {
        const itemExists = prevCart.find(item => item.id === id);
        if (itemExists) {
          return prevCart.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, newItem];
      });
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: 3, height: 'auto', display: 'flex', flexDirection: 'column', marginTop: 10 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <IconButton onClick={() => navigate('/')} sx={{ position: 'absolute', left: 20, top: 20 }}>
          <CloseIcon />
        </IconButton>
        <AddShoppingCartIcon sx={{ fontSize: 50 }} />
        <Typography variant="h6">{cart.length} Cards</Typography>
        <Typography variant="body2">
          Congrats! You get free standard shipping <VictoryIcon />
        </Typography>
      </Box>
      <Divider sx={{ marginBottom: 2, height: '2px', backgroundColor: '#ccc' }} />

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={8}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: 'flex',
                  marginBottom: 2,
                  padding: 2,
                  position: 'relative',
                  borderRadius: '8px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  alt={item.title}
                  image={item.image}
                  sx={{ width: 100, height: 100, objectFit: 'contain' }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2">Size: {item.size}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                    <Button
                      onClick={() => handleQuantityChange(item.id, 'decrease')}
                      disabled={item.quantity === 1}
                      sx={{
                        minWidth: '30px',
                        fontSize: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        padding: '0px',
                        '&:hover': { backgroundColor: '#f0f0f0' },
                      }}
                    >
                      -
                    </Button>
                    <Typography sx={{ marginX: 1 }}>{item.quantity}</Typography>
                    <Button
                      onClick={() => handleQuantityChange(item.id, 'increase')}
                      sx={{
                        minWidth: '30px',
                        fontSize: '20px',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        padding: '0px',
                        '&:hover': { backgroundColor: '#f0f0f0' },
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </CardContent>
                <IconButton
                  sx={{ position: 'absolute', right: 10, top: 10 }}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="body1" sx={{ alignSelf: 'flex-end', margin: 1 }}>
                  {item.price * item.quantity} PKR
                </Typography>
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
          <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
            <Typography variant="h6">Cart Summary</Typography>
            <Divider sx={{ marginY: 1 }} />
            <Typography variant="body1">Total Items: {getTotalQuantity()}</Typography>
            <Typography variant="body1">Subtotal: {getSubtotal()} PKR</Typography>
            <Typography variant="body1">Shipping: Free</Typography>
            <Typography variant="body1">Total Cards: {cart.length}</Typography> {/* Show total cards */}
            {cart.length > 0 && (
              <Button
                variant="contained"
                fullWidth
                sx={{ marginTop: 2 }}
                onClick={() => navigate('/checkout ',{state:location.state})}
                
              >
                Proceed to Checkout
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
