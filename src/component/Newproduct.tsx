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
            <div key={index} className="flex flex-col items-center bg-orange-500 p-6 rounded-lg shadow-lg">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-48 h-48 mb-6" 
              />
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
