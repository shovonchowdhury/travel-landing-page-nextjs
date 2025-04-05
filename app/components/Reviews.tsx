import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlide from "./ReviewSlide";

export default function Reviews() {
  return (
    <div className="pt-20 pb-20 flex  items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] grid items-center grid-cols-1 lg:grid-cols-2 mx-auto gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us?
          </h1>
          <p className="text-gray-200 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt fugiat praesentium dolores facilis delectus modi culpa
            aliquid deserunt ad!
          </p>
          {/* ratings */}
          <div className="mt-6 flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <ReviewSlide />
        </div>
      </div>
    </div>
  );
}
