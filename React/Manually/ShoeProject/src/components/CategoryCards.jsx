import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import Slider from 'react-slick';
import '../css/CategoryCard.css';

// Import images
import image1 from '../assets/image/shoes1.avif';
import image2 from '../assets/image/shoes5.avif';
import image3 from '../assets/image/shoe3.avif';
import image4 from '../assets/image/boximage.avif';
import image5 from '../assets/image/box3/box31.avif'
import image6 from '../assets/image/box3/box32.avif'
import image7 from '../assets/image/box3/box33.avif'
import image8 from '../assets/image/box3/box34.avif'




const generateRandomPrice = () => Math.floor(Math.random() * 5000) + 1000;
const generateRandomRating = () => (Math.random() * 4 + 1).toFixed(1);

const categories = Array.from({ length: 50 }, (_, index) => ({
  title: `Shoe ${index + 1}`,
  image: index % 4 === 0 ? image1 :
         index % 4 === 1 ? image2 :
         index % 4 === 2 ? image3 : 
         index % 4 === 3 ? image4 :
         index % 4 === 4 ? image5 :
         index % 4 === 5 ? image6 :
         index % 4 === 6 ? image7 :
         index % 4 === 7 ? image8 : "",
  price: generateRandomPrice(),
  rating: generateRandomRating(),
  type: index % 3 === 0 ? 'Men' : index % 3 === 1 ? 'Women' : 'Kids'
}));

// Custom arrows
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...arrowStyle,
        right: 10,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      &#8250;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...arrowStyle,
        left: 10,
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      &#8249;
    </div>
  );
};

// Arrow style
const arrowStyle = {
  width: 30,
  height: 30,
  background: '#fff',
  borderRadius: '50%',
  lineHeight: '30px',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'absolute',
  zIndex: 1000, // Ensure it's above other elements
};

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CategoryCards = () => {
  return (
    <Box>
      {/* First Box - Three large cards */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 4, mx: 3 }}>
        {categories.slice(0, 3).map((category) => (
          <Card
            key={category.title}
            sx={{
              width: '32%',
              height: 450,
              position: 'relative',
              '&:hover .buttons': { display: 'flex' },
              margin: '0 1%',
            }}
          >
            <CardMedia component="img" image={category.image} alt={category.title} sx={{ height: '100%' ,textAlign:"center" }} />
            <CardContent sx={{ textAlign: 'center' ,position:"absolute", bottom:350,left:100}}>
              <Typography variant="h4" >{category.title}</Typography>
              <Typography variant="h6">Price: PKR {category.price}</Typography>
            </CardContent>
            {/* Hover Buttons */}
            <Box
              className="buttons"
              sx={{
                display: 'none',
                position: 'absolute', 
                bottom: 10,
                left: 0,
                right: 0,
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button sx={{ backgroundColor: 'white', color: 'black' }} >Shop Men</Button>
              <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Women</Button>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Second Box - Text with Background */}
      <Box
        sx={{
          my: 6,
          py: 10,
          textAlign: 'center',
          backgroundImage: `url(${image4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h3" sx={{ mb: 4 }}>
          We Make Better Things In A Better Way
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.
        </Typography>
        <Typography variant="h5" sx={{ mt: 6 ,fontFamily:"sans-serif"}}>
          allbasit collection <br/> <Typography variant='body1'> By Nature</Typography>
        </Typography>
      </Box>

      {/* Third Box - Carousel with Six Cards */}
      <Box sx={{ my: 4 }}>
        <Slider {...sliderSettings}>
          {categories.slice(0, 6).map((category) => (
            <Card
              key={category.title}
              sx={{
                mx: 2,
                height: 600,
                width:100,
                position: 'relative',
                '&:hover .card-text': { opacity: 1 },
              }}
            >
              <CardMedia component="img" image={category.image} alt={category.title} sx={{ height: '100%' }} />
              <Box
                className="card-text"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  opacity: 0,
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  transition: 'opacity 0.3s',
                  padding: 2,
                }}
              >
                <Typography variant="h5">Men's Breathable Shoes</Typography>
              </Box>
            </Card>
          ))}
        </Slider>
      </Box>

      {/* Fourth Box - Two Columns */}
      <Grid container spacing={4}>
        {/* First column with background image */}
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundImage: `url(${image1})`,
              height: 400,
              position: 'relative',
              '&:hover .buttons': { display: 'flex' },
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Typography variant="h6" sx={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
              Shoe Name
            </Typography>
            {/* Hover Buttons */}
            <Box
              className="buttons"
              sx={{
                display: 'none',
                position: 'absolute',
                bottom: 20,
                left: 10,
                gap: 2,
              }}
            >
              <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Men</Button>
              <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Women</Button>
            </Box>
          </Box>
        </Grid>
        {/* Second column with 4 boxes */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {categories.slice(0, 4).map((category) => (
              <Grid item xs={6} key={category.title}>
                <Card
                  sx={{
                    height: 180,
                    position: 'relative',
                    '&:hover .buttons': { display: 'flex' },
                  }}
                >
                  <CardMedia component="img" image={category.image} alt={category.title} sx={{ height: '80%' }} />
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body1">{category.title}</Typography>
                    <Typography variant="body2">Price: PKR {category.price}</Typography>
                  </CardContent>
                  {/* Hover Buttons */}
                  <Box
                    className="buttons"
                    sx={{
                      display: 'none',
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                      gap: 2,
                    }}
                  >
                    <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Men</Button>
                    <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Women</Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Fifth Box - Two Columns */}
      <Grid container spacing={4} sx={{ my: 4 }}>
        {/* First column with background image */}
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundImage: `url(${image1})`,
              height: 400,
              position: 'relative',
              '&:hover .buttons': { display: 'flex' },
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Typography variant="h6" sx={{ position: 'absolute', bottom: 10, left: 10, color: 'white' }}>
              Shoe Name
            </Typography>
            {/* Hover Buttons */}
            <Box
              className="buttons"
              sx={{
                display: 'none',
                position: 'absolute',
                bottom: 20,
                left: 10,
                gap: 2,
              }}
            >
              <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Men</Button>
              <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Women</Button>
            </Box>
          </Box>
        </Grid>
        {/* Second column with 4 boxes */}
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {categories.slice(4, 8).map((category) => (
              <Grid item xs={6} key={category.title}>
                <Card
                  sx={{
                    height: 180,
                    position: 'relative',
                    '&:hover .buttons': { display: 'flex' },
                  }}
                >
                  <CardMedia component="img" image={category.image} alt={category.title} sx={{ height: '80%' }} />
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="body1">{category.title}</Typography>
                    <Typography variant="body2">Price: PKR {category.price}</Typography>
                  </CardContent>
                  {/* Hover Buttons */}
                  <Box
                    className="buttons"
                    sx={{
                      display: 'none',
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                      gap: 2,
                    }}
                  >
                    <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Men</Button>
                    <Button sx={{ backgroundColor: 'white', color: 'black' }}>Shop Women</Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Additional Section - "More to Shop" */}
      <Box sx={{ my: 6, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          More to Shop
        </Typography>
        <Button variant="outlined" sx={{ mx: 1 }}>
          New Arrivals
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          Best Sellers
        </Button>
      </Box>

      {/* Sixth Box - Carousel with Twelve Cards */}
      <Box sx={{ my: 4 }}>
        <Slider {...sliderSettings} slidesToShow={4} slidesToScroll={1}>
          {categories.slice(0, 12).map((category) => (
            <Card
              key={category.title}
              sx={{
                mx: 2,
                height: 250,
                position: 'relative',
                '&:hover .card-text': { opacity: 1 },
              }}
            >
              <CardMedia component="img" image={category.image} alt={category.title} sx={{ height: '80%' }} />
              <Box
                className="card-text"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  opacity: 0,
                  color: 'white',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  transition: 'opacity 0.3s',
                  padding: 2,
                }}
              >
                <Typography variant="body1">Shoe Description here</Typography>
              </Box>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CategoryCards;
