import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LadingPage';
import BookingPage from './pages/BookingPage';
import ServicesPage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutUs from './pages/AboutPage';
import LoginPage from './pages/Loginpage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The login page will not have Header and Footer */}
        <Route path="/" element={<LoginPage />} />
        
        {/* For all other pages, include Header and Footer */}
        <Route path="/landing" element={<><Header /><LandingPage /><Footer /></>} />
        <Route path="/booking" element={<><Header /><BookingPage /><Footer /></>} />
        <Route path="/services" element={<><Header /><ServicesPage /><Footer /></>} />
        <Route path="/contact" element={<><Header /><ContactPage /><Footer /></>} />
        <Route path="/about" element={<><Header /><AboutUs /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;
