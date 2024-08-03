import React from 'react';
import { Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f1f1f1', padding: '20px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">About Us</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">Contact Us</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div>
              <Link href="#" color="inherit">
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit">
                <InstagramIcon />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2">
              Subscribe to our newsletter for the latest updates.
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
              <Button variant="contained" color="primary" type="submit">
                Subscribe
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
