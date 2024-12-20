"use client";

import Promotion from "@/component/Promotion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const images = [
  "/product/screens.webp",
];

const products = [
  {
    name: "Honey",
    front: "/product/pure-front.webp",
    back: "/product/pure-back.webp",
  },
  {
    name: "Jamun Honey",
    front: "/product/jamun-front.webp",
    back: "/product/jamun-back.webp",
  },
  {
    name: "Mustard Honey",
    front: "/product/mustard-front.webp",
    back: "/product/mustard-back.webp",
  },
  {
    name: "Multiflora Honey",
    front: "/product/multiflora-front.webp",
    back: "/product/multiflora-back.webp",
  },
  {
    name: "Litchi Honey",
    front: "/product/litchi-front.webp",
    back: "/product/litchi-back.webp",
  },
];

interface ProductCardProps {
  name: string;
  front: string;
  back: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, front, back }) => {
  return (
    <div className="w-full sm:w-[45%] md:w-[47%] lg:w-[600px] flex flex-col justify-center items-center p-2 rounded-lg">
      <div className="w-full text-center text-black relative">
        <div className="w-full flex justify-center items-center">
          <div className="group h-[250px] sm:h-[300px] md:h-[450px] w-[200px] sm:w-[250px] md:w-[380px] [perspective:1000px] flex justify-center items-center">
            <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side */}
              <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex justify-center items-center">
                <Image
                  loading="eager"
                  sizes="100vw"
                  height={0}
                  width={0}
                  src={front}
                  alt={name}
                  className="w-full h-full object-contain rounded-xl" />
              </div>

              {/* Back side */}
              <div className="absolute inset-0 h-full w-full text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <Image
                    loading="eager"
                    sizes="100vw"
                    height={0}
                    width={0}
                    src={back}
                    alt={name}
                    className="w-full h-full object-contain rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-sm sm:text-md md:text-lg mt-2 text-black uppercase">
        {name}
      </h2>

      <Link
        href="/contact"
        className="mt-3 bg-yellow-400 text-black font-bold text-xs sm:text-sm md:text-lg px-4 py-1 sm:px-6 sm:py-2 rounded-3xl hover:bg-white border-2 border-yellow-400 transition-colors duration-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const autoplay = Autoplay({ delay: 3000 });

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true }, [autoplay]);

  const onSelect = () => {
    if (!emblaApi) return;
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="min-h-screen w-screen text-white overflow-x-hidden">
      {/* Carousel Div */}
      <div className="w-full bg-[#ffbd59] mx-auto">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container__shop my-16 lg:my-0 lg:mt-20 md:mb-2">
            {images.map((image, index) => (
              <div className="embla__slide__shop user-select-none flex items-center justify-center" key={index}>
                <Image
                  src={image}
                  height={0}
                  width={0}
                  sizes="100vw"
                  alt={`Slide ${index + 1}`}
                  className="w-full lg:h-[500px] md:object-contain rounded-lg"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
          .embla {
            overflow: hidden;
            width: 100%;
          }
          .embla__container__shop {
            display: flex;
          }
          .embla__slide__shop {
            min-width: 100%;
            position: relative;
            box-sizing: border-box; /* Ensure padding/margins don't affect width */
          }
          .embla__slide img {
            width: 100%;
            height: auto; /* Maintain aspect ratio */
          }
        `}</style>

      <Promotion />

      {/* Product Section */}
      <div className="w-full h-full flex flex-col justify-center items-center p-4 sm:p-6 md:p-12">
        <div className="w-full h-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-x-16 lg:gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              front={product.front}
              back={product.back}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
