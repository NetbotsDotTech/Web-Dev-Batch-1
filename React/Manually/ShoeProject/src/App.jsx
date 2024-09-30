import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Ensure this path is correct
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/SignUp';
import MenShoes from './components/Menshoes';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define routes that point to existing components */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/men" element={<MenShoes />} />



        



      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
