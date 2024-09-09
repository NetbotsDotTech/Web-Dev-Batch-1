import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Last Name"
          name="lastName"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
      </form>
    </Container>
  );
};

export default RegistrationForm;
