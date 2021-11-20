import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './home.css'
import Banner from './homecomponents/Banner'
import Blog from './homecomponents/Blog'
import Products from './homecomponents/Products'
import Reviwe from './homecomponents/Reviwe'

const Home = () => {
    return (
        <>
           <Navbar/> 
           <Banner/>
           <Products/>
           <Blog/>
           <Reviwe/>
           <Footer/>
        </>
    )
}

export default Home
