import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Drawer, List, ListItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { AccountCircle, Menu as MenuIcon, Home, Work, Info, ContactMail, ExitToApp } from '@mui/icons-material'; // Import icons including ExitToApp for logout
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control mobile drawer
  const navigate = useNavigate();

  // Function to handle the opening of the profile menu
  const handleProfileMenuOpen = (e) => {
    setAnchorElProfile(e.currentTarget);
  };

  // Function to handle the closing of the profile menu
  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear the user details from localStorage
    localStorage.removeItem('userDetails');

    // Redirect to the login page
    navigate('/');
  };

  // Function to toggle the drawer on mobile
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Function to handle closing the drawer after navigation
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false); // Close the drawer after navigation
  };

  // Menu items for the mobile drawer
  const menuItems = [
    { text: 'Home', path: '/landing', icon: <Home /> },
    { text: 'Service', path: '/services', icon: <Work /> },
    { text: 'About', path: '/about', icon: <Info /> },
    { text: 'Contact', path: '/contact', icon: <ContactMail /> }
  ];

  return (
    <AppBar position="fixed" width="100%">
      <Toolbar sx={{ bgcolor: '#17a589', paddingLeft: 2, paddingRight: 2 }}>
        {/* Logo */}
        <Box
          component="img"
          sx={{
            height: 50,
            display: { xs: 'inline', sm: 'block' },
            marginLeft: 'auto',
            marginRight: 'auto',
            cursor: 'pointer',
            borderRadius: '30%',
          }}
          onClick={() => navigate('/landing')}
          alt="Logo"
          src={logo}
        />
        
        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, marginLeft: 'auto' }}>
          <IconButton sx={{ color: 'white' }} onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'flex' },  // Hide links on small screens, show on medium and larger
            justifyContent: 'center',
            gap: 3,  // Adjust gap for better spacing
          }}
        >
          <Link
            to="/landing"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#1abc9c' }, // Adding hover effect
            }}
          >
            Home
          </Link>
          <Link
            to="/services"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#1abc9c' },
            }}
          >
            Service
          </Link>
          <Link
            to="/about"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#1abc9c' },
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              fontSize: '18px',
              textDecoration: 'none',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#1abc9c' },
            }}
          >
            Contact
          </Link>
        </Box>

        {/* Profile Icon (Hidden on mobile, visible on desktop) */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <IconButton
            sx={{ color: 'white' }}
            size="large"
            aria-label="Account of current user"
            title="Account Icon"
            edge="end"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#17a589', // Change the background color for the drawer
            color: 'white',  // Change text color to white
            boxSizing: 'border-box',
            paddingTop: 2,
            transition: 'all 0.3s ease', // Smooth transition when opening/closing the drawer
          },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => handleNavigation(item.path)}>
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon} {/* Render the icon */}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <Divider sx={{ borderColor: '#fff', marginTop: 2 }} />
          <ListItem button onClick={handleLogout}>
            <ListItemIcon sx={{ color: 'white' }}>
              <ExitToApp /> {/* Logout Icon */}
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
