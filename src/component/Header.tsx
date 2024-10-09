"use client";
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-amber-50 overflow-hidden relative mt-20 ">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-amber-500">Sweet Honey</span>
              <br />
              <span className="text-gray-900">from our hive</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              Experience the finest honey sourced directly from our hives. Crafted with love, delivered with care.
            </p>
            <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
              View Products
            </button>
          </div>

          {/* Image Section */}
          <div className="relative z-20">
            <Image
              src="https://hanio.peerduck.com/wp-content/uploads/2021/02/Group-172-1476x1536.png"
              alt="Assorted Honey Products"
              width={1476}
              height={1536}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 top-0 w-24 h-24 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 z-10"></div>

        {/* Decorative Honeycomb Pattern */}
        <div className="absolute left-1/4 top-1/4 grid grid-cols-5 gap-2 opacity-20 z-10">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
