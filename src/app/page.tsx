"use client"

import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import WhyChooseUs from '@/component/WhyChossus'
import VideoSection from '@/component/VideoSection'
import React from 'react'
import ShowCase from "@/component/Products"
import TypeSection from '@/component/TypeSection'

function page() {
  //test
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <ShowCase />
      <VideoSection />
      <AboutUs />
      <TypeSection />
      <BlogSection />
    </div>
  )
}

export default page