import BlogSection from '@/component/Blog'
import HeroSection from '@/component/Header'
import AboutUs from '@/component/HomeAbout'
import Product from '@/component/Productsection'
import React from 'react'

function page() {
  return (
    <div>
      <HeroSection/>
      <Product/>
      <AboutUs/>
      <BlogSection/>
    </div>
  )
}

export default page