'use client'

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const products = [
  {
    name: "Pure",
    imageUrl: "/product/pure-front.png",
  },
  {
    name: "Jamun",
    imageUrl: "/product/jamun-front.png",
  },
  {
    name: "Mustard",
    imageUrl: "/product/mustard-front.png",
  },
  {
    name: "Multiflora",
    imageUrl: "/product/multiflora-front.png",
  },
  {
    name: "Litchi",
    imageUrl: "/product/litchi-front.png",
  },
];

function ShowCase() {
  const autoplay = Autoplay({ delay: 4500 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false }, [autoplay]);
  const [hover, setHover] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    <main className="w-full h-full flex flex-col items-center relative ">
      <div className="flex flex-col items-center">
        <h1 className="  mt-3  text-5xl lg:text-6xl text-[#013e52]  text-center font-bold">
          Discover Our Honey
        </h1>
      </div>

    

      <div
        className="overflow-hidden relative mt-5 md:mt-10 w-full user-select-none"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {products.map((product, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
                key={index}
                className="md:h-[600px] embla__slide flex-shrink-0 w-full p-4 flex flex-col items-center justify-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={`h-auto object-cover mx-auto  duration-1000 cursor-pointer transition-all w-1/2  ${isActive ? 'md:w-[35%]' : 'md:w-[30%]'} ${hover === index ? 'scale-105' : ''}`}
                />

                <div className="flex leading-3 flex-col mt-6 gap-1 font-bold">
                  <h2 className={`text-3xl text-center ${hover === index ? 'text-[#003e52]' : 'text-[#e75542]'} font-bold transition-colors duration-500`}>
                    {product.name}
                  </h2>

                  <h2 className={`text-3xl text-center ${hover === index ? 'text-[#e75542]' : 'text-[#003e52]'} font-bold transition-colors duration-500`}>
                    Honey
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-4 ">
        <Link href={'/products'}>
          <div className="w-fit font-medium bg-gradient-to-r h-12 px-6 flex justify-center items-center from-amber-500 text-xl to-[#ffde4a] text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Shop More
          </div>
        </Link>
      </div>
    </main>
  );
}

export default ShowCase;
