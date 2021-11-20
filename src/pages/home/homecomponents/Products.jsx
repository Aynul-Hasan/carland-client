import React from 'react'
import ProductsCard from '../../share/ProductsCard'
import useData from '../../../customhook/useData'
const Products = () => {
    const [cardData,dataLoding]=useData("https://boiling-waters-54208.herokuapp.com/product/")

    return (
        <>
           <div className="container">
               <h1 className="text-center mt-5">Cars</h1>
               {dataLoding?  <div className="spinner-border mx-auto mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>:""}
               <div className="row my-5 mx-0 g-5">
                  
                  {cardData?.slice(9).map((data)=><ProductsCard key={data._id} data={data} ></ProductsCard>)}
               </div>
           </div>
        </>
    )
}

export default Products
