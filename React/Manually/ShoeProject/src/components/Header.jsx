import React, { useState, useEffect } from 'react';
import '../css/Header.css'
import logo from '../assets/image/logo.png';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
  InputBase, Badge, Box
} from '@mui/material';
import {
  Search, ShoppingCart
} from '@mui/icons-material';
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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
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

  // Check if current path is "/home" or "/shop"
  const isHomePage = location.pathname === '/';
  const isShopPage = location.pathname === '/shop';

  return (
    <AppBar position="fixed" >
      <Toolbar className="header">
        {/* Logo aligned to the left */}
        <Box
          component="img"
          sx={{
            height: 64,
            display: { xs: 'none', sm: 'block' },
            marginRight: 'auto',
          }}
          alt="Shop Logo"
          src={logo}
        />

        {/* Centered Navigation */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'ceter' }}>
          <Button color="inherit" onClick={() => handleNavigation('/')}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/men')}>Men</Button>
          <Button color="inherit" onClick={() => handleNavigation('/women')}>Women</Button>
          <Button color="inherit" onClick={() => handleNavigation('/kids')}>Kids</Button>

        </Box>

        {/* Search bar and cart icon aligned to the right */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <SearchBar>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </SearchBar>

          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>

      {/* Show promo banner only on Home page */}
      {isHomePage && (
        <Box  sx={{ backgroundColor: ' #7dcea0 ', p: 1 }}>
          <Typography variant="body1" align="center">
            {currentSentence}
          </Typography>
        </Box>
      )}

      {/* Show secondary navbar only on Shop page */}
      {isShopPage && (
        <Box sx={{ backgroundColor: ' #7dcea0', p: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button color="inherit" onClick={() => handleNavigation('/shop/men')}>Men</Button>
            <Button color="inherit" onClick={() => handleNavigation('/shop/women')}>Women</Button>
            <Button color="inherit" onClick={() => handleNavigation('/shop/kids')}>Kids</Button>
          </Box>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
