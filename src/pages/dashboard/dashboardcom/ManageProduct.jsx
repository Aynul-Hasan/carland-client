import React, { useState } from 'react'
import ProductsCard from '../../share/ProductsCard'
import '../../form/form.css'
import axios from 'axios'
import useData from '../../../customhook/useData'
import { ToastContainer, toast } from 'react-toastify';

const ManageProduct = () => {
    const [cardData]=useData("https://boiling-waters-54208.herokuapp.com/product/")
    const [data, setData] = useState({
        title:'',ratting:'',image:'',price:''
    })
    let name,value;
    const getData=(e)=>{
        e.preventDefault()
        name=e.target.name;
        value=e.target.value
        setData({...data,[name]:value})
    }
    const addProduct=async()=>{
        try{
            if(data.ratting>5){
                // console.log('j' ,data.ratting)
                return
            }
            const res= await axios.post('https://boiling-waters-54208.herokuapp.com/product/',data)
            // console.log(res)
            if(res?.status===201){
                toast.success(`${res.data.msg}`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    });
            }
            setData({title:'',image:'', price:'' ,ratting:''})
        }catch(err){

        }
    }
    const deleteProducts=async(id)=>{
        try{
            const isdelete =window.confirm('Are you sure , you want to Delete?')
            if(isdelete){
                const res=await axios.delete(`https://boiling-waters-54208.herokuapp.com/product/${id}`)
              if(res.status===201){
                toast.success(`Product Deleted`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                });
               }
                window.location.reload()
            }
           
           
        }catch(err){

        }
    }
   
    // console.log(cardData)
    return (
        <>
            <div className="container-fluid pt-5">
                <h1 className="text-center">Manage All Products.</h1>
                <div className="row mx-0 g-4  my-5">
               
                   {
                    cardData.map((data)=><ProductsCard key={data._id} data={data}><button onClick={()=>deleteProducts(data._id)} className="manage-product-btn"><i className="fas fa-trash"></i></button></ProductsCard>)
                   }
                    <div className="col-lg-4 z-index">
                    <div className="card shadow-lg border-0">
                        {/* <span className="text-center common-color"><i className="fas fa-2x mt-2 fa-cart-plus"></i></span> */}
                    <div className="card-body">
                        <h5 className="card-title text-center">Add Product</h5>
                        <div className="text-center">
                            <input name="title" onChange={getData} value={data.title} type="text" placeholder="title" className="login-input" />
                           
                            <input name="price" onChange={getData} value={data.price} type="number" placeholder="price" className="login-input" />
                            <input name="ratting" onChange={getData} value={data.ratting} type='number' placeholder="Ratting 0-5" className="login-input" />
                            <input name="image" onChange={getData} value={data.image} type="text" placeholder="Image Url" className="login-input" />
                            <button onClick={addProduct} className="login-btn" type="submit">Add Product</button>
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

export default ManageProduct
