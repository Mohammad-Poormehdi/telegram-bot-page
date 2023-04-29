import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, EffectCards, Pagination } from "swiper";

const images = [
  { src: "/images/placeholder.jpg", id: 1 },
  { src: "/images/placeholder.jpg", id: 2 },
  { src: "/images/placeholder.jpg", id: 3 },
  { src: "/images/placeholder.jpg", id: 4 },
  { src: "/images/placeholder.jpg", id: 5 },
];

export default function Carousel() {
  return (
    <>
      <div className="max-md:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          initialSlide={Math.floor(images.length / 2)}
        >
          {images.map((image) => (
            <SwiperSlide>
              <Image
                key={image.id}
                src={image.src}
                alt="screen shot"
                width={300}
                height={300}
                className="mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          slidesPerView={1}
          initialSlide={Math.floor(images.length/2)}
          cardsEffect={
            {slideShadows:false}
          }
          modules={[EffectCards]}
          className="mySwiper"
          
        >
          {images.map((image) => (
            <SwiperSlide>
              <div className="">
                <Image
                  key={image.id}
                  src={image.src}
                  alt="screen shot"
                  width={300}
                  height={300}
                  className="mx-auto shadow-xl border"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
