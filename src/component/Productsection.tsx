"use client"
import { useState } from "react";
import Image from "next/image";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Beehive", icon: "/image/honey.jpg" },
    { name: "Beekeepar", icon: "/image/honey.jpg" },
    { name: "Honey", icon: "/image/honey.jpg" },
    { name: "Beekeepar", icon: "/image/honey.jpg" },
    { name: "Beekeeping", icon: "/image/honey.jpg" },
    { name: "Honeybee", icon: "/image/honey.jpg" },
  ];

  const products = [
    { name: "Organic Honey", price: 120, oldPrice: 150, image: "/image/honey.jpg", sale: true, discount: 20 },
    { name: "Raw Honey", price: 180, oldPrice: 200, image: "/image/honey.jpg", sale: false },
    { name: "Wild flower Honey", price: 100, oldPrice: 120, image: "/image/honey.jpg", discount: 20 },
    { name: "Natural Honey", price: 120, oldPrice: 150, image: "/image/honey.jpg" },
  ];

  const handleCategoryClick = (categoryName:any ) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-navy-900 mb-8">Best Quality Product</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className={`w-[100px] h-[130px] flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all ${
              selectedCategory === category.name ? 'bg-yellow-400' : 'bg-blue-100'
            }`}
          >
            <Image src={category.icon} alt={category.name} width={40} height={40} className="mb-2" />
            <span className="text-sm font-medium">{category.name}</span>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 drop-shadow-lg ">
        {products.map((product, index) => (
          <div key={index} className="w-full bg-white p-4 rounded-lg shadow-md transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-gradient-to-r from-yellow-500 via-white-300 to-orange-300 ">
            <div className="relative mb-4 w-full flex justify-center">
              <img src={product.image} alt={product.name} className="w-36 transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-300" />
              {product.sale && (
                <span className="absolute -top-4 -left-4 bg-yellow-400 text-xl font-bold px-4 py-2 rounded">Sale</span>
              )}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-navy-900 text-white text-xs font-bold px-2 py-1 rounded">-{product.discount}%</span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-xl font-bold text-yellow-500">${product.price}</span>
                <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice}</span>
              </div>
            </div>
            <button className="w-full bg-navy-900 text-white py-2 px-4 rounded hover:bg-navy-800 transition-colors flex items-center justify-center">
              {/* <ShoppingCart className="w-5 h-5 mr-2" /> */}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
