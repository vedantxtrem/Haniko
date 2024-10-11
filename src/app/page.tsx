"use client"

import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import WhyChooseUs from '@/component/WhyChossus'
import VideoSection from '@/component/VideoSection'
import React, { useEffect } from 'react'
import ShowCase from "@/component/Products"
import HoneyTypes from '@/component/Types'
// import useStoreColor from "@/store/useStore"

function page() {

  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      {/* <Product/> */}
      <ShowCase />
      <VideoSection />
      <AboutUs />
      <HoneyTypes/>
      <BlogSection />
    </div>
  )
}

export default page