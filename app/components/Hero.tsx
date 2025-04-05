import React from "react";
import SearchBox from "./SearchBox";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70"></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full  h-full object-cover"
      />

      {/* text content */}
      <div className="absolute z-[100] top-[0px] left-[50%] w-full h-full translate-x-[-50%] tranlate-y-[-50%]">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] md:text-[35px] lg:text-[45px] mb-4 md:mb-0 text-center text-white font-bold uppercase tracking-[0.7rem]">
              Lets Enjoy The Nature
            </h1>
            <p className="text-center text-white md:text-base text-lg font-normal [word-spacing:5px]">
              Get the best prices on 2,000,000+ properties,worldwide
            </p>
          </div>
          {/* Search Box */}
          <SearchBox />
          <Link
            href={"#"}
            className="bg-rose-600 text-white px-14 md:px-28 -mt-4 py-2.5 overflow-hidden rounded relative hover:bg-gradient-to-r hover:from-red hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300 group"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 bg-white transition-all duration-1000 transform opacity-10 translate-x-12 rotate-12 group-hover:-translate-x-60 ease"></span>
            <span className="font-bold relative">Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
