import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button,Link } from '@mui/material';
import Slider from 'react-slick';
import '../css/CategoryCard.css';
import { useNavigate } from 'react-router-dom';

// Import images
import image1 from '../assets/image/box1/shoes1.avif';
import image2 from '../assets/image/box1/shoes2.avif';
import image3 from '../assets/image/box1/shoes3.avif';
import image4 from '../assets/image/boximage.avif';
import image5 from '../assets/image/box3/shoes1.avif';
import image6 from '../assets/image/box3/shoes2.avif';
import image7 from '../assets/image/box3/shoes3.avif';
import image8 from '../assets/image/box3/shoes4.avif';
import image9 from '../assets/image/box3/shoes5.avif';
import image10 from '../assets/image/box3/shoes6.avif';
import image11 from '../assets/image/box4/shoes1.avif';
import image12 from '../assets/image/box4/shoes2.avif';
import image13 from '../assets/image/box4/shoes3.avif';
import image14 from '../assets/image/box4/shoes4.avif';
import image15 from '../assets/image/box4/shoes5.avif';
import image16 from '../assets/image/box5/shoes1.avif';
import image17 from '../assets/image/box5/shoes2.avif';
import image18 from '../assets/image/box5/shoes3.avif';
import image19 from '../assets/image/box5/shoes4.avif';
import image20 from '../assets/image/box5/shoes5.avif';
import image21 from '../assets/image/box5/shoes6.avif';
import image22 from '../assets/image/box5/shoes7.avif';
import image23 from '../assets/image/box5/shoes8.avif';
import image24 from '../assets/image/box5/shoes9.avif';



const categories = [
  {
    title: 'Tree Runner Go',
    image: image1,
    price: 3500,
    rating: 4.5,
    type: 'Men',
  },
  {
    title: 'Sneakers',
    image: image2,
    price: 4200,
    rating: 4.3,
    type: 'Women',
  },
  {
    title: 'Running Shoes',
    image: image3,
    price: 2900,
    rating: 4.0,
    type: 'Kids',
  },
  {
    title: 'High Heels',
    image: image4,
    price: 5000,
    rating: 4.7,
    type: 'Women',
  },
  {
    title: "Men's Breathable Shoes",
    image: image5,

  },
  {
    title: "Women Breezy Styles",
    image: image6
  },
  {
    title: "Men's Sporty Styles",
    image: image7
  },
  {
    title: "Women's Athleisure Styles",
    image: image8
  },
  {
    title: "Men's Lightweight Styles",
    image: image9
  },
  {
    title: "Women's Packable Shoes",
    image: image10
  },
  {
    title: "Wool Piper Go",
    image: image12,
    price:420
  },
  {
    title: "Wool Piper Go",
    image: image13,
    price:900
  },
  {
    title: "Wool Piper Go",
    image: image14,
    price:640
  },
  {
    title: "Wool Piper Go",
    image: image15,
    price:1290
  },
  {
    title: "Medium Grey",
    image: image16
  },  {
    title: "Basin Pink",
    image: image17
  },  {
    title: "Thunder Red",
    image: image18
  },  {
    title: "Blizzard",
    image: image19
  },  {
    title: "Navy-Night",
    image: image20
  },  {
    title: "Kaikoura White",
    image: image21
  },  {
    title: "Blizzard Black",
    image: image22
  },  {
    title: "Moonrise",
    image: image23
  },  {
    title: "Mist",
    image: image24
  },  
  // Add more categories as needed
];


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
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CategoryCards = () => {
  const navigate=useNavigate()
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
            <CardContent sx={{ textAlign: 'center' ,position:"absolute", bottom:360,left:100}}>
              <Typography variant="h5" >{category.title}</Typography>
              <Typography variant="body2">Price:  {category.price} pk</Typography>
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
              <Button sx={{ backgroundColor: 'white', color: 'black' }} onClick={()=>navigate('/Service')}>Shop Now</Button>
              
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
    {categories.slice(4, 10).map((category) => (
      <Card
        key={category.title}
        sx={{
          mx: 2,
          height: 600,
          width: 100,
          position: 'relative',
          '&:hover .card-text': { opacity: 1 },
        
          
        }}
        
      >
        <CardMedia
          component="img"
          image={category.image}
          alt={category.title}
          sx={{ height: '100%' }}
          
        />
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
          <Typography variant="h5">
            {category.title}
          </Typography>
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
        backgroundImage: `url(${image11})`,
        height: 500,
        position: 'relative',
        '&:hover .content': { display: 'flex' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Hover Content */}
      <Box
        className="content"
        sx={{
          display: 'none',
          position: 'absolute',
          bottom: 40, // Adjusted position near the bottom
          left: 0,
          right: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 2,
          padding: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          Classic, Remixed
        </Typography>
        <Typography variant="body2" sx={{ color: 'white', marginBottom: 2 }}>
          Meet the new Wool Piper Go—timeless design meets nature-made comfort.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Button sx={{ backgroundColor: 'white', color: 'black' }} onClick={()=>navigate('/Service')}>Shop Now</Button>
        </Box>
      </Box>
    </Box>
  </Grid>

  {/* Second column with 4 boxes */}
  <Grid item xs={6}>
    <Grid container spacing={2}>
      {categories.slice(10, 14).map((category) => (
        <Grid item xs={6} key={category.title}>
          <Card
            sx={{
              height: 240,
              position: 'relative',
              backgroundColor: '#f5f5f5',
              '&:hover': {
                backgroundColor: '#333', // Darkish background color on hover
              },
              '&:hover .buttons': { display: 'flex' },
            }}
          >
            <CardMedia
              component="img"
              image={category.image}
              alt={category.title}
              sx={{ height: '100%', opacity: 0.9 }} // Slight transparency effect
            />
            <CardContent
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                padding: '8px',
                color: 'white',
              }}
            >
              {/* Shoe name aligned to the left bottom */}
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {category.title}
              </Typography>

              {/* Price aligned to the right bottom */}
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                PKR {category.price}
              </Typography>
            </CardContent>

            {/* Hover Buttons */}
            <Box
              className="buttons"
              sx={{
                display: 'none',
                position: 'absolute',
                bottom: 110,
                left: 10,
                right: 10,
                justifyContent: 'center',
                gap: 2,
              }}
            >
             <Button sx={{ backgroundColor: 'white', color: 'black' }} onClick={()=>navigate('/Service')}>Shop Now</Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Grid>
</Grid>


   

      {/* Additional Section - "More to Shop" */}
      <Box sx={{ my: 1, textAlign: 'right' }}>
        <Typography variant="h5" sx={{ mb: 1,textAlign: 'left',position:"relative",top:40 ,mx:5,fontWeight:"bold" }}>
          More to Shop
        </Typography>
        <Link sx={{ mx: 1,fontSize:25, fontFamily:"sans-serif", fontWeight:"bold",color:"#333" , textDecoration:"none" ,cursor:"pointer"}} >
          Men
        </Link>
        <Link sx={{ mx: 3,fontSize:25, fontFamily:"sans-serif", fontWeight:"bold",color:"#333" , textDecoration:"none" ,cursor:"pointer"}}>
         Women
        </Link>
      </Box>

      {/* Sixth Box - Carousel with Twelve Cards */}
      <Box sx={{ my: 4 }}>
        <Slider {...sliderSettings} slidesToShow={4} slidesToScroll={1}>
          {categories.slice(14, 23).map((category) => (
            <Card
              key={category.title}
              sx={{
                mx: 2,
                height: 250,
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
                <Typography variant="h4">{category.title}</Typography> 
                

              </Box>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CategoryCards;
