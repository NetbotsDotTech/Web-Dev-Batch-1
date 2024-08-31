import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NatureIcon from '@mui/icons-material/Nature';

const FlipCardContainer = styled(Box)({
  perspective: '1000px',
  width: '300px',
  height: '400px',
  margin: '50px auto',
});

const FlipCardInner = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
});

const FlipCardFront = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  backgroundColor: '#bbb',
  color: 'black',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url(https://source.unsplash.com/random/300x400?nature)',
  backgroundSize: 'cover',
});

const FlipCardBack = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
  backgroundColor: '#2980b9',
  color: 'white',
  transform: 'rotateY(180deg)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const FlipCard = () => {
  return (
    <Container>
      <FlipCardContainer>
        <FlipCardInner>
          <FlipCardFront>
            <NatureIcon style={{ fontSize: '4rem', color: '#fff' }} />
            <Typography variant="h4" component="div">
              Nature
            </Typography>
          </FlipCardFront>
          <FlipCardBack>
            <Typography variant="h6" component="div" gutterBottom>
              Nature
            </Typography>
            <Typography variant="body1">
              Nature, in the broadest sense, is the natural, physical, material world or universe.
            </Typography>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCardContainer>
    </Container>
  );
};

export default FlipCard;
