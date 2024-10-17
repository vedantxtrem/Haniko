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
      <header className="header-background">
        <div className="header-content">
          <h1 className="text-orange-700">About Haniko</h1>
          <p className="subheading text-white">Discover the journey, values, and commitment to quality behind our honey.</p>
          <p className="text-orange-700">👇 Scroll down to see more.</p>
        </div>
      </header>

      <main className="">
        <ul id="cards">
          {data.map((item, index) => (
            <li key={index} className="card" id="card_1">
              <div className="card__content pt-3 sm:pt-0">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <figure>
                  <img src={item.image} alt="Image" className="md:max-h-[40vw] md:min-h-[40vw] max-h-[59vw] min-h-[59vw]" />
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
