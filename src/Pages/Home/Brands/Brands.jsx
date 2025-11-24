import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from '../../../assets/brands/amazon.png'
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const logos = [amazon,casio, moonstar, randstad, star, startPeople]
const Brands = () => {
  return (
    <div className="my-12">
      <h3 className="mb-10 text-3xl font-extrabold text-center text-[#03373D]">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
