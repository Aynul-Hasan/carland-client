import React from 'react'
import { Link } from 'react-router-dom'
import './share.css'
import Rating from 'react-rating'
const ProductsCard = (props) => {
    const{title,price,ratting ,image ,_id}=props?.data
    return (
        <>
            <div className="col-lg-4">
            <div className="card card-height border-0 shadow-lg">
            <p className="card-p">${price}</p>
          
            <img src={image} className="mx-auto img-fluid" width="240"  alt="..."/>
            <div className="card-body">

                <h6 className="card-title">{title}</h6>
                <div  className="d-flex justify-content-evenly">
                    <p className="common-color"><i className="fas fa-gas-pump me-2"></i>Petrol</p>
                    <p className="common-color"><i className="fas  me-2 fa-road"></i>3000KM</p>
                    <p className="common-color"><i className="fas fa-bezier-curve"></i> Manual</p>
                </div>
                <div className="d-flex justify-content-evenly">
                    <p className="common-color"><i className="fas me-2 fa-car"></i>Sport</p>
                    <p className="common-color"><i className="fas me-2 fa-cog"></i>Blue</p>
                    <p className="common-color"><i className="far  fa-calendar-alt"></i> 2019</p>
                </div>
                <div className="common-color">
                <Rating
                    emptySymbol={<i class="far fa-star"></i>}
                    fullSymbol={<i className="fas fa-star"></i>}
                    readonly
                    initialRating={ratting}
                    />
                </div>
                <Link to={`/shopping/${_id}`} className="nav-link"><button className="card-btn"><i className="fas me-2 fa-shopping-bag"></i>Buy Now</button></Link>
            </div>
            {props?.children}
                {/* <span className="w-100"> {props?.children}</span> */}
            </div>
           
            </div>
        </>
    )
}

export default ProductsCard

