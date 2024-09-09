import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link,NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';

// Sample logo image URL (you can replace this with the actual logo image URL)
const logoUrl = 'https://img.freepik.com/free-vector/organic-food-supermarket-logo_23-2148455876.jpg?size=626&ext=jpg';

const Header = () => {
  return (
    <AppBar position="sticky" sx={{background:"#000000"}}>
      <Toolbar>
        <Link to="/">
          <img src={logoUrl} alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
        </Link>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
          <Link to="/services" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Services</Link>
          <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>Contact Us</Link>
          <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '20px' }}>About Us</Link>
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                  <NavLink to="/productList"/> <NavLink/>
                </IconButton>
              </InputAdornment>
            ),
          }}
          style={{ marginRight: '20px' }}
        />
        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
