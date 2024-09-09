import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import Hotel from './components/Hotel';
import Footer from './components/Footer';

function App() {
  const hotelName = "Mountain View Hotel";
  const address = "123 Scenic Road, Gilgit-Baltistan";
  const roomData = [
    { id: 1, type: "Single", price: 100, image: "/images/single-room.jpg" },
    { id: 2, type: "Double", price: 150, image: "/images/double-room.jpg" },
  ];
  const amenities = [
    { id: 1, name: "Free WiFi", icon: "/images/wifi-icon.jpg" },
    { id: 2, name: "Breakfast Included", icon: "/images/breakfast-icon.jpg" },
    { id: 3, name: "Swimming Pool", icon: "/images/pool-icon.jpg" },
  ];

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Hotel name={hotelName} address={address} roomData={roomData} amenities={amenities} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
