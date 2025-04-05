"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false);
  const closeNav = () => setShowNav(false); // Close when the close button is clicked
  const openNav = () => setShowNav(true); // Open when the hamburger icon is clicked
  return (
    <div>
      <Nav openNav={openNav} />
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </div>
  );
}
