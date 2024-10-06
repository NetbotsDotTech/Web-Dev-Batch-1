import React from 'react';
import Slider from 'react-slick'; // Importing Slider from react-slick
import './Slider.css';
import sliderImage from '../../../assets/images/slider/main1.png'
import sliderImage2 from '../../../assets/images/slider/main2.jpg'
import { Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true
  };
  return (
    <section className="homeSlider">
      <div className="container-fluid position-relative ">
      <Slider {...settings} className='home_slider_main'>
   
   <div className="item">
     <img src={sliderImage} className='w-100' />
     <div className="info">
    <h2 className='mb-4'>Fresh Vegetables <br /> Big discount</h2>
    <p>Sign up for daily newsletters</p>
   </div>
   </div>
   <div className="item">
     <img src={sliderImage2} className='w-100 ' height={400} />
       <div className="info">
    <h2 className='mb-4'>Don't miss amazing <br /> grocery deals</h2>
    <p>Save up to 50% off  on your first order </p>

   </div>
   </div>
 


</Slider>
    <div className="newsletter">
      <SendOutlinedIcon/>
      <input type="text"  placeholder='Your Email Address'/>
      <Button className='bg-success'>Subscribe</Button>
    </div>
      </div>
    </section>
  );
}