import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../../customhook/useAuth'

// import MoonLoader from "react-spinners/MoonLoader"

const Adminroute = ({children,...rest}) => {
    
    const {user,admin,isLoading}= useAuth()
    
    if(isLoading){
        return( <>
               <div className="mx-auto">
               <div className="spinner-border mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
            </div> 
        </>
        )
    }
    return (
        <Route
        {...rest}
        render={({location})=>user?.email && admin?
         children:<Redirect to={{pathname:"/", state:{from:location}}}
         ></Redirect>}
        >
            
        </Route>
    )
}

export default Adminroute