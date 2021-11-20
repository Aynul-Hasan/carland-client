import { useEffect, useState } from "react";
import firebaseInitapp from "../firebase/firebaseinit";
import { getAuth ,signOut ,
     onAuthStateChanged,createUserWithEmailAndPassword , updateProfile ,signInWithEmailAndPassword} from "firebase/auth";

import axios from 'axios'

firebaseInitapp();
const useFirebase=()=>{
    const [user, setUser] = useState(null)
    const [admin, setadmin] = useState()
    const [isLoading, setisLoading] = useState(true)
    const auth = getAuth();
    
    const pushusername=async(name)=>{
        const res=await  updateProfile(auth.currentUser, {
              displayName: name
            })
            console.log(res)
      }
      const usersaveinDatabase=async(name,email)=>{
          try{
            //   console.log(name,email)
              
              const data={name,email}
                const res= await axios.post('https://boiling-waters-54208.herokuapp.com/user/',data)

          }catch(err){

          }
      }
    const createnewAccount=async(email,password,name)=>{
        setisLoading(true)
        try{
            const res=await createUserWithEmailAndPassword(auth, email, password)
            pushusername(name)
            usersaveinDatabase(name,res.user.email)
            setUser(res.user)
             setisLoading(false)
        }catch(err){
            setUser(null)
        }

    }

    const loginwithEmail=async(email,password)=>{
        try{
           const res=await  signInWithEmailAndPassword(auth, email, password)
           setUser(res.user)
           setisLoading(false)
        }catch(err){
            // console.log(err)
            setUser(null)
            return 400
        }

    }
    useEffect(() => {
       const unsubcribe= onAuthStateChanged(auth, (user) => {
           setisLoading(true)
            if (user) {
             setUser(user)
              
            } else {
             setUser(null)
            }
            setisLoading(false)
          });
          return ()=> unsubcribe
    }, [])
    useEffect(() => {
        const calluser=async()=>{
              try{
                  setisLoading(true)
                  const res= await axios.get(`https://boiling-waters-54208.herokuapp.com/user/${user.email}`)
                  setadmin(res?.data?.role)
                  setisLoading(false)
              }catch(err){
  
              }
        }
        calluser()
      }, [user?.email])
    const logout=async()=>{
        try{
            setisLoading(true)
            const res=signOut(auth)
            setUser(null)
            setisLoading(false)
        }catch(err){

        }
    }

    return{user,admin,logout,createnewAccount,loginwithEmail ,isLoading ,setUser,setisLoading}
}
export default useFirebase;