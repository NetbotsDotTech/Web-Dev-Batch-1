import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Shop from './components/Shop';
import BuyNowForm from './components/BuyNowForm';
import {AdvancedTable} from './components/AdvancedTable';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/table" element={<AdvancedTable/>} />
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/contact-us" element={<div>Contact Us Page</div>} />
        <Route path="/Buy" element={<BuyNowForm/>} />

      </Routes>
    </Router>
  );
};

export default App;
