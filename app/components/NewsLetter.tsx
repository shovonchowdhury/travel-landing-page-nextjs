import React from "react";
import { BsEnvelopePaper } from "react-icons/bs";

export default function NewsLetter() {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="w-16 h-16 text-white" />
      <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-10 tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="mt-3 text-white text-xs sm:text-sm">
        Sign up and we&apos;ll send the best deals to you
      </p>

      <div className="w-full">
        <input
          type="text"
          className="bg-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto mt-8 px-6 py-3.5 rounded-lg outline-none"
          placeholder="Email"
        />
        <button className="bg-blue-900 text-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto mt-3 px-6 py-3.5 rounded-lg outline-none hover:bg-blue-950 transition-all duration-200 cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}
