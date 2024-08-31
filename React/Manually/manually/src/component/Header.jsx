import React, { useState } from 'react';
import './Header.css'; // Import the CSS file for styling   &gt;

const Header = () => {
  const messages = [
    'Welcome to our Store',
    ' Free Delivery Nationwide for orders above PKR 3000/-',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <>
      <div className="promo-banner">
        <div className="text-container">
          <p>{messages[currentIndex]}</p>
        </div>
        <button className="arrow-button" onClick={handleNext} style={{color:"red", margin:5}}>
          &gt;
        </button>
      </div>
      <header className="app-bar">
        <div className="toolbar">
          <div className="nav-left">
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#kids">Kids</a>
            <a href="#socks">Socks</a>
          </div>
          <div className="logo">
            <h1>allbirds</h1>
          </div>
          <div className="nav-right">
            <a href="#sustainability">Sustainability</a>
            <a href="#rerun">ReRun</a>
            <a href="#stores">Stores</a>
            <a href="#search" className="icon">🔍</a>
            <a href="#user" className="icon">👤</a>
            <a href="#help" className="icon">❓</a>
            <a href="#shipping" className="icon">🚚</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
