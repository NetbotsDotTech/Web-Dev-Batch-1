import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button, Box } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as CartIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
          Shoe Collection
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            placeholder="Search..."
            sx={{
              background: '#fff',
              borderRadius: 1,
              padding: '0 10px',
              marginRight: 2,
              minWidth: '300px',
            }}
            startAdornment={<SearchIcon sx={{ marginRight: 1 }} />}
          />
          <Button component={Link} to="/shop" sx={{ color: 'white' }}>Shop</Button>
          <Button component={Link} to="/about-us" sx={{ color: 'white' }}>About Us</Button>
          <Button component={Link} to="/contact-us" sx={{ color: 'white' }}>Contact Us</Button>
          <IconButton component={Link} to="/cart" color="inherit">
            <CartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
