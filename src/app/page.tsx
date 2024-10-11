'use client'

import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import WhyChooseUs from '@/component/WhyChossus'
import VideoSection from '@/component/VideoSection'
import React, { useEffect } from 'react'
import ShowCase from "@/component/Products"
import useStoreColor from "@/store/store"

function page() {
  const { changeColor } = useStoreColor()
  useEffect(() => {
    changeColor("#fff7ed")
  }, [])
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      {/* <Product/> */}
      <ShowCase />
      <VideoSection />
      <AboutUs />
      <BlogSection />
    </div>
  )
}

export default page