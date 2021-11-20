import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import '../form/form.css'
import './shop.css'
import useAuth from '../../customhook/useAuth'
import axios from 'axios'
import { useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
const Shopping = () => {
    const {user}=useAuth()
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [error, seterror] = useState(false)
    const [data, setdata] = useState()
    const {id:shopid}= useParams()
    console.log(data)
    const handleOrder=async()=>{
        try{
           if(!phone|| !address){
            return seterror(true)
           }
           const{displayName:name,email}=user
           const status='pending'
           const data= {name,email,phone,address,shopid,status}
           
           const res= await axios.post('https://boiling-waters-54208.herokuapp.com/order/',data)
        //    console.log(res,data)
           if(res?.status===201){
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
    useEffect(() => {
       const callproducts=async()=>{
           const res=await axios.get(`https://boiling-waters-54208.herokuapp.com/product/${shopid}`)
           setdata(res.data)
       }
       callproducts()
    }, [shopid])
    return (
        <>
            <Navbar/>
            <div className="shop-container">
               <h1 className="text-center text-white">{data?.title}</h1>
            </div>
            <div className="container">
                <div className="row my-5">
                        <div className="col-lg-6">
                            <img src={data?.image} className="img-fluid" width="300" alt="" />
                        </div>
                        <div className="col-lg-6">
                        <div className="card shadow-lg border-0">
                        <span className="text-center common-color"><i className="fas fa-2x mt-2 fa-cart-plus"></i></span>
                    <div className="card-body">
                        <h5 className="card-title text-center">Add Order</h5>
                        <div className="text-center">
                            <input value={user.displayName} disabled type="text" placeholder="Name" className="login-input" />
                            <input value={user.email} disabled type="email" placeholder="Email" className="login-input" />
                            <input name='phone' value={phone} onChange={(e)=>setphone(e.target.value)} type='number' placeholder="Phone" className={error?"login-input border-danger":"login-input"} />
                            <input name='address' value={address} onChange={(e)=>setaddress(e.target.value)} type="text" placeholder="Address" className={error?"login-input border-danger":"login-input"} />
                            <button onClick={handleOrder} className="login-btn" type="submit">Add Product</button>
                            <ToastContainer/>
                        </div>
                    </div>
                    </div>
                        </div>
                </div>
            </div>
            <Footer/>
            
        </>
    )
}

export default Shopping
