"use client";
import React from "react";
import { navLinks } from "../constent/navLinks";
import { link } from "fs";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
export default function MobileNav({ showNav, closeNav }: Props) {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  console.log(showNav);
  return (
    <div>
      <div
        className={`w-full ${navOpen} transform transition-all duration-500 bg-black h-screen opacity-70 z-[1002] inset-0 fixed`}
      ></div>
      {/* navLinks */}
      <div
        className={`fixed ${navOpen} text-white flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-rose-900 z-[1006] gap-6 transform transition-all duration-500 delay-300`}
      >
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <p className="text-white text-xl sm:text-3xl ml-12 border-b-[1.5px] pb-1 w-fit">
              {link.name}
            </p>
          </Link>
        ))}

        {/* close button */}

        <CgClose
          onClick={closeNav}
          className="text-white absolute top-[1.2rem] right-[1.2rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
}
