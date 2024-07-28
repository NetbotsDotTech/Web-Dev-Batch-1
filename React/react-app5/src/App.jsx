import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header';
import ImageCategory from './components/ImageCategory';
import Footer from './components/Footer';

function App() {
  const theme = createTheme({
    // Your custom theme if needed
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ImageCategory category="People" />
      <ImageCategory category="Books" />
      <ImageCategory category="Animals" />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
