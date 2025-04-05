"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

export default function HotelCard({ hotel }: Props) {
  const [favourite, setFavourite] = useState(false);
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer overflow-hidden group">
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
        />
        {/* overlay */}
        <div className="absolute w-full h-full bg-black opacity-20 inset-0"></div>
        {/* favourite button */}
        <div
          onClick={() => setFavourite(!favourite)}
          className="absolute w-8 h-8 bg-white z-10 top-4 right-4 rounded-full flex justify-center items-center"
        >
          <FaHeart className={`w-3 h-3 ${favourite && "text-rose-500"}`} />
        </div>
      </div>

      {/* Content */}
      <div>
        <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-800 mt-3 font-medium mb-6">
          {hotel.location}
        </p>

        <div className="flex items-center gap-2">
          <div className="px-2 py-2 bg-blue-800 rounded-md text-white text-xs">
            {hotel.rating}
          </div>
          <p className="text-sm text-gray-800 ">Exceptional</p>
          <p className="text-sm font-bold text-gray-800">
            {hotel.reviews} Reviews
          </p>
        </div>

        <p className="mt-3 text-gray-700 font-medium">
          Strating from{" "}
          <span className="text-blue-600 font-bold">US${hotel.price}</span>
        </p>
      </div>
    </div>
  );
}
