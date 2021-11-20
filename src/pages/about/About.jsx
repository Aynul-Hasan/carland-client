import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './about.css'
import CountUp from 'react-countup';

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="about-container pt-5">
            <h1 className="text-white  text-center">About US</h1>
            </div>
            <div className="container">
                <div className="row mx-0 my-5 gx-5">
                    <div className="col-lg-6 about-border">
                        <img src="./img/img-6.jpg" className="img-fluid rounded-3 " alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="ms-5 mt-5 mx-lg-0 common-color">Welcome to CarLand</h1>
                        <p className="ms-5"> It's not news that the number of cars available with a manual transmission has dwindled, and a big reason for that is people just aren't learning how to drive them. Still, it's a worthwhile skill to pick up. Our number one reason would be because it's fun, but you never know when you might to need to do it in a pinch. Perhaps you'll have to drive a friend's old stick-shift car in an emergency, or maybe it's just a really cool car and they're giving you the chance to try it out. Or in the case of this Saturday Night Live sketch, maybe you're trying to steal a vintage Lamborghini.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid counter-bg">
            <div className="row mx-0 my-auto py-5  w-100">
                    <div className="col-lg-3 common-size text-center text-white my-auto">
                        <CountUp end={235} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Total Cars</h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={1630} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Dealer Reviews </h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={550} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className="col-lg-3 common-size text-center text-white">
                        <CountUp end={859} duration={7} delay={1} start={0} />
                        <div className="common-border mx-auto" ></div>
                        <h5>Awards Winning</h5>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About
