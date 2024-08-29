import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Shop from './components/Shop';
import BuyNowForm from './components/BuyNowForm';
import {AdvancedTable} from './components/AdvancedTable';
import ProductDetail from './ProductDetial';
import Checkout from './components/Checkout';
import OrderSummary from './components/Ordersummery';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/table" element={<AdvancedTable/>} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/order-summary" element={<OrderSummary />} />
             <Route path="/Buy" element={<BuyNowForm/>} />
        <Route path="/product/:id" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
};

export default App;
