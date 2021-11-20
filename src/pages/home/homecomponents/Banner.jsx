import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div className="banner-container text-center pt-5 m-0">
                <h1 className="pe-4 text-white fw-bolder fw-style pt-4">FIND YOUR DREAM CAR</h1>
                <p className="pe-4 text-white ">BEST PLACE FOR SELL CAR!</p>
                <button className="banner-btn me-4"><Link className="nav-link text-white" to="/shop">Get Start Now</Link></button>
            </div>
        </>
    )
}

export default Banner
