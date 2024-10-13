import React from 'react'
import './Footer.css'
import leave from '../../assets/images/slider/leave.jpeg'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footerWrapper">
        <div className="footerBoxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={leave} width={46} /></span>
                            <div className="info  ">
                                <h4>Best Price & Offers</h4>
                                <p>Order $50 or more</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={leave} width={46} /></span>
                            <div className="info  ">
                                <h4>Free Delivery  </h4>
                                <p>Order $50 or more</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={leave} width={46} /></span>
                            <div className="info  ">
                                <h4>Greate Daily Deal</h4>
                                <p>Order $50 or more</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={leave} width={46} /></span>
                            <div className="info  ">
                                <h4>Easy Returns</h4>
                                <p>Order $50 or more</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Link to=''><img src={logo} alt="" className='w-100' /></Link>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
