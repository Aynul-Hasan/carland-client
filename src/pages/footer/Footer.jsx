import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="footer-container pt-5">
                <div className="row mx-5 py-5">
                    <div className="col-lg-4">
                        <Link className="nav-link"><img src="./img/oldtimer-us-car-transparent-png-600807.png" width="70" alt="" />
                        <span className="common-color fw-style fw-bolder">CarLand</span>
                        </Link>
                        <p className="text-white">Autocar is the companion site to the print magazine of the same name. It covers the British market with automotive industry news.</p>
                    </div>
                    <div className="col-lg-4 text-white">
                            <h5>Useful Links</h5>
                            <ul>
                                <li><Link to="/"className="nav-link text-white">Home</Link></li>
                                <li><Link to="/car"className="nav-link text-white">Cars</Link></li>
                                <li><Link to="/about"className="nav-link text-white">About Us</Link></li>
                               
                            </ul>
                    </div>
                    <div className="col-lg-4">
                        <h5 className="text-white">Contact Info</h5>
                        <div>
                            <p className="text-white"><i className="fas me-2 common-color fa-map-marker-alt"></i>20/F Green Road, Dhanmondi, Dhaka</p>
                            <p className="text-white"><i className="fas me-2 common-color fa-envelope"></i>aynulhassan003@gmail.com</p> 
                            <p className="text-white"><i className="fas me-2 common-color fa-phone-alt"></i>01866049165</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-5" />
                    <div className="d-flex justify-content-around">
                        <p className="text-white">
                            &copy; 2021 CarLand. All Rights Reserved.
                        </p>
                        <div>
                        <i className="fab fa-2x me-2 common-color fa-facebook-square"></i>
                        <i className="fab fa-2x me-2 common-color fa-instagram"></i>
                        <i className="fab fa-2x me-2 common-color fa-google-plus-square"></i>
                        <i className="fab fa-2x me-2 common-color fa-linkedin"></i>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
