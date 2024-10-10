import React from 'react'
import './Footer.css'
import leave from '../../assets/images/slider/leave.jpeg'

const Footer = () => {
  return (
    <div className="footerWrapper">
        <div className="footerBoxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span><img src={leave} width={2} /></span>
                            <div className="info  ">
                                <p>Best Price & Offers</p>
                                <p>Order $50 or more</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                    <div className="col">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
