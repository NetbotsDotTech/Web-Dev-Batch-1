// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import PlaceDetail from './components/PlaceDetails';

const App = () => (
  <Router>
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ZBS Company
        </Typography>
        {['/', '/login', '/registration', '/about'].map((path, index) => (
          <Button key={index} color="inherit" component={Link} to={path}>
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/place/:placeTitle" element={<PlaceDetail />} />
      </Routes>
    </Container>
    <Footer />
  </Router>
);

export default App;
