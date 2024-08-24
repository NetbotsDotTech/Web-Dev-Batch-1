import React from 'react';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import './ionicons.minHeader.css';
import './flaticonHeader.css';
import  './icomoonHeader.css';
import './style.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
            <div className="container">
                <a className="navbar-brand" href="index.html">Clark</a>
                <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                        <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                        <li className="nav-item"><a href="#resume-section" className="nav-link"><span>Resume</span></a></li>
                        <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
                        <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
                        <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                        <li className="nav-item"><a href="#blog-section" className="nav-link"><span>My Blog</span></a></li>
                        <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
