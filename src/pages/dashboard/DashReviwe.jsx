// import { async } from '@firebase/util'
import axios from 'axios'
import React, { useState } from 'react'
import useAuth from '../../customhook/useAuth'
import DashReviweCard from './dashboardcom/card/DashReviweCard'
import { ToastContainer, toast } from 'react-toastify';
import useData from '../../customhook/useData';
const DashReviwe = () => {
    const {user}=useAuth()
    const [cardData]=useData(`https://boiling-waters-54208.herokuapp.com/reviwe/${user.email}`)
   
    const [desc, setdesc] = useState('')
    const [ratting, setratting] = useState('')
    const handleReviwe=async()=>{
        try{
            if(ratting>5){
                return
            }
            const{displayName:name, email}=user
            const data={name,email,desc,ratting}
            const res= await axios.post('https://boiling-waters-54208.herokuapp.com/reviwe/',data)
            if(res.status===201){
                toast.success(`${res.data?.msg}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    });
            }
            setdesc('')
            setratting('')
        }catch(err){

        }

    }
    return (
        <>
        <div className="container-fluid pt-5">
            <h1 className="text-center">Your reviwes.</h1>
            <div className="row mx-0 g-5 my-5">
                    {
                        cardData.map((data)=><DashReviweCard key={data._id} data={data}></DashReviweCard>)
                    }
                    <div className="col-lg-6">
                    <div className="card shadow-lg border-0">
                        <span className="text-center common-color"><i className="fas fa-2x mt-2 fa-trophy"></i></span>
                    <div className="card-body">
                        <h5 className="card-title text-center">Add Reviwe</h5>
                        <div className="text-center">

                        <input disabled   value={user.displayName} type="text" placeholder="Name" className="login-input" />
                        <input disabled   value={user.email} type="text" placeholder="email" className="login-input" />
                            <textarea value={desc} name={desc} onChange={(e)=>setdesc(e.target.value)} type="text" placeholder="description" className="login-input" />
                            <input    value={ratting} name={ratting} onChange={(e)=>setratting(e.target.value)} type='number' placeholder="Rating 0-5" className="login-input" />
                            <button onClick={handleReviwe} className="login-btn my-3" type="submit">Add Reviwe</button>
                            <ToastContainer/>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default DashReviwe
