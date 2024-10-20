'use client'

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const products = [
  {
    name: "Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Jamun Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Mustard Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Multiflora Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Litchi Honey",
    imageUrl: "/image/honey.png",
  },
];

function ShowCase() {
  const autoplay = Autoplay({ delay: 3000 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false }, [autoplay]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [hover, setHover] = useState(-1);

  const onSelect = () => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <main className="w-full h-full flex flex-col items-center relative font-harman">
      <div className="flex flex-col items-center">
        <h1 className="lg:text-6xl md:border-b-[6px] border-double border-[#013e52] text-4xl text-[#013e52] mt-3 text-center">
          Discover Our Honey
        </h1>
      </div>

      <div
        className="overflow-hidden relative mt-10 w-full user-select-none"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {products.map((product, index) => (
            <div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
              key={index}
              className="embla__slide flex-shrink-0 w-full p-4"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className={`w-full h-auto max-w-[35rem] object-cover mx-auto transition-transform duration-1000 cursor-pointer ${hover === index ? 'scale-110' : ''}`}
              />

              <div className="flex leading-3 flex-col">
                <h2 className={`text-3xl mt-3 text-center ${hover === index ? 'text-[#003e52]' : 'text-[#e75542]'} transition-colors duration-500`}>
                  {product.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-4">
        <Link href={'/products'} >
          <div className="w-fit bg-gradient-to-r h-12 px-6 flex justify-center items-center from-amber-500 text-xl to-[#ffde4a] text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Shop More
          </div>
        </Link>
      </div>
    </main>
  );
}

export default ShowCase;
