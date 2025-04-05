"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationData } from "../data/data";
import Image from "next/image";
export default function DestinationSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 3,
      slidesToSlide: 1,
    },
    mobileLg: {
      breakpoint: { max: 764, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => (
        <div key={data.id} className="m-3">
          <div className="relative h-[400px]">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
            {/* Image */}
            <Image
              src={data.image}
              alt={data.country}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />
            {/* Text Content */}
          </div>
          <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
          <p className="text-sm text-gray-600">{data.travelers} Travelers</p>
        </div>
      ))}
    </Carousel>
  );
}
