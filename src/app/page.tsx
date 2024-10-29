// import BlogSection from "@/component/Blog";
// import AboutUs from "@/component/HomeAbout";
// import WhyChooseUs from "@/component/WhyChossus";
import VideoSection from "@/component/VideoSection";
import React from "react";
import ShowCase from "@/component/Products";
// import TypeSection from "@/component/TypeSection";
import VideoSectionBanner from "@/component/VideoSectionBanner";
import QualityAssurance from "@/component/QualityAssurance";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("@/component/HomeAbout"), {
  loading: () => <p>Loading...</p>,
});

const WhyChooseUs = dynamic(() => import("@/component/WhyChossus"), {
  loading: () => <p>Loading...</p>,
});

const TypeSection = dynamic(() => import("@/component/TypeSection"), {
  loading: () => <p>Loading...</p>,
});

const BlogSection = dynamic(() => import("@/component/Blog"), {
  loading: () => <p>Loading...</p>,
});

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