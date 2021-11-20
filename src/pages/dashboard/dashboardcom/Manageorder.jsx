import React from 'react'
import Ordercard from './card/Ordercard'
import './card/card.css'
import useAuth from '../../../customhook/useAuth'
import useData from '../../../customhook/useData'
import axios from 'axios'

const Manageorder = () => {
    const {user}=useAuth()
    const [cardData]=useData(`https://boiling-waters-54208.herokuapp.com/order/`)
    const handleStatus=async(id)=>{
        try{
            const status={status:'Shiped'}
            const res= await axios.put(`https://boiling-waters-54208.herokuapp.com/order/${id}` ,status )
            window.location.reload()
        }catch(err){

        }
    }
    return (
        <>
            <div className="container-fluid pt-5">
                <h1 className="text-center">Manage All Order.</h1>
               <div className="row mx-0 mt-5">
                   {cardData.map((data)=><Ordercard key={data._id} data={data}>
                       <button onClick={()=>handleStatus(data._id)} className="manage-order-btn">Shiped</button>
                   </Ordercard>)}
               </div>
            </div>
        </>
    )
}

export default Manageorder
