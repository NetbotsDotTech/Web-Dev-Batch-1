import React from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button,
  InputBase, Badge, Select, FormControl, Box
} from '@mui/material';
import {
  Search, ShoppingCart, Favorite, AccountCircle,
  Notifications, Language, AccessibilityNew
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
  const [language, setLanguage] = React.useState('en');
  const [currency, setCurrency] = React.useState('USD');
  const navigate = useNavigate(); // Hook for navigation

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleNavigation = (path) => {
    navigate(path); // Function to navigate to different paths
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
          ShopLogo
        </Typography>

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
          <Button color="inherit" onClick={() => handleNavigation('/table')}>Table</Button>

         

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

        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
          <Select value={language} onChange={handleLanguageChange} displayEmpty inputProps={{ 'aria-label': 'Language Selector' }}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ur">Urdu</MenuItem>
            <MenuItem value="bl">Balti</MenuItem>
            <MenuItem value="bl">Shina</MenuItem>

          </Select>
        </FormControl>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
          <Select value={currency} onChange={handleCurrencyChange} displayEmpty inputProps={{ 'aria-label': 'Currency Selector' }}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="PKR">PKR</MenuItem>
          </Select>
        </FormControl>

        <IconButton size="large" color="inherit">
          <AccessibilityNew />
        </IconButton>
      </Toolbar>

      <Box sx={{ backgroundColor: 'secondary.main', p: 1 }}>
        <Typography variant="body1" align="center">
          Free Shipping on orders over 50pkr!
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Header;
