import React from 'react'

const Blog = () => {
    return (
        <>
           <div className="container mt-5">
               <h1 className="text-center mt-5">Our Blog</h1>
               <div className="row g-5 mx-0 my-4 ">
                    <BlogCard img="./img/blog-1.jpg" title="Selling Your New Cars?"/>
                    <BlogCard img="./img/blog-2.jpg" title="Buying a Best Sports Car"/>
                    <BlogCard img="./img/blog-3.jpg" title="Find Your Dream Car"/>
               </div>
               </div> 
        </>
    )
}

const BlogCard=({img,title})=>{
    return(
        <>
        <div className="col-lg-4">
        <div className="card border-0 shadow blog-card position-relative">
            <img src={img} className="" alt="..."/>
            <div className="blog-dtls">
                <p className="text-white"><i className="fas me-2 common-color fa-user"></i>Admin</p>
                <p className="text-white"><i className="fas me-2 common-color fa-comment"></i>5k</p>
                <p className="text-white"><i className="fas me-2 common-color fa-calendar-day"></i>6k</p>
            </div>
            <div className="blog-date">
                    <h5>15Aug</h5>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Autocar is the companion site to the print magazine of the same name. It covers the British market with automotive industry news, racing features, sales rankings, and a special focus on used car selling.</p>
                <span className="common-color">Read More...</span>
            </div>
            </div>
        </div>
        </>
    )
}

export default Blog
