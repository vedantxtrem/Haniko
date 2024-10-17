"use client";

import BlogSection from "@/component/Blog";
import HeroSection from "@/component/Header";
import AboutUs from "@/component/HomeAbout";
import Product from "@/component/Productsection";
import WhyChooseUs from "@/component/WhyChossus";
import VideoSection from "@/component/VideoSection";
import React from "react";
import ShowCase from "@/component/Products";
import TypeSection from "@/component/TypeSection";
import Navbar from "@/component/Navbar";
import Contact from "@/component/Contact";
import VideoSectionBanner from "@/component/VideoSectionBanner";

function page() {
  //test
  return (
    <>
      <div>
        <VideoSectionBanner />
        <VideoSection />
        <WhyChooseUs />
        <ShowCase />

        <AboutUs />
        <TypeSection />
        <BlogSection />
        <Contact />
      </div>
    </>
  );
}

export default page;
