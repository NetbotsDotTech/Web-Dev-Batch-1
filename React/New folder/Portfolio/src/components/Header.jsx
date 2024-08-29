import React from 'react'


const Header = () => {
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
    <a href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5"><span className="text-primary">Free</span>Folio</h1>
    </a>
    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
        <div className="navbar-nav m-auto py-0">
            <a href="#home" className="nav-item nav-link active">Home</a>
            <a href="#about" className="nav-item nav-link">About</a>
            <a href="#qualification" className="nav-item nav-link">Quality</a>
            <a href="#skill" className="nav-item nav-link">Skill</a>
            <a href="#service" className="nav-item nav-link">Service</a>
            <a href="#portfolio" className="nav-item nav-link">Portfolio</a>
            <a href="#testimonial" className="nav-item nav-link">Review</a>
            <a href="#blog" className="nav-item nav-link">Blog</a>
            <a href="#contact" className="nav-item nav-link">Contact</a>
        </div>
        <a href="" className="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
    </div>
</nav>
  )
}

export default Header
