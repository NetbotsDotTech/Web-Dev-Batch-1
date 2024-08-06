import React from 'react';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <ContactMailIcon color="primary" fontSize="large" />
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We would love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            sx={{ marginBottom: 2 }}
          />
          <Box display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactUs;
