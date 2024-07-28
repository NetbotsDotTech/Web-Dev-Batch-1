import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pexels Clone
        </Typography>
        <InputBase
          placeholder="Search..."
          startAdornment={<SearchIcon />}
          sx={{ ml: 1, flex: 1 }}
        />
        {/* Other links and button */}
        <Button variant="contained">Upload</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
