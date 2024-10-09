import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import WhyChooseUs from '@/component/WhyChossus'
import VideoSection from '@/component/VideoSection'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <Product/>
      <VideoSection />
      <AboutUs/>
      <BlogSection/>
    </div>
  )
}

export default page