"use client"

import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import WhyChooseUs from '@/component/WhyChossus'
import VideoSection from '@/component/VideoSection'
import React, { useEffect } from 'react'
import ShowCase from "@/component/Products"
import Types from "@/component/Types"
// import useStoreColor from "@/store/useStore"

function page() {

  return (
    <div>
      <HeroSection />
      <div className="flex flex-col gap-10">
        <div className="w-3/4 mx-auto gap-5 flex flex-col md:flex-row">
          <Types />
          <Types />
        </div>

        <div className="w-3/4 mx-auto gap-5 flex flex-col md:flex-row">
          <Types />
          <Types />
        </div>
      </div>
      <WhyChooseUs />
      <ShowCase />
      <VideoSection />
      <AboutUs />
      <HoneyTypes/>
      <BlogSection />
    </div>
  )
}

export default page