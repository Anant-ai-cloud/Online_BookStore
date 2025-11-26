import React from 'react'
// import list from "../../public/list.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function Freebook() {
  const[book, setBook]= useState([])
  useEffect(()=>{
    const Book = async()=>{
      const res = await axios.get("http://localhost:5002/book")
      const data = res.data.filter((data)=> data.category==="Free")
      setBook(data)

    }
    Book()
  },[])
    // const filterData = list.filter((data)=> data.category=== "Free")
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor debitis ipsa quae vel dolores nobis hic tenetur minus. Incidunt vitae itaque et sit voluptatem?</p>
     </div>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <Slider {...settings}>
        {book.map((item)=> 
          <Card item = {item} key={item.id}/>
        )}
      </Slider>
     </div>
    </>
  )
}

export default Freebook
