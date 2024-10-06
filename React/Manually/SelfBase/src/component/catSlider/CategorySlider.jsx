import React, { useState } from 'react'
import './CategorySlider.css'
import Slider from 'react-slick';
import image from '../../assets/images/slider/slider1.jpeg'

const CategorySlider = () => {
  const [itembg , setItembg]=useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#ecffec',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#ecffec',
    

  ])
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: true,
    fade:false
  };
  return (
    <>
      <div className="categroySlider">
        <div className="container-fluide">
          <h2 className="hd">Featured Categories</h2>
          <Slider {...settings} className='category_slider_main'> 
            {
              itembg.length!==0 && itembg.map((item,index)=>{
                return (
                  <div className="item">
                  <div className="info"style={{background:item}}>
                    <img src={image} alt="sorry" width={100} />
                    <h6>Cake & Milks</h6>
                    <p>1 items </p>
                  </div>
              </div>

                )
              })
            }

            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>2 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>3 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>4 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>5 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>6 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>7 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>8 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>9 items </p>
                </div>
            </div>
            <div className="item">
                <div className="info">
                <img src={image} alt="sorry" width={100} />
                <h6>Cake & Milks</h6>
                  <p>10 items </p>
                </div>
            </div>
          
            


          </Slider>


        </div>
      </div>
      <br /><br /><br /><br /><br />
    </>
  )
}

export default CategorySlider
