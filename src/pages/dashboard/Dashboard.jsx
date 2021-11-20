// import axios from 'axios';
import React, { useState } from 'react'
import { Switch,Route,Link,useRouteMatch} from "react-router-dom";
import useAuth from '../../customhook/useAuth';
import Adminroute from '../privateroute/Adminroute';
import './dashboard.css'
import Dashhome from './dashboardcom/Dashhome';
import MakeAdmin from './dashboardcom/MakeAdmin';
import Manageorder from './dashboardcom/Manageorder';
import ManageProduct from './dashboardcom/ManageProduct';
import ManageReviwe from './dashboardcom/ManageReviwe';
import Order from './dashboardcom/Order';
import Payment from './dashboardcom/Payment';
import DashReviwe from './DashReviwe';
const Dashboard = () => {

    const { path, url } = useRouteMatch();
    // console.log(path,url,useRouteMatch)
    const [click,setClick]= useState(false);
    const handleClick=()=>setClick(!click);
    const {admin,logout}= useAuth()
    
    return (
        <>
            <div className="z container-fluid p-0 d-flex">
              <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times':'fas fa-bars'}/>
                </div>
                <div className={click?"dashboard-nav active":"dashboard-nav"}>
                <ul className="navbar-nav  ms-auto mb-lg-0">
                    <li className="">
                        <Link className="nav-link text-white ms-5 fw-bold" aria-current="page" to={`${url}`}><img src="../../img/oldtimer-us-car-transparent-png-600807.png" width="70" height="65" alt="" />
                    <span className=" fw-bolder fw-style">CarLand</span></Link>
                        </li>
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white active fw-bold" aria-current="page" to={`${url}`}><i className="fas me-2 fa-tachometer-alt"></i>Dashboard</Link>
                        </li>
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/order`}><i className="fas me-2 fa-shopping-bag"></i>Your Orders</Link>
                        </li>
                        {
                            admin && <sanp>
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/product`}><i className="fas me-2 fa-box-open"></i>Manage Products</Link>
                        </li>       
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/makeadmin`}><i className="fas me-2 fa-user-shield"></i> Make admin</Link>
                        </li>
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/allorder`}><i className="fas me-2 fa-tasks"></i>Manage Order</Link>
                        </li> 
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/managereviwe`}><i className="fas me-2 fa-trophy"></i>Manage Reviwe</Link>
                        </li> 
                            </sanp>
                        }
                        

                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/reviwe`}><i className="fas me-2 fa-trophy"></i>Your Reviwe</Link>
                        </li>  


                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to={`${url}/pay`}><i className="fas me-2 fa-cash-register"></i> Payment</Link>
                        </li>

                        
                        <li className="nav-item px-5">
                        <Link className="nav-link text-white fw-bold" to='/'><i className="fas me-2 fa-home"></i>Go to Home</Link>
                        </li> 
                        <li className="nav-item px-5">
                        <span onClick={logout} className="nav-link text-white fw-bold"><i className="fas me-2 fa-sign-out-alt"></i>Logout</span>
                        </li> 
                    </ul>
                </div>
                <div className="dashboard-main">
                    <Switch>
                            <Route exact path={path} >
                             <Dashhome/>
                            </Route>
                            <Route path={`${path}/order`} >
                            <Order/>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Payment/>
                            </Route>
                            <Adminroute path={`${path}/allorder`} >
                            <Manageorder/>
                            </Adminroute>
                            <Route path={`${path}/reviwe`} >
                            <DashReviwe/>
                            </Route>
                            <Adminroute path={`${path}/makeadmin`}>
                                <MakeAdmin/>
                            </Adminroute>
                            <Adminroute path={`${path}/product`} >
                            <ManageProduct/>
                            </Adminroute>
                            <Adminroute path={`${path}/managereviwe`} >
                            <ManageReviwe/>
                            </Adminroute>
                      </Switch>
                </div>
            </div>
        </>
    )
}

export default Dashboard
