import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import logo from '../assets/image/logo.png';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
  Badge, Box, Menu, MenuItem
} from '@mui/material';
import { Search, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [cartItems, setCartItems] = useState(0); // State to store cart items

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleAddToCart = () => {
    setCartItems((prevItems) => prevItems + 1);
  };

  const sentences = [
    'Free Shipping on orders over 50pkr!',
    'Exclusive offers available now!',
    'Get 20% off your first purchase!',
  ];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prevSentence) => {
        const currentIndex = sentences.indexOf(prevSentence);
        const nextIndex = (currentIndex + 1) % sentences.length;
        return sentences[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [sentences]);

  const isHomePage = location.pathname === '/';
  const isShopPage = location.pathname === '/shop';

  return (
    <AppBar position="fixed">
      <Toolbar className="header">
        <Box
          component="img"
          sx={{
            height: 64,
            display: { xs: 'none', sm: 'block' },
            marginRight: 'auto',
            marginLeft: 'auto',
          }}
          alt="Shop Logo"
          src={logo}
        />

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Button color="inherit" onClick={() => navigate('/shop/men')}>Men</Button>
          <Button color="inherit" onClick={() => navigate('/shop/women')}>Women</Button>
          <Button color="inherit" onClick={() => navigate('/shop/kids')}>Kids</Button>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            aria-label="search"
            color="inherit"
            onClick={() => navigate('/search')}
          >
            <Search />
          </IconButton>

          <IconButton size="large" aria-label="show cart items" color="inherit" onClick={handleAddToCart}>
            <Badge badgeContent={cartItems} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>

          <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={() => navigate('/login')}>Login</MenuItem>
            <MenuItem onClick={() => navigate('/signup')}>Signup</MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {isHomePage && (
        <Box sx={{ backgroundColor: ' #7dcea0 ', p: 1 }}>
          <Typography variant="body1" align="center">
            {currentSentence}
          </Typography>
        </Box>
      )}

      {isShopPage && (
        <Box sx={{ backgroundColor: ' #7dcea0', p: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" onClick={() => navigate('/shop/men')}>Men</Button>
            <Button color="inherit" onClick={() => navigate('/shop/women')}>Women</Button>
            <Button color="inherit" onClick={() => navigate('/shop/kids')}>Kids</Button>
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
