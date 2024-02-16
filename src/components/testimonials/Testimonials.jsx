import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/team2.jpg'
import AVTR4 from '../../assets/team5.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [ 
  {
    avatar: AVTR1,
    name: 'Mercy',
    review: 'Great job. I love all your work. They really look great. Keep up the good work!'
  },
  {
    avatar: AVTR4,
    name: 'Joel',
    review: 'Nice one bro. You are really doing well in this web development. I like your work. keep it up bro.'
  }
]

const Testimonials = () => { 
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar, name, review}, index) => { 
          return ( 
            <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} />
           </div>
           <h5 className='client_name'>{name}</h5>
            <small className="client_review">{review}</small>
        </SwiperSlide>
          )
        })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials