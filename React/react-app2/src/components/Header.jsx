import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import { Search, Home, Build, Info, Contacts } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Shoe Collection
          </Link>
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Home />
          </IconButton>
        </Link>
        <Link to="/service" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Build />
          </IconButton>
        </Link>
        <Link to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Info />
          </IconButton>
        </Link>
        <Link to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Contacts />
          </IconButton>
        </Link>
        <SearchBar>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </SearchBar>
        {/* Remove the PakistanFlag component if not used */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
