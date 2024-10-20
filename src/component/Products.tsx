'use client'

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

function ShowCase() {
  const autoplay = Autoplay({ delay: 3000 });

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: false }, [autoplay]);
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
        {/* <img
          src={'/image/showcase.png'}
          alt="showcase"
          className="w-[100%] md:w-[20rem] h-auto object-cover"
        /> */}
        <h1 className="lg:text-6xl border-b-[6px] border-double border-[#013e52] text-4xl text-[#013e52] mt-3 text-center">
          Discover Our Honey
        </h1>
      </div>

      <div
        className="overflow-hidden relative mt-10 w-[100%] user-select-none"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {[...Array(10)].map((_, index) => (
            <div
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(-1)}
              key={index}
              className="embla__slide flex-shrink-0 w-full p-4"
            >
              <img
                src={'/image/honey.png'}
                alt="bottle"
                className={`w-full h-auto max-w-[35rem] object-cover mx-auto transition-transform duration-1000 cursor-pointer ${hover === index ? 'scale-110' : ''}`}
              />

              <div className="flex leading-3 flex-col">
                <h2 className={`text-3xl mt-3 text-center ${hover === index ? 'text-[#003e52]' : 'text-[#e75542]'} transition-colors duration-500`}>
                  Our Fresh Honey
                </h2>

                <h2 className={`text-2xl text-center ${hover === index ? 'text-[#e75542] ' : 'text-[#003e52]'} transition-colors duration-500`}>
                  Blend
                </h2>
              </div>


              <p className="text-base text-[#4a4a4a] text-center">
                A delightful blend of flavors and textures that perfectly
                complements your favorite foods.
              </p>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-1">
        <Link href={'/products'} className="px-10 underline underline-offset-2 font-medium text-[#003e52]">
          Shop More...
        </Link>
        </div>
      </div>
    </main >
  );
}

export default ShowCase;