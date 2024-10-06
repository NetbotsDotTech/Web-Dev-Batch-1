import React from 'react'
import './Banner.css'
import image1 from '../../assets/images/slider/main3.jpg'
import image2 from'../../assets/images/slider/slider1.jpeg'


const Banner = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={image1  } className='w-100 transition' />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={image2  } className='w-100 transition' />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={image1  } className='w-100 transition' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
