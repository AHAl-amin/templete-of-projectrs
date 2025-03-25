import React from 'react'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const testimonialsData = 

[
    {
      "image": "https://i.ibb.co.com/n4NyhKJ/posing-athletes-holding-weights.jpg",
      "name": "Product 1",
      "description": "This is a description for product 1. It offers high-quality materials and great value for money.",
      "rating": "⭐⭐⭐⭐☆"
    },
    {
      "image": "https://i.ibb.co.com/n4NyhKJ/posing-athletes-holding-weights.jpg",
      "name": "Product 2",
      "description": "Product 2 is a top-rated gadget, known for its innovative design and performance.",
      "rating": "⭐⭐⭐⭐⭐"
    },
    {
      "image": "https://i.ibb.co.com/n4NyhKJ/posing-athletes-holding-weights.jpg",
      "name": "Product 3",
      "description": "An advanced version of the previous model, this product offers improved features and enhanced durability.",
      "rating": "⭐⭐⭐⭐☆"
    },
    {
      "image": "https://i.ibb.co.com/n4NyhKJ/posing-athletes-holding-weights.jpg",
      "name": "Product 4",
      "description": "This product combines functionality with aesthetics, providing both value and style.",
      "rating": "⭐⭐⭐⭐"
    },
    {
      "image": "https://i.ibb.co.com/n4NyhKJ/posing-athletes-holding-weights.jpg",
      "name": "Product 5",
      "description": "A must-have for tech enthusiasts, this product is packed with cutting-edge technology and features.",
      "rating": "⭐⭐⭐⭐⭐"
    }
  ]
  

function Testimonials() {
  return (
    <div className='my-20 px-20'>
        <h1 className='text-center my-10 font-bold text-[30px]'>Testimonials</h1>

<>
      <Swiper navigation={true}
       modules={[Navigation]} 
       className="mySwiper"
       loop={true}
       >
        {
            testimonialsData.map((data) =>{
                console.log(data)
                return(
                <SwiperSlide key={data.name}>
                    <div className='text-center'>
                       <div className='flex justify-center'>
                       <img className='w-[100px] h-[100px] rounded-full' src={data.image} alt="" />
                       </div>
                        <h2>{data.name}</h2>
                        <p>{data.description}</p>
                        <div>
                            {data.rating}
                        </div>
                    </div>
                </SwiperSlide>


)


})
}
       
      </Swiper>
    </>
    </div>
  )
}

export default Testimonials