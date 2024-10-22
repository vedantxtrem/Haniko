"use client";

import BlogSection from "@/component/Blog";
import AboutUs from "@/component/HomeAbout";
import WhyChooseUs from "@/component/WhyChossus";
import VideoSection from "@/component/VideoSection";
import React from "react";
import ShowCase from "@/component/Products";
import TypeSection from "@/component/TypeSection";
import VideoSectionBanner from "@/component/VideoSectionBanner";
import QualityAssurance from "@/component/QualityAssurance";

function page() {
  //test
  return (
    <>
      <div className="overflow-x-hidden">
        <VideoSectionBanner />
        <WhyChooseUs />
        <ShowCase />
        <AboutUs />
        <TypeSection />
        <VideoSection />
        <QualityAssurance />
        <BlogSection />
      </div>
    </>
  );
}

export default page;