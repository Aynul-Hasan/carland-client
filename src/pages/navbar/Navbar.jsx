import React from 'react'
import {Link} from  'react-router-dom'
import useAuth from '../../customhook/useAuth'
import "./navbar.css"
const Navbar = () => {
    const {user,logout}=useAuth()
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <Link className="navbar-brand ms-3" to="/">
                <span className="common-color fw-bolder fw-style">CarLand</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-5">
                    <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item me-5">
                    <Link className="nav-link fw-bold" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item me-5">
                    <Link className="nav-link fw-bold" to="/about">About Us</Link>
                    </li>  
                    {!user?"":<li className="nav-item me-5">
                        <Link className="nav-link fw-bold" to="/dashboard">dashboard</Link>
                    </li> }   
                </ul>
               {user?<button onClick={logout} className="navbar-btn">Logout</button>:<Link to="/login" className="nav-link"><button className="navbar-btn">Login</button></Link>     }         
                </div>
            </div>
            </nav>
                        
        </>
    )
}

export default Navbar
