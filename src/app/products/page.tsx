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
    <div className="w-full sm:w-[45%] md:w-[47%] lg:w-[600px] flex flex-col justify-center items-center p-4 rounded-lg">
      <div className="w-full text-center text-black relative">
        <div className="w-full flex justify-center items-center">
          <div className="group h-[250px] sm:h-[300px] md:h-[450px] w-[200px] sm:w-[250px] md:w-[400px] [perspective:1000px] flex justify-center items-center">
            <div className="relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front side */}
              <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex justify-center items-center">
                <img src={front} alt={name} className="w-full h-full object-contain rounded-xl" />
              </div>

              {/* Back side */}
              <div className="absolute inset-0 h-full w-full text-center text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
                  <img src={back} alt={name} className="w-full h-full object-contain rounded-xl" />
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
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const slideToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const slideToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(slideToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen text-white overflow-x-hidden">
      {/* Carousel Div */}
      <div className="relative h-[200px] sm:h-[300px] md:h-[360px] w-full flex justify-center items-center overflow-hidden">
        <div
          className="absolute h-full w-full flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-full w-full flex-shrink-0">
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
