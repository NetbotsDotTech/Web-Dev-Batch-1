import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Shop from './components/Shop';
import ProductDetail from './ProductDetial';
import ShippingForm from './components/ShippingForm';
import Footer from './components/Footer';
import MenShoes from './components/Menshoes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop/men" element={<MenShoes />} />
        
        <Route path="/checkout/:id" element={<ShippingForm />} />



      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
