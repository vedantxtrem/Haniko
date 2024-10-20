"use client";

import Promotion from "@/component/Promotion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const images = [
  "/image/Product_Page_Banner-5.jpg",
  "/image/Product_Page_Banner-5.jpg",
  "/image/Product_Page_Banner-5.jpg",
];

const products = [
  {
    name: "Honey",
    front: "/product/pure-front.png",
    back: "/product/pure-back.png",
  },
  {
    name: "Jamun Honey",
    front: "/product/jamun-front.png",
    back: "/product/jamun-back.png",
  },
  {
    name: "Mustard Honey",
    front: "/product/mustard-front.png",
    back: "/product/mustard-back.png",
  },
  {
    name: "Multiflora Honey",
    front: "/product/multiflora-front.png",
    back: "/product/multiflora-back.png",
  },
  {
    name: "Litchi Honey",
    front: "/product/litchi-front.png",
    back: "/product/litchi-back.png",
  },
];

interface ProductCardProps {
  name: string;
  front: string; 
  back: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, front, back }) => {
  return (
    <div className="w-full md:w-fit h-full flex flex-col justify-center items-center p-4">
  <div className="w-full text-center text-black relative">
    <div className="group h-[300px] md:h-[400px] w-[250px] md:w-[300px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex justify-center items-center">
          <img
            src={front}
            alt={name}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        {/* Back side */}
        <div className="absolute inset-0 h-full w-full text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
            <img
              src={back}
              alt={name}
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2 className="font-bold text-base md:text-xl mt-4 text-black uppercase">
    {name}
  </h2>

  <Link
    href="/contact"
    className="mt-5 bg-yellow-400 text-black font-bold text-sm md:text-xl px-6 py-2 md:px-10 md:py-3 rounded-3xl hover:bg-white border-2 border-yellow-400 transition-colors duration-300"
  >
    Shop Now
  </Link>
</div>

  );
};

const ProductPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); 

  const slideToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length + 2)); 
  };

  const slideToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length + 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(slideToNext, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen text-white overflow-x-hidden">
      {/* Carousel Div */}
      <div className="relative h-[360px] w-full flex justify-center items-center overflow-hidden">
        <div
          className="absolute h-full w-full flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${(currentImageIndex - 1) * 100}%)`,
          }}
        >
          {/* Duplicated images for seamless looping */}
          <div className="h-full w-full flex-shrink-0">
            <div
              className="h-full w-full backdrop-blur-xl"
              style={{
                backgroundImage: `url('${images[images.length - 1]}')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
          </div>
          {images.map((image, index) => (
            <div key={index} className="h-full font w-full flex-shrink-0">
              <div
                className="h-full w-full backdrop-blur-xl"
                style={{
                  backgroundImage: `url('${image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              />
            </div>
          ))}
          <div className="h-full w-full flex-shrink-0">
            <div
              className="h-full w-full backdrop-blur-xl"
              style={{
                backgroundImage: `url('${images[0]}')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={slideToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={slideToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      <Promotion />

      <div className="w-full h-full flex flex-col justify-center items-center p-6 md:p-12">
        <div className="w-full h-full flex flex-col md:flex-row md:flex-wrap justify-center  items-center lg:gap-x-56 lg:gap-y-20 ">
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
