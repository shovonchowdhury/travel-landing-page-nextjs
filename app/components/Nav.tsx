"use client";
import React, { useEffect, useState } from "react";
import { TbAirBalloon } from "react-icons/tb";
import { navLinks } from "../constent/navLinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};
export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={` ${
        navBg && "bg-blue-950  shadow-md"
      } h-[12vh] transition-all duration-300 z-[1000] fixed w-full`}
    >
      <div className="h-full flex items-center justify-between w-[90%] xl:w-[80%]  mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-rose-500 w-10 h-10 rounded-full flex justify-center items-center">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white text-xl md:text-2xl font-bold ">GoTrip</h1>
        </div>
        {/* NavLink */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.id}>
              <p className="relative text-white text-base font-medium w-fit block group">
                {link.name}
                <span className="absolute bottom-0 left-0 block h-[3px] bg-yellow-300 w-full transform scale-x-0 group-hover:scale-x-100 transition duration-300 origin-center"></span>
              </p>
            </Link>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4 items-center">
          <button className="bg-white px-8 py-2 md:px-12 md:py-2.5 rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
            Book Now
          </button>
          <button>
            <HiBars3BottomRight
              onClick={openNav}
              className="text-white w-8 h-8 cursor-pointer block lg:hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
