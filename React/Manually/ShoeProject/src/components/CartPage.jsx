import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VictoryIcon from '@mui/icons-material/EmojiEvents'; // Victory icon
import image1 from '../assets/image/box4/shoes1.avif'

const CartPage = ({ navigate }) => {
  // Mock data for cart
  const [cart, setCart] = useState([
    {
      id: 1,
      image: image1,
      title: 'Stylish Product',
      size: 10,
      price: 5000,
      quantity: 1,
    },
    
  ]);

  const handleQuantityChange = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ padding: 3, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* First Row: Cart Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '10%' }}>
        <Box sx={{ width: '25%', display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => navigate('/')}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ width: '75%', textAlign: 'left' }}>
          <IconButton>
            <AddShoppingCartIcon />
            <Typography variant="caption" sx={{ marginLeft: 1 }}>
              {getTotalQuantity()} Items
            </Typography>
          </IconButton>
          <Typography variant="body2">
            Congrats! You get free standard shipping <VictoryIcon />
          </Typography>
          <Divider sx={{ marginTop: 1 }} />
        </Box>
      </Box>

      {/* Second Row: Product List */}
      <Box sx={{ height: '30%', display: 'flex', marginTop: 4 }}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                width: '50%',
                border: '2px solid #ccc',
                borderRadius: '5px',
                padding: 2,
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <IconButton
                sx={{ position: 'absolute', right: 10, top: 10 }}
                onClick={() => handleRemoveItem(item.id)}
              >
                <CloseIcon />
              </IconButton>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
              <Box sx={{ flex: 1, marginLeft: 2 }}>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2">Size: {item.size}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                  <Button
                    onClick={() => handleQuantityChange(item.id, 'decrease')}
                    disabled={item.quantity === 1}
                    sx={{ minWidth: '30px' , fontSize:'20px', borderRadius:'100%', backgroundColor:"transparent" ,padding:"0px"}}
                  >
                    -
                  </Button>
                  <Typography sx={{ marginX: 1 }}>{item.quantity}</Typography>
                  <Button onClick={() => handleQuantityChange(item.id, 'increase')} sx={{ minWidth: '30px', fontSize:'20px', borderRadius:'50%',backgroundColor:'transparent' ,padding:"0px" }}>
                    +
                  </Button>
                </Box>
              </Box>
              <Typography variant="body1" sx={{ alignSelf: 'flex-end' }}>
                {item.price * item.quantity} PKR
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="h6">Your cart is empty</Typography>
        )}
      </Box>

      {/* Third Row: Subtotal and Checkout */}
      <Box sx={{ marginTop: 'auto', padding: 2, borderTop: '1px solid #ccc' }}>
        <Typography variant="body1">
          Subtotal: {getSubtotal()} PKR
        </Typography>
        <Typography variant="body1">Shipping: Free</Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={() => navigate('/checkout')}
>
  
</Button>
</Box>
</Box>
);
};

export default CartPage;
