import { Box, Grid, Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            sx={{
              width: '100%', // Full width
              maxWidth: 400, // Max width
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome to Our React App
            </Typography>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingPage;
