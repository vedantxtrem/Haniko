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
          <Types
            imageSrc="https://brokenovenbaking.com/wp-content/uploads/2022/11/honey-bun-cookies-14.jpg"
            title="Linden Honey"
            description="Linden honey has a strong and very distinctive aroma. At first sniff…"
            bgColor="bg-[#ffdfcc]"
          />
          <Types
            imageSrc="https://www.tasteofhome.com/wp-content/uploads/2024/02/GettyImages-1684517871-does-honey-expire-JVedit.jpg"
            title="Jumun Honey"
            description="Jamun honey is famous for its antihypoxic activity. A specific dose…"
            bgColor="bg-[#dfe3ec]"
          />
        </div>

        <div className="w-3/4 mx-auto gap-5 flex flex-col md:flex-row">
          <Types
            imageSrc="https://img.freepik.com/free-photo/honey-jar-with-wooden-honey-dipper_23-2149442339.jpg"
            title="Organic Honey"
            description="Organic honey is highly nutritious honey made by bees that…"
            bgColor="bg-[#f8f8f8]"
          />
          <Types
            imageSrc="https://cdn.shopify.com/s/files/1/0020/7978/5023/files/a-jar-of-brightland-raw-california-honey.jpg?v=1642822491"
            title="Flower Honey"
            description="There are many different varieties of flower honey available…"
            bgColor="bg-[#fecb41]"
          />
        </div>
      </div>
      <WhyChooseUs />
      <ShowCase />
      <VideoSection />
      <AboutUs />
      <BlogSection />
    </div>
  )
}

export default page