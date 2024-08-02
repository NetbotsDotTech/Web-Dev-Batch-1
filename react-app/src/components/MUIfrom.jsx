import React from 'react';
import { TextField, Button, Typography, Link, Box, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const Login_Form = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 3,
            borderRadius: 2,
            boxShadow: 10,
            textAlign: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', color: '#FFC107' }}>
            Welcome Back
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Please sign-in to continue!
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Link href="#" variant="body2" sx={{ display: 'block', textAlign: 'right', mb: 2 }}>
              Forgot your password?
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#FFC107', '&:hover': { backgroundColor: '#FFA000' } }}
            >
              Signin
            </Button>
            <Typography variant="body2" color="textSecondary">
              Don't have an account? <Link href="#">Signup</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login_Form;
