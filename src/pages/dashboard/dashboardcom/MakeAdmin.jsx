import axios from 'axios'
import React, { useState } from 'react'
import '../../form/form.css'
import { ToastContainer, toast } from 'react-toastify';
const MakeAdmin = () => {
    const [email, setemail] = useState('')
    const makeAdmin=async()=>{
        try{
            const data={email:email}
            const res= await axios.put(`https://boiling-waters-54208.herokuapp.com/user/`, data)
                if(res.status===201){
                    toast.success(`${res.data.msg}`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        });
                }
        }catch(err){

        }
    }
    return (
        <>
           <div className="container-fluid">
               <h1 className="text-center">Make Admin.</h1>
                <div className="row mt-5 mx-0">
                        <div className="col-lg-6">
                            <img src="https://www.pngkit.com/png/full/831-8314676_admin-demo-scalable-vector-graphics.png" className="img-fluid" width="400" alt="" />    
                        </div>
                        <div className="col-lg-6 my-auto">
                            <input name='email' value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" type="email" className="login-input" />
                                <button onClick={makeAdmin} className='login-btn'>Add Admin </button>
                                <ToastContainer/>
                        </div>
                </div>   
            </div> 
        </>
    )
}

export default MakeAdmin
