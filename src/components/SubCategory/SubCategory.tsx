"use client";

import { useGetAllSubCategory } from "@/src/hooks/useGetAllSubCategory";
import { TSubCategory } from "@/src/types/category";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SubCategory() {
  const { data, isLoading, isError } = useGetAllSubCategory();

  if (isLoading) {
    return <div className="flex justify-center py-10">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex justify-center py-10">Something went wrong</div>
    );
  }

  return (
    <section className="w-full px-6 py-8 overflow-hidden">
      <h2
        className="
        text-3xl
        font-bold
        mb-8
      "
      >
        Sub Categories
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 6,
          },
        }}
        className="w-full"
      >
        {data?.map((subCategory: TSubCategory) => (
          <SwiperSlide key={subCategory._id}>
            <Link
              href={`/subcategory/${subCategory._id}`}
              className="
                  block
                  bg-white
                  border
                  rounded-xl
                  p-5
                  text-center
                  h-full
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition
                "
            >
              <div
                className="
                    w-16
                    h-16
                    mx-auto
                    mb-4
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                  "
              >
                <span
                  className="
                      text-2xl
                      font-bold
                    "
                >
                  {subCategory.name.charAt(0)}
                </span>
              </div>

              <h3
                className="
                    text-sm
                    font-semibold
                    line-clamp-2
                  "
              >
                {subCategory.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
