"use client";
import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductShowcase() {
  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    {
      id: 1,
      title: "Pure Organic Honey",
      description:
        "Harvested from the finest Indian farms, our honey is perfect for adding natural sweetness to your meals.",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/032/508/291/non_2x/natural-jar-of-liquid-honey-products-with-fruits-and-wooden-spoon-isolated-on-a-transparent-background-ai-generative-free-png.png",
    },
    {
      id: 2,
      title: "Golden Wildflower Honey",
      description:
        "Experience the rich, floral taste of our wildflower honey, sourced from the heart of nature.",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/032/508/291/non_2x/natural-jar-of-liquid-honey-products-with-fruits-and-wooden-spoon-isolated-on-a-transparent-background-ai-generative-free-png.png",
    },
    {
      id: 3,
      title: "Creamed Honey",
      description:
        "Our creamed honey offers a smooth texture, perfect for spreading on toast or mixing into your tea.",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/032/508/291/non_2x/natural-jar-of-liquid-honey-products-with-fruits-and-wooden-spoon-isolated-on-a-transparent-background-ai-generative-free-png.png",
    },
    {
      id: 4,
      title: "Raw Honeycomb",
      description:
        "Enjoy the purest form of honey with our natural honeycomb, straight from the hive.",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/032/508/291/non_2x/natural-jar-of-liquid-honey-products-with-fruits-and-wooden-spoon-isolated-on-a-transparent-background-ai-generative-free-png.png",
    },
    {
      id: 5,
      title: "Flavored Honey",
      description:
        "Indulge in our unique flavored honey, perfect for adding a twist to your drinks and desserts.",
      imageSrc:
        "https://static.vecteezy.com/system/resources/previews/032/508/291/non_2x/natural-jar-of-liquid-honey-products-with-fruits-and-wooden-spoon-isolated-on-a-transparent-background-ai-generative-free-png.png",
    },
  ];

  return (
    <div className="bg-yellow-50 py-16 px-4 mt-10 sm:px-6 lg:px-8">
      {/* Hero Section with Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-yellow-800 leading-tight tracking-tight sm:text-5xl lg:text-6xl animate__animated animate__zoomInDown">
          Discover the Distinct Flavors of India
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-2xl mx-auto animate__animated animate__fadeInUp">
          Harvested from carefully nurtured hives, our honey brings the rich
          flavors of India straight to your kitchen.
        </p>
      </div>

      {/* Product Showcase */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`flex flex-col items-center lg:flex-row lg:space-x-12 justify-center lg:items-center mb-12 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={`${index * 100}`}
        >
          {/* Product Image */}
          <div className="w-full lg:w-1/2 xl:w-1/3 mb-3 lg:mb-0 animate__animated animate__bounceIn">
            <img
              src={product.imageSrc}
              alt={product.title}
              className="transform transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-lg"
            />
          </div>

          {/* Product Description and CTA */}
          <div className="text-center lg:text-left lg:w-1/2 animate__animated animate__fadeInRight">
            <h2 className="text-3xl font-bold mb-4 text-yellow-800">
              {product.title}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p>
            {/* Call to Action */}
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 animate__animated animate__pulse"
              aria-label={`Shop for ${product.title}`}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductShowcase;
