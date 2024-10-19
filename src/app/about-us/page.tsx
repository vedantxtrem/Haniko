'use client'
import { title } from "process";
import './about.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import { Fauna_One, Hammersmith_One, Nunito_Sans, Playfair } from "next/font/google";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

const hammer = Hammersmith_One({
  subsets: ['latin'],
  weight: ["400"],
})

const fauna = Fauna_One({
  subsets: ['latin'],
  weight: ["400"],
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
})

const ScrollSections = () => {


  const data = [
    {
      title: "Our Story",
      description: "Haniko is more than just a honey brand; it's the culmination of decades of passion, dedication, and expertise in the world of honey. As a subsidiary of M B Exim Pvt. Ltd., a premium exporter of bulk honey with nearly three decades of experience, Haniko carries forward a rich legacy of quality and trust. Our parent company, M B Exim, has built its reputation by supporting small businesses and sharing the exceptional quality of Indian honey with the world.",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fHww",
      background: "#FC9C0C",
      text: "#1b0a02"
    },
    {
      title: "Supporting Sustainable Beekeping",
      description: "Haniko isn’t just about honey; it’s about the ecosystem that creates it. We work closely with beekeepers to promote sustainable practices, ensuring that the bees thrive while we harvest honey responsibly. Our focus on ethical beekeeping helps maintain the health of bee populations and supports the livelihoods of local communities.",
      image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVla2VlcGVyfGVufDB8fDB8fHww',
      background: "#125734",
      text: "#ebebeb"

    },
    {
      title: "Quality Assurance",
      description: "From hive to jar, every step of our process is meticulously monitored to ensure the highest quality honey reaches your table. We are transparent about our processes, with certifications and rigorous testing at every stage to maintain the integrity of our honey.",
      image: "https://www.shutterstock.com/shutterstock/photos/635029784/display_1500/stock-photo-appetizer-bruschetta-with-pear-honey-walnut-and-cottage-cheese-on-white-board-635029784.jpg",
      background: "#3F4122",
      text: "#FC9C0C"

    },
  ]

  return (
    <>
      <header>
        <div>
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-30">
            <div className="w-full flex justify-center items-center">
              {/* Text Section */}
              <div className="z-20 w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-amber-700">
                  <span className="text-amber-500 text-8xl font-harman">About Haniko</span>
                  <br />
                  <span className="text-gray-900 font-harman">From our Hive</span>
                </h1>
                <p className={`${nunito.className} text-gray-600 mb-8 max-w-lg `}>
                  Experience the finest honey sourced directly from our hives. Crafted with love, delivered with care.
                </p>
                <img
                  src="https://xplore2k22.netlify.app/assets/scroll.c5d146f6.gif"
                  alt=""
                  className="w-20  animate-bounce-slow cursor-pointer"
                />

              </div>

              {/* Image Section */}
              {/* <div className="relative z-20">
                <Image
                  src="https://hanio.peerduck.com/wp-content/uploads/2021/02/Group-172-1476x1536.png"
                  alt="Assorted Honey Products"
                  width={isMobile ? 700 : 1476}
                  height={isMobile ? 800 : 1536}
                  className="rounded-full"
                  priority
                />
              </div> */}
            </div>

            {/* Decorative Elements with Animations */}
            <div className="absolute left-0 top-0 w-24 h-24 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse-slow"></div>
            <div className="absolute right-0 bottom-0 w-48 h-48 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 z-10 animate-bounce-slow"></div>

            {/* Honeycomb Pattern */}
            <div className="absolute left-10 rotate-45 top-1/4 grid grid-cols-5 gap-2 opacity-20 z-10 animate-honeycomb">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-4 h-4  bg-amber-400 rounded-full"></div>
              ))}
            </div>


          </div>


        </div>
      </header>

      <main className="">
        <ul id="cards">
          {data.map((item, index) => (
            <li
              key={index}
              className="card  overflow-hidden"
              id="card_1"
              style={{ background: item.background }}
            >
              <div className="card__content">
                <div className="my-auto ">
                  <h2
                    className="font-harman stroke"
                    style={{ color: item.text }}
                  >{item.title}</h2>
                  <p
                    className={`${nunito.className} font-medium`}
                    style={{ color: item.text }}
                  >{item.description}</p>
                </div>
                <figure className="">
                  <img src={item.image} alt="Image" className=" md:max-h-[40vw] md:min-h-full max-h-[60vw] min-h-[60vw]" />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
    
    </>
  );
};



export default ScrollSections;
