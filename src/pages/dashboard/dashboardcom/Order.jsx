import React from 'react'
import useAuth from '../../../customhook/useAuth'
import useData from '../../../customhook/useData'
import Ordercard from './card/Ordercard'

const Order = () => {
    const {user}=useAuth()
    const [cardData]=useData(`https://boiling-waters-54208.herokuapp.com/order/${user.email}`)
    return (
        <>
            <div className="container">
                <h1 className='text-center mt-5'>Your Order</h1>                
                <div className="row mx-0 mt-5">
                    {/* {!cardData?<h1 className="text-center">You haven't ordered yet.</h1>:''} */}
                  {cardData.map((data)=><Ordercard key={data._id} data={data}></Ordercard>)}
                </div>
            </div>
        </>
    )
}

export default Order
