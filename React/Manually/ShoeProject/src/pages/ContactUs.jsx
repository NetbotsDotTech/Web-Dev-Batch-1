import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Have questions? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Full Name" variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Email Address" variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Subject" variant="outlined" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactUs;
