import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import AboutUs from './Components/AboutUs';
import ContactUs from './Contactus';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
