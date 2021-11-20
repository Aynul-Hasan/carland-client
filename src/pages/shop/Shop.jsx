import React from 'react'
import useData from '../../customhook/useData'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import ProductsCard from '../share/ProductsCard'
import './shop.css'

const Shop = () => {
    const [cardData]=useData("https://boiling-waters-54208.herokuapp.com/product/")

    return (
        <>
          <Navbar></Navbar> 
          <div className=" shop-container pt-5">
              <h1 className="text-white  text-center">Shop</h1>
          </div>
          <div className="container">
              <div className="row mx-0 my-5 g-5">
                 
                {cardData.map((data)=><ProductsCard key={data._id} data={data}></ProductsCard>)}
              </div>
          </div>
          <Footer></Footer>
        </>
    )
}

export default Shop
