import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

const AboutUs = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <StoreIcon color="primary" fontSize="large" />
        </Box>
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to ZBS Dry Fruit, your number one source for all kinds of dry fruits. We're dedicated to giving you the very best of dried fruits, with a focus on quality, customer service, and uniqueness.
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2023 by ZBS, ZBS Dry Fruit has come a long way from its beginnings in a small store in Karachi, Pakistan. When ZBS first started out, the passion for providing high-quality dry fruits drove the company to do intense research and gave the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over Pakistan and are thrilled to be a part of the fair trade wing of the dried fruit industry.
        </Typography>
        <Typography variant="body1" paragraph>
          We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
        </Typography>
        <Typography variant="body1" paragraph>
          Sincerely,
        </Typography>
        <Typography variant="body1" paragraph>
          ZBS, Founder of ZBS Dry Fruit
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
