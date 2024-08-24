import React from 'react'
import bg1 from './image/bg_1.jpg'
import bg2 from './image/bg_2.jpg'
// import bg3 from '../image/project-4.jpg'
// import bg4 from '../image/project-5.jpg'
// import bg5 from '../image/project-1.jpg'
// import bg6 from '../image/project-6.jpg'
// import bg7 from '../image/project-2.jpg'
// import bg8 from '../image/project-3.jpg'
// import bg9 from '../image/image_1.jpg'
// import bg10 from '../image/image_2.jpg'
// import bg11 from '../image/image_3.jpg'
// import bg12 from '../image/bcg_1.jpg'


import '../css/open-iconic-bootstrap.min.css'; 
import '../css/animate.css';
import '../css/owl.carousel.min.css'; 
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.css';
import '../css/aos.css'; 
import '../css/ionicons.min.css'; 
import '../css/flaticon.css'; 
import '../css/icomoon.css';
import '../css/style.css';





const Section1 = () => {
  return (
    
   <>
    <section id="home-section" className="hero">
		  <div className="home-slider  owl-carousel">
	      <div className="slider-item ">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
	          	<div className="one-third js-fullheight order-md-last img" 
				style={{backgroundImage:`url(${bg1})`}}>
	          		<div className="overlay"></div>
	          	</div>
		          <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
		          	<div className="text">
		          		<span className="subheading">Hello!</span>
			            <h1 className="mb-4 mt-3">I'm <span>Basit Ali</span></h1>
			            <h2 className="mb-4">A  Web Developer</h2>
			            <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>

	      <div className="slider-item">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
	          	<div className="one-third js-fullheight order-md-last img" style={{backgroundImage:`url(${bg2})`}}>
	          		<div className="overlay"></div>
	          	</div>
		          <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
		          	<div className="text">
		          		<span className="subheading">Hello!</span>
			            <h1 className="mb-4 mt-3">I'm a <span>web developer</span> based in Skardu</h1>
			            <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div>
    </section>
	

   
		

   </>
  )
}

export default Section1
