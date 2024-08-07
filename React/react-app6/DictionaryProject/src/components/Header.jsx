import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            MyDictionary
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Dictionary</Button>
          <Button color="inherit" component={Link} to="/translate">Translate</Button>
          <Button color="inherit" component={Link} to="/grammar">Grammar</Button>
          <Button color="inherit" component={Link} to="/thesaurus">Thesaurus</Button>
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
