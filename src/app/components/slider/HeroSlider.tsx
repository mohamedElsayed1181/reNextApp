"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

export default function HeroSlider() {
  const images = [
    "/img/slider1.jpeg",
    "/img/slider2.jpeg",
    "/img/slider3.jpeg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="w-full h-[400px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-[500px]">
            <Image
              src={image}
              alt="banner"
              fill
              className="object-cover"
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
