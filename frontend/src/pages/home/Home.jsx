import React from "react";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Faq />
      <Marquee />
    </>
  );
}
