"use client";
import React from "react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { reviewData } from "../data/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

export default function ReviewSlide() {
  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="md:w-[450px] w-[90%] "
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl ">
            <div className="w-[80%] mx-auto mt-5 mb-5 md:mt-16 md:mb-16">
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {data.review}
              </p>
              <div className="flex items-center mt-4">
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
                <FaStar className="md:w-6 md:h-6 w-3 h-3 text-yellow-600" />
              </div>
              <div className="mt-10">
                <div className="flex items-center gap-4">
                  <Image
                    src={data.image}
                    alt="client"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-semibold">
                      {data.name}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-base">
                      Web Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
