import React from "react";
import About from "./About/About";
import Faq from "./Faq/Faq";
import Hero from "./Hero/Hero";
import Marquee from "./Marquee/Marquee";
import AboutUs from "./AboutUs/AboutUs";
import TestimonialSection from "./Testimonials/Testimonials";
import Programs from "./Programs/Programs";
import Banner from "./Banner/Banner";
import NewsletterSubscribe from "./NewsLetter/NewsLetter";
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutUs />
      <About />
      <Faq />
      <TestimonialSection />
      <Programs />
      <Banner />
      <NewsletterSubscribe />
    </>
  );
}
