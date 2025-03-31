import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/SignUp';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';
import Service from './components/Service';
import ContactPage from './components/ContactPage';
import AboutUsPage from './components/AboutUsPage';
import Checkout from './components/checkOut/Checkout';
import Serarch from './components/Serarch';
import CustomerDashboard from './customerDashboard/CustomerDashboard';




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path='/service/product/cart' element={<CartPage />} />
        <Route path='/service/product/:id/Cart' element={<CartPage />} />
        <Route path="/service/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Serarch />} />
        <Route path="/profile" element={<CustomerDashboard />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
