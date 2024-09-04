import React, { useState, useEffect } from 'react';
import logo from '../image/logo.png'
import {
  AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button,
  InputBase, Badge, Box
} from '@mui/material';
import {
  Search, ShoppingCart, Favorite, AccountCircle,
  Notifications, AccessibilityNew
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleNavigation = (path) => {
    navigate(path); // Function to navigate to different paths
  };

  // Array of dynamic sentences
  const sentences = [
    'Free Shipping on orders over 50pkr!',
    'Exclusive offers available now!',
    'Get 20% off your first purchase!'
  ];

  const [currentSentence, setCurrentSentence] = useState(sentences[0]);

  // Effect to change sentence every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prevSentence) => {
        const currentIndex = sentences.indexOf(prevSentence);
        const nextIndex = (currentIndex + 1) % sentences.length;
        return sentences[nextIndex];
      });
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [sentences]);

  return (
    <AppBar position="static">
      <Toolbar>
        
      <Box
          component="img"
          sx={{
            height: 64, // Adjust as necessary
            display: { xs: 'none', sm: 'block' }, // Hides on smaller screens
          }}
          alt="Shop Logo"
          src={logo} // Use the imported logo
        />


        <SearchBar>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </SearchBar>

        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" onClick={() => handleNavigation('/')}>Home</Button>
          <Button color="inherit" onClick={() => handleNavigation('/shop')}>Shop</Button> {/* Navigates to /shop */}
          <Button color="inherit" onClick={() => handleNavigation('/Buy')}>Buy Now</Button>
          <Button color="inherit" onClick={() => handleNavigation('/about')}>About Us</Button>
          <Button color="inherit" onClick={() => handleNavigation('/contact')}>Contact Us</Button>
        </Box>

        <IconButton size="large" edge="end" color="inherit" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>

        <IconButton size="large" aria-label="show 7 new notifications" color="inherit">
          <Badge badgeContent={7} color="error">
            <Favorite />
          </Badge>
        </IconButton>

        <IconButton size="large" aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="error">
            <Notifications />
          </Badge>
        </IconButton>

        <IconButton size="large" color="inherit">
          <AccessibilityNew />
        </IconButton>
      </Toolbar>

      {/* Dynamically changing sentence section */}
      <Box sx={{ backgroundColor: 'secondary.main', p: 1 }}>
        <Typography variant="body1" align="center">
          {currentSentence} {/* Dynamically updated sentence */}
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
