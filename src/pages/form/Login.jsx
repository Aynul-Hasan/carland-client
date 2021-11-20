import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './form.css'
import useAuth from '../../customhook/useAuth'
import { useHistory, useLocation } from 'react-router'
const Login = () => {
    const location = useLocation();
    const histrioy= useHistory();
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState(false)
    const {loginwithEmail}= useAuth()
    // console.log(user)
    const LoginWithfirebase=async()=>{
        try{
            if(!email||!password){
                return seterror(true)
             }else{
                 seterror(false)
                  const res=await loginwithEmail(email,password)
                 seterror(false)
                 if(res===400){
                   return seterror(true)
                 }
                //  console.log(res)
                 histrioy.push(location?.state?.from?.pathname||'/')
               }

        }catch(err){

        }
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row login-section">
                    <div className="col-lg-6 py-3 text-center ">
                        <h3>Login into your account</h3>
                        <div className="btn-group" role="group" aria-label="Basic example">
                        <Link className="nav-link" to="/login"><button type="button" className="login-btns">Login</button></Link>
                        <Link className="nav-link" to="/singup"><button type="button" className="login-btns">Singup</button></Link>
                        </div>
                        <div className="my-5">
                        <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" className={error?"login-input border-danger":"login-input"} type="email" />
                        <input name="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="password" className={error?"login-input border-danger":"login-input"} type="password" />
                        <button onClick={LoginWithfirebase} className="login-btn" type="submit">Login</button>
                        </div>
                        <p className="mt-5">or login with</p>
                        
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

export default Login
