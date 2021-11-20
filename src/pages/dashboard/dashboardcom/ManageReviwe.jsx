import React from 'react'
import useData from '../../../customhook/useData'
import DashReviweCard from './card/DashReviweCard'

const ManageReviwe = () => {
    const [cardData]=useData("https://boiling-waters-54208.herokuapp.com/reviwe/")
    return (
        <>
        <div className="container-fluid pt-5">
            <h1 className="text-center">All Reviwes.</h1>
            <div className="row mx-0 gy-5 mt-5">
               {
                   cardData.map((data)=><DashReviweCard key={data._id} data={data}></DashReviweCard>)
               }
            </div>
        </div>
        </>
    )
}

export default ManageReviwe
