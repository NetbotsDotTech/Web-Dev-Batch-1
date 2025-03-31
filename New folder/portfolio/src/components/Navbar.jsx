import React from 'react'

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css/animate.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand d-block d-lg-none">
            <h1 className="text-primary fw-bold m-0">ProMan</h1>
        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="#home" className="nav-item nav-link active">Home</a>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#skill" className="nav-item nav-link">Skills</a>
                <a href="#service" className="nav-item nav-link">Services</a>
            </div>
            <a href="index.html" className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
                <h1 className="text-primary fw-bold m-0">ProMan</h1>
            </a>
            <div className="navbar-nav me-auto py-0">
                <a href="#project" className="nav-item nav-link">Projects</a>
                <a href="#team" className="nav-item nav-link">Team</a>
                <a href="#testimonial" className="nav-item nav-link">Testimonial</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
    </div>
  )
}
