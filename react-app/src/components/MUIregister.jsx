import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';

const AnimatedButton = styled(Button)`
  background-color: #1877f2;
  color: white;
  transition: all 0.3s ease;
  &:hover {
    background-color: #166fe5;
    transform: scale(1.05);
  }
`;

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          bgcolor: '#f0f2f5',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          maxHeight: '90vh',
          overflowY: 'none',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#1877f2', fontWeight: 'bold' }}>
          Register
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{color:'green'}}>
          It's quick and easy.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="filled"
              color="success"
              focused
              varient="filled"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="filled"
              color="success"
              focused
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="filled"
              color="success"
              focused
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              variant="filled"
              color="success"
              focused
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="filled"
              color="success"
              focused
                required
                fullWidth
                name="birthday"
                label="Birthday"
                type="date"
                id="birthday"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.birthday}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="filled"
              color="success"
              focused
                required
                fullWidth
                select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
              >
                <option value=""></option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </TextField>
            </Grid>
          </Grid>
          <AnimatedButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </AnimatedButton>
          <AnimatedButton
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 ,ml: 40}}
          >
             SinUp
          </AnimatedButton>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
