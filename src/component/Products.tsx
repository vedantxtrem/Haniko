'use client'

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

function ShowCase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [hover, setHover] = useState(-1); // Initialize with -1 for no hover

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
    <main className="w-full h-full flex flex-col items-center relative  mb-10 font-harman">
      <div className="flex flex-col items-center mt-10">
        <img
          src={'/image/showcase.png'}
          alt="showcase"
          className="w-[90%] md:w-[25rem] h-auto object-cover"
        />
        <h1 className="text-3xl text-[#013e52] mt-3 text-center">
          Discover Our Honey
        </h1>
      </div>

      <div
        className="overflow-hidden relative mt-10 w-[75%] user-select-none"
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
                src={'/image/bottle.png'}
                alt="bottle"
                className={`w-full h-auto max-w-[15rem] object-cover mx-auto transition-transform duration-1000 cursor-pointer ${hover === index ? 'scale-110' : ''}`}
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
      </div>

      {/* Previous and Next buttons */}
      <button
        className={`embla__prev absolute left-4 top-1/2 transform -translate-y-1/2  p-2 transition duration-200`}
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={prevBtnDisabled}
      >
        <img src={'/image/prev.png'} alt="previous" className="" />
      </button>

      <button
        className={`embla__next absolute right-4 top-1/2 transform -translate-y-1/2  p-2  transition duration-200`}
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={nextBtnDisabled}
      >
        <img src={'/image/next.png'} alt="next" className="" />
      </button>
    </main >
  );
}

export default ShowCase;