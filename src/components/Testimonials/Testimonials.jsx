import React from "react";
import "./Testimonials.css";
import avt1 from "../../assets/avatar1.jpg";
import avt2 from "../../assets/avatar2.jpg";
import avt3 from "../../assets/avatar3.jpg";
import avt4 from "../../assets/tikuprofile.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avt1,
    name: "Shree Pandey",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti amet ratione a dolorem non corrupti assumenda quo facere soluta ex excepturi, modi et tempora ipsa ea nemo, impedit iure?",
  },
  {
    avatar: avt2,
    name: "Anjal Thapa",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti amet ratione a dolorem non corrupti assumenda quo facere soluta ex excepturi, modi et tempora ipsa ea nemo, impedit iure?",
  },
  {
    avatar: avt3,
    name: "Parasar Baral",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti amet ratione a dolorem non corrupti assumenda quo facere soluta ex excepturi, modi et tempora ipsa ea nemo, impedit iure?",
  },
  {
    avatar: avt4,
    name: "Ural Gooner Shrestha",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum deleniti amet ratione a dolorem non corrupti assumenda quo facere soluta ex excepturi, modi et tempora ipsa ea nemo, impedit iure?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from friends</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="friends-avtar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="friend-name">{name}</h5>
              <small className="friend-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
