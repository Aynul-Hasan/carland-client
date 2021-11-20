import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReviweCard from '../../share/ReviweCard';
import useData from '../../../customhook/useData';

const Reviwe = () => {
  const [cardData]=useData("https://boiling-waters-54208.herokuapp.com/reviwe/")

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 924,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 668,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
          ]
      };
    return (
        <>
           <div className="reviwe-container py-5 my-5">
           <Slider className="w-100" {...settings} >
                    {
                      cardData.map((data)=><div><ReviweCard key={data._id} data={data}></ReviweCard></div>)
                    }
               
          </Slider>
           </div>
        </>
    )
}

export default Reviwe
