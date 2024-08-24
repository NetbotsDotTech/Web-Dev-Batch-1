import React from 'react'
import bg1 from './image/bg_1.jpg'
import bg2 from './image/bg_2.jpg'



import 'animate.css';
import '../css/style.css';


const Section2 = () => {
  return (
  <>
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
    	<div className="container">
    		<div className="row d-flex">
    			<div className="col-md-6 col-lg-5 d-flex">
    				<div className="img-about img d-flex align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage:`url(${bg1})`}}
                        >
                        
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
    				<div className="row justify-content-start pb-3">
		          <div className="col-md-12 heading-section ftco-animate">
		          	<h1 className="big">About</h1>
		            <h2 className="mb-4">About Me</h2>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
		            <ul className="about-info mt-4 px-md-0 px-2">
		            	<li className="d-flex"><span>Name:</span> <span>Basit Ali</span></li>
		            	<li className="d-flex"><span>Date of birth:</span> <span>March 01, 2005</span></li>
		            	<li className="d-flex"><span>Address:</span> <span>Skardu,Gilgit Baltistan, Pakistan</span></li>
		            	<li className="d-flex"><span>Zip code:</span> <span>1200</span></li>
		            	<li className="d-flex"><span>Email:</span> <span>Abdupa911@gmail.com</span></li>
		            	<li className="d-flex"><span>Phone: </span> <span>+92 475495500</span></li>
		            </ul>
		          </div>
		        </div>
	          <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
              	<p className="mb-4">
	                <span className="number" data-number="120">0</span>
	                <span>Project complete</span>
                </p>
                <p><a href="#" className="btn btn-primary py-3 px-3">Download CV</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
	</>
  )
}

export default Section2
