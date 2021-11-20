import React from 'react'
import './share.css'
import Rating from 'react-rating'
const ReviweCard = ({data}) => {
   
    return (
        <>
            <div className="reviwe-card mx-2 my-auto">
               <img src="./img/user.png" width="150" className="reviwe-card-img" alt="" />
            <div className="card-body">
                <h5 className="card-title">{data?.name}</h5>
                <p className="card-text">{data?.desc}</p>
                <div>
                <Rating
                    emptySymbol={<i class="far common-color fa-star"></i>}
                    fullSymbol={<i className="fas  common-color fa-star"></i>}
                    readonly
                    initialRating={data?.ratting}
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default ReviweCard
