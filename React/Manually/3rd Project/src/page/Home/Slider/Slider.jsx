import React from 'react';
import Slider from 'react-slick'; // Importing Slider from react-slick
import './Slider.css';
import sliderImage from '../../../assets/images/slider/slider2.jpeg'

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true
  };

  return (
    <section className='homeSlider'>
      <div className="container-fluid">
        <Slider {...settings} className='home_slider_main'>
            <div className="item">
              <img src={sliderImage} className='w-25'/>
                
            </div>
            <div className="item">
              <img src={sliderImage} className='w-25'/>
                
            </div>
            <div className="item">
              <img src={sliderImage} className='w-25'/>
                
            </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeSlider;
