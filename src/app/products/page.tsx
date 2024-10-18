"use client";

import Promotion from "@/component/Promotion";
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

const ProductCard: React.FC<{ name: string; imageUrl: string }> = ({
  name,
  imageUrl,
}) => {
  return (
    <div className="w-fit h-full flex flex-col justify-center items-center p-6">

      <div className="w-full text-center text-black z-10 relative">
        <img src="/image/hexagon.svg" alt="" className="-z-10 absolute w-[200px] h-[150px] left-1/2 bottom-[40px] -ml-1 -translate-x-1/2" />
        <img src={imageUrl} alt={name} className="min-w-[300px] z-50" />
        <h2 className="font-bold text-xl">{name}</h2>
      </div>
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
    const interval = setInterval(slideToNext, 2000); // Change image every 3 seconds
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

      <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-amber-200 via-white to-white">
        <div className="w-[60%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-3">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        <h1 className="font-harman text-4xl font-bold py-4 text-yellow-300">
          HOT HONEY
        </h1>

        <div className=" h-full flex justify-items-center ">
          <ProductCard name="Hot Honey" imageUrl="/image/honey.png" />
        </div>

        <h1 className="font-harman text-4xl font-bold py-4 text-yellow-300">
          {" "}
          Manuka Honey{" "}
        </h1>

        <div className="w-[60%] justify-center ">
          <div className="w-full h-full flex justify-center ">
            <ProductCard name="Manuka Honey " imageUrl="/image/honey.png" />
            <ProductCard name="Manuka Honey " imageUrl="/image/honey.png" />
            <ProductCard name="Manuka Honey " imageUrl="/image/honey.png" />
          </div>
          <div className="w-full h-full flex justify-center ">
            <ProductCard name="Manuka Honey " imageUrl="/image/honey.png" />
            <ProductCard name="Manuka Honey " imageUrl="/image/honey.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
