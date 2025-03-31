import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = ({ isCollapsed }) => (
  <AppBar
    sx={{
      width: isCollapsed ? 'calc(100% - 90px)' : 'calc(100% - 190px)',
      transition: 'width 0.3s',
      backgroundColor: '#1976d2',  // Matching blue color
    }}
    color="primary"
  >
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
      @llBasit Shoe Store 
      </Typography>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
