import React from 'react';
import Weather from './Weather';
import { CssBaseline, Container, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
  },
});

function AppWeather() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Weather />
      </Container>
    </ThemeProvider>
  );
}

export default AppWeather;
