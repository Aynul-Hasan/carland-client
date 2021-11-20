import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './card.css'
const Ordercard = (props) => {
    // console.log(props)
    const [isFind, setisFind] = useState(false)
    const [data, setdata] = useState()
    const deleteOrder=async(id)=>{
        try{
            const isdelete =window.confirm('Are you sure , you want to cancel')
            if(isdelete){
                const res=await axios.delete(`https://boiling-waters-54208.herokuapp.com/order/${id}`)
                window.location.reload()
            }
        }catch(err){

        }
    }
    useEffect(() => {
        const callproducts=async()=>{
            setisFind(true)
            const res=await axios.get(`https://boiling-waters-54208.herokuapp.com/product/${props?.data?.shopid}`)
            setdata(res.data)
            setisFind(false)
        }
        callproducts()
    }, [props?.data?.shopid])
    return (
        <>
            <div className="col-lg-6">
            <div className="card border-0 shadow-lg mb-3">
                {isFind?<div className="spinner-border mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>: <div className="row g-0">
                <div className="col-md-4 mt-3">
                <img src={data?.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body position-relative">
                    <h5 className="card-title">{data?.title}</h5>
                    <h6>${data?.price}</h6>
                    <h6>name:-{props?.data?.name}</h6>
                    <p>Order Status: <span className="fw-bolder">{props?.data?.status}</span> </p>
                    <button onClick={()=>deleteOrder(props?.data?._id)} className="order-card-btn"><i className="fas fa-trash-alt"></i></button> 
                    {props?.children}                  
                </div>
                </div>
            </div>}
            </div>
            </div>
        </>
    )
}

export default Ordercard
