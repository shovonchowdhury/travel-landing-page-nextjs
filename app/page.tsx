"use client";
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Destination from "./components/Destination";
import Hotel from "./components/Hotel";
import WhyChoose from "./components/WhyChoose";
import Reviews from "./components/Reviews";
import News from "./components/News";
import NewsLetter from "./components/NewsLetter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Reviews />
      <News />
      <NewsLetter />
    </div>
  );
}
