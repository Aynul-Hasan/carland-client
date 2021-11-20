import axios from 'axios'
import React from 'react'
import './card.css'
import Rating from 'react-rating'
const DashReviweCard = ({data}) => {
        const deleteReviwe=async(id)=>{
            try{
                const isdelete =window.confirm('Are you sure , you want to delete')
                if(isdelete){
                    const res= await axios.delete(`https://boiling-waters-54208.herokuapp.com/reviwe/${id}`)
                    console.log(res)
                    window.location.reload()
                }
            }catch(err){

            }
        }
    return (
        <>
            <div className="col-lg-6">
            <div className="card position-relative border-0 shadow-lg mx-2 py-5">
               <img src="../../../../img/user.png" width="150" className=" rounded-circle" alt="" />
                <button onClick={()=>deleteReviwe(data?._id)} className="order-card-btn"><i className="fas fa-trash-alt"></i></button> 
            <div className="card-body">

                <h5 className="card-title">{data?.name}</h5>
                <p className="card-text">{data?.desc}</p>
                <div className="my-4">
                <Rating
                    emptySymbol={<i class="far common-color fa-star"></i>}
                    fullSymbol={<i className="fas  common-color fa-star"></i>}
                    readonly
                    initialRating={data?.ratting}
                    />
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default DashReviweCard
