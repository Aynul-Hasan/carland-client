import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './form.css'
import { useHistory, useLocation } from 'react-router'
import useAuth from '../../customhook/useAuth'
const Singup = () => {
    const {createnewAccount}=useAuth();
    const location = useLocation();
    const histrioy= useHistory();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(false)

    const handelLogin=()=>{
        if(!email||!password||!name){
           return seterror(true)

        } else if(password.length<6){
               return seterror(true)
        }else{
            seterror(false)
             createnewAccount(email,password,name)
           
         histrioy.push(location?.state?.from?.pathname||'/')
        //  window.location.reload()
        }
      
    }
    
    return (
        <>
         <Navbar/>
            <div className="container">
                <div className="row login-section">
                    <div className="col-lg-6 py-3 text-center ">
                        <h3> Create an account</h3>
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <Link className="nav-link" to="/login"><button type="button" className="login-btns">Login</button></Link>
                        <Link className="nav-link" to="/singup"><button type="button" className="login-btns">Singup</button></Link>
                        </div>
                        <div className="mt-5">
                        <input placeholder="name" onChange={(e)=>setname(e.target.value)}     value={name} className={error?"login-input border-danger":"login-input"} type="text" />
                        <input onChange={(e)=>setemail(e.target.value)}    value={email}  placeholder="Email"  className={error?"login-input border-danger":"login-input"}   type="email" />
                        <input  onChange={(e)=>setpassword(e.target.value)} value={password}  placeholder="Password" className={error?"login-input border-danger":"login-input"} type="password" />
                        <button onClick={handelLogin} className="login-btn" type="submit">Singup</button>
                        </div>
                        <p className="mt-3">or Singup with</p>
                       
                    </div>
                    <div className="col-lg-6 img-section">
                            <div className="" >
                                <i className="fab fa-2x me-2 common-color fa-facebook-square"></i>
                                <i className="fab fa-2x me-2 common-color fa-instagram"></i>
                                <i className="fab fa-2x me-2 common-color fa-google-plus-square"></i>
                                <i className="fab fa-2x me-2 common-color fa-linkedin"></i>
                            </div>
                    </div>
                </div>

            </div>
            <Footer/>
            
        </>
    )
}

export default Singup
