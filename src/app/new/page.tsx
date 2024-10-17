"use client"
import React from 'react';

const products = [
  {
    name: 'Raw & Unfiltered Honey',
    imageUrl: '/image/honey.png',
  },
  {
    name: 'Raw Honey Pouch',
    imageUrl: '/image/honey.png',
  },
  {
    name: 'Honey Minis',
    imageUrl: '/image/honey.png',
  },
  {
    name: 'Organic Raw Honey',
    imageUrl: '/image/honey.png',
  },
  {
    name: 'Organic Honey Pouch',
    imageUrl: '/image/honey.png',
  },
  {
    name: 'Raw Honey & Comb',
    imageUrl: '/image/honey.png',
  },
];

const ProductPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-bold mb-12">Raw & Unfiltered Honey</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative flex flex-col items-center ">
              {/* Hexagon background */}
              <div className="hexagon absolute ">
                <div className="bg-orange-500 w-32 h-32"></div>
              </div>

              {/* Image inside hexagon */}
              <div className="absolute z-10">
                <img
                  src={product.imageUrl}
                  alt={product.name}  // Dynamic alt text
                  className="w-[200px] h-40 object-contain"
                />
              </div>

              {/* Text below the image */}
              <h2 className="mt-4 text-xl font-bold text-black">{product.name}</h2>

              {/* Hexagon styling */}
              <style jsx>{`
                .hexagon {
                  display: inline-block;
                  position: relative;
                  width: 120px;
                  height: 104px;
                  background-color: transparent;
                }
                .hexagon::before,
                .hexagon::after {
                  content: '';
                  position: absolute;
                  width: 0;
                  border-left: 60px solid transparent;
                  border-right: 60px solid transparent;
                }
                .hexagon::before {
                  top: -30px;
                  border-bottom: 30px solid #f97316; /* Orange color */
                }
                .hexagon::after {
                  bottom: -30px;
                  border-top: 30px solid #f97316; /* Orange color */
                }
                .hexagon > div {
                  position: absolute;
                  top: 0;
                  width: 120px;
                  height: 104px;
                  background-color: #f97316; /* Orange color */
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
