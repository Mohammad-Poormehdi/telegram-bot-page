import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";



// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>
        <SwiperSlide>
            <Image src='/images/placeholder.jpg' alt="mobile" width={600} height={600} className="w-full h-auto" />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
