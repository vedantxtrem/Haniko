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
    name: "Raw & Unfiltered Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Raw Honey Pouch",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Honey Minis",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Organic Raw Honey",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Organic Honey Pouch",
    imageUrl: "/image/honey.png",
  },
  {
    name: "Raw Honey & Comb",
    imageUrl: "/image/honey.png",
  },
];

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "red" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer text-red-500 transition-colors duration-300 hover:text-red-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
);

const ProductCard: React.FC<{ name: string; imageUrl: string }> = ({
  name,
  imageUrl,
}) => {
  const [heartColor, setHeartColor] = useState(false);

  const toggleHeartColor = () => {
    setHeartColor(prev => !prev);
  };

  return (
    <div className="w-full md:w-fit h-full flex flex-col justify-center items-center p-4">
      <div className="w-full text-center text-black relative">
        <div className="relative mt-2 rounded-2xl bg-gradient-to-r from-amber-300 via-white to-amber-300 z-10 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
          <span onClick={toggleHeartColor} className="absolute right-2 top-2">
            <HeartIcon filled={heartColor} /> {/* Pass filled prop based on state */}
          </span>
          <img
            src={imageUrl}
            alt={name}
            className="w-[100%] max-w-[300px] md:max-w-[550px] "
          />
        </div>
        <h2 className="font-bold text-lg md:text-xl mt-4">{name}</h2>
      </div>
      <Link
        href="/contact"
        className="mt-5 bg-yellow-400 text-black font-bold text-base md:text-xl px-8 py-2 md:px-10 md:py-3 rounded-3xl hover:bg-white border-2 border-yellow-400 transition-colors duration-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

const ProductPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at 1 for the first duplicated image

  const slideToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images.length + 2)); // Increment the index
  };

  const slideToPrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length + 1 : prevIndex - 1) // Decrement the index
    );
  };

  useEffect(() => {
    const interval = setInterval(slideToNext, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen text-white">
      {/* Carousel Div */}
      <div className="relative h-[360px] w-full flex justify-center items-center overflow-hidden">
        <div
          className="absolute h-full w-full flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${(currentImageIndex - 1) * 100}%)`, // Adjusted for the duplicated images
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
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-1 justify-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
