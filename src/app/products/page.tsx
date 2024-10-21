"use client";

import Promotion from "@/component/Promotion"; 
import React, { useState, useEffect } from "react";
import ProductSection from "./ProductSection";

const images = [
  "/image/Product_Page_Banner-5.jpg",
  "/image/Product_Page_Banner-5.jpg",
  "/image/Product_Page_Banner-5.jpg",
];

const ProductPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next slide
  const slideToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const slideToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically slide to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(slideToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen text-white overflow-x-hidden">
      {/* Carousel Section */}
      <div className="relative h-[200px] md:h-[360px] w-full flex justify-center items-center overflow-hidden">
        {/* Image Slider */}
        <div
          className="absolute h-full w-full flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex-shrink-0"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={slideToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={slideToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* Promotion Section */}
      <Promotion />

       <ProductSection /> 
    </div>
  );
};

export default ProductPage;
