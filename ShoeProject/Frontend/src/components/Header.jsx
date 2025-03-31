import React, { useState, useEffect, useRef, useMemo } from 'react';
import '../css/Header.css';
import logo from '../assets/image/logo.png';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
  Box, Menu, MenuItem
} from '@mui/material';
import { Search, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthStore } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = useAuthStore((state) => state.logout);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);

  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const menuRef = useRef(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleLogin = () => {
    navigate('/login');
    handleProfileMenuClose();
  };

  const handleLogout = () => {
    logout(navigate);
    handleProfileMenuClose();
  };

  const sentences = useMemo(() => [
    'Free Shipping on orders over 50pkr!',
    'Exclusive offers available now!',
    'Get 20% off your first purchase!',
  ], []);

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prevSentence) => {
        const currentIndex = sentences.indexOf(prevSentence);
        const nextIndex = (currentIndex + 1) % sentences.length;
        return sentences[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sentences]);

  const isHomePage = location.pathname === '/';

  return (
    <AppBar position="fixed">
      <Toolbar className="header">
        <Link to={"/"}>
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
        </Link>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/service')}>Service</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
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

          <IconButton
            size="large"
            aria-label="show cart items"
            color="inherit"
            onClick={() => navigate(`/service/product/cart`)}
          >
            <ShoppingCart />
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
  ref={menuRef}
>
  {user && token ? (
    [
      <MenuItem key="profile" onClick={() => { handleProfileMenuClose(); navigate('/profile'); }}>Profile</MenuItem>,
      <MenuItem key="logout" onClick={handleLogout}>Logout</MenuItem>
    ]
  ) : (
    <MenuItem key="login" onClick={handleLogin}>Login</MenuItem>
  )}
</Menu>



        </Box>
      </Toolbar>

      {isHomePage && (
        <Box sx={{ backgroundColor: '#7dcea0', p: 1 }}>
          <Typography variant="body1" align="center">
            {currentSentence}
          </Typography>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
