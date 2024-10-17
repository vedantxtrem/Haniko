'use client'
import { title } from "process";
import './about.css'
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/component/Navbar";
import { FaArrowDown } from "react-icons/fa";

const ScrollSections = () => {

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = [
    {
      title: "Our Story",
      description: "Haniko is more than just a honey brand; it's the culmination of decades of passion, dedication, and expertise in the world of honey. As a subsidiary of M B Exim Pvt. Ltd., a premium exporter of bulk honey with nearly three decades of experience, Haniko carries forward a rich legacy of quality and trust. Our parent company, M B Exim, has built its reputation by supporting small businesses and sharing the exceptional quality of Indian honey with the world.",
      image: "https://images.unsplash.com/photo-1471943311424-646960669fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbmV5fGVufDB8fDB8fHww"
    },
    {
      title: "Supporting Sustainable Beekeping",
      description: "Haniko isn’t just about honey; it’s about the ecosystem that creates it. We work closely with beekeepers to promote sustainable practices, ensuring that the bees thrive while we harvest honey responsibly. Our focus on ethical beekeeping helps maintain the health of bee populations and supports the livelihoods of local communities.",
      image: 'https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVla2VlcGVyfGVufDB8fDB8fHww'
    },
    {
      title: "Quality Assurance",
      description: "From hive to jar, every step of our process is meticulously monitored to ensure the highest quality honey reaches your table. We are transparent about our processes, with certifications and rigorous testing at every stage to maintain the integrity of our honey.",
      image: "https://assets.bonappetit.com/photos/608c1f0b6863f9a7d9726bdf/16:9/w_2560%2Cc_limit/Basically-HONEY.jpg"
    },
  ]

  return (
    <>
      <header>
        <div>
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-30">
            <div className="w-full flex justify-center items-center">
              {/* Text Section */}
              <div className="z-20 w-full flex flex-col justify-center items-center ">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-amber-700">
                  <span className="text-amber-500 text-8xl">About Haniko</span>
                  <br />
                  <span className="text-gray-900">from our hive</span>
                </h1>
                <p className="text-gray-600 mb-8 max-w-lg">
                  Experience the finest honey sourced directly from our hives. Crafted with love, delivered with care.
                </p>
                <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600  transform hover:scale-105 animate-bounce duration-1000 flex justify-center items-center gap-4 ">
                  view all <FaArrowDown />
                </button>

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
            <li key={index} className="card" id="card_1">
              <div className="card__content">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <figure>
                  <img src={item.image} alt="Image" className="md:max-h-[40vw] md:min-h-[40vw] max-h-[60vw] min-h-[60vw]" />
                </figure>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <aside>

      </aside>
    </>
  );
};

export default ScrollSections;
