import React from 'react'
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

const Section5 = () => {
  return (
   <div>
     <section className="ftco-section" id="skills-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <h1 className="big big-2">Skills</h1>
          <h2 className="mb-4">My Skills</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>Photoshop</h3>
            <div className="progress">
              <div
                className="progress-bar color-1"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '90%' }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>jQuery</h3>
            <div className="progress">
              <div
                className="progress-bar color-2"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '85%' }}
              >
                <span>85%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>HTML5</h3>
            <div className="progress">
              <div
                className="progress-bar color-3"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '95%' }}
              >
                <span>95%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>CSS3</h3>
            <div className="progress">
              <div
                className="progress-bar color-4"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '90%' }}
              >
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>WordPress</h3>
            <div className="progress">
              <div
                className="progress-bar color-5"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '70%' }}
              >
                <span>70%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>SEO</h3>
            <div className="progress">
              <div
                className="progress-bar color-6"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: '80%' }}
              >
                <span>80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
   </div>
  )
}

export default Section5
