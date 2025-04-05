import React from "react";
import SectionHeading from "./SectionHeading";
import { hotelsData } from "../data/data";
import HotelCard from "./HotelCard";

export default function Hotel() {
  return (
    <div className="pt-20 pb-20">
      <SectionHeading heading="Recommanded Hotels" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {hotelsData.map((data, ind) => (
          <div
            key={data.id}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${ind * 100}`}
          >
            <HotelCard hotel={data} />
          </div>
        ))}
      </div>
    </div>
  );
}
