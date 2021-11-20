import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from '../../customhook/useAuth'

// import MoonLoader from "react-spinners/MoonLoader"

const Privateroute = ({children,...rest}) => {
    
    const {user,isLoading}= useAuth()
    
    if(isLoading){
        return( <>
               <div className="mx-auto">
              
            </div> 
        </>
        )
    }
    return (
        <Route
        {...rest}
        render={({location})=>user?.email?
         children:<Redirect to={{pathname:"/login", state:{from:location}}}
         ></Redirect>}
        >
            
        </Route>
    )
}

export default Privateroute