import React from 'react';
import { Grid, Typography, Link, IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../css/footerCss.css"
import  WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#17202a', p: 4, mt: 4 ,color:"#ecf0f1" }}>
      <Grid container spacing={4}>
        {/* Help Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom >
            Help
          </Typography>
          <Typography variant="body1">+92 3475495500</Typography>
          <Typography variant="body1">+92 3554214164 (Text)</Typography>
          <Typography variant="body1">
            <Link id="textDecoration"   href="mailto:help@allbirds.com" color="inherit">
              Apoali911@gamil.com
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Returns/Exchanges
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              FAQ/Contact Us
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Afterpay
            </Link>
          </Typography>
        </Grid>

        {/* Shop Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Shop
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Men's Shoes
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Women's Shoes
            </Link>
          </Typography>
          
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Our Stores
            </Link>
          </Typography>
          
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Our Materials
            </Link>
          </Typography>
        
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Investors
            </Link>
          </Typography>
         

        </Grid>

        {/* Additional Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            AllBasit's Responsible Disclosure Program
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Pakistan Transparency Act
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Community Offers
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Our Blog - The Perch
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link id="textDecoration"  href="#" color="inherit">
              Follow the Flock
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Exclusive offers, a heads up on new things, and sightings of AllBasit's in the wild. Oh, we have cute sheep, too. #allbasit
          </Typography>
        </Grid>
      </Grid>

      {/* Social Icons */}
      <Box sx={{display: 'flex', justifyContent: 'center', mt: 4 }}>
      <IconButton sx={{color:"#ecf0f1"}} aria-label="Instagram" href="https://www.whatsapp.com" target='_blank'>
          <WhatsAppIcon/>
        </IconButton>
        <IconButton sx={{color:"#ecf0f1"}} aria-label="Instagram" href="https://www.instagram.com" target='_blank'>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{color:"#ecf0f1"}} aria-label="Facebook" href="https://www.facebook.com" target='_blank'>
          <FacebookIcon />
        </IconButton>
      </Box>

      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">
          © 2024 Allbasit, Inc. All Rights Reserved.{' '}
          <Link  id="textDecoration" href="#" color="inherit">
            Terms
          </Link>,{' '}
          <Link href="#" color="inherit">
            Privacy
          </Link> &{' '}
          <Link id="textDecoration"  href="#" color="inherit">
            Accessibility
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <Link id="textDecoration"  href="#" color="inherit">
            Do Not Sell My Personal Information
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
