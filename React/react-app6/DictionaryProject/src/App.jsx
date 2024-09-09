import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Dictionary from './components/Dictionary';
import Translate from './components/Translate';
import Grammar from './components/Grammar';
import Thesaurus from './components/Thesaurus';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dictionary />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/thesaurus" element={<Thesaurus />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
