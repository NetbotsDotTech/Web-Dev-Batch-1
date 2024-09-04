import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Shop from './components/Shop';
import BuyNowForm from './components/BuyNowForm';
import {AdvancedTable} from './components/AdvancedTable';
import ProductDetail from './ProductDetial';
import ShippingForm from './components/ShippingForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/table" element={<AdvancedTable/>} />
        <Route path="/Buy" element={<BuyNowForm/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<ShippingForm />} />



      </Routes>
    </Router>
  );
};

export default App;
