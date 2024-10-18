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
import VideoSectionBanner from "@/component/VideoSectionBanner";

function page() {
  //test
  return (
    <>
      <div>
        <VideoSectionBanner />
        <WhyChooseUs />
        <ShowCase />
        <AboutUs />
        <TypeSection />
        <VideoSection />
        <BlogSection />
      </div>
    </>
  );
}

export default page;
