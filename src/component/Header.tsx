"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-amber-50 overflow-hidden relative p-4 mt-16 lg:mt-0">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="z-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-amber-700">
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
              width={isMobile ? 700 : 1476}
              height={isMobile ? 800 : 1536}
              className="rounded-full"
              priority
            />
          </div>
        </div>

        {/* Decorative Elements with Animations */}
        <div className="absolute left-0 top-0 w-24 h-24 bg-amber-100 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 animate-pulse-slow"></div>
        <div className="absolute right-0 bottom-0 w-48 h-48 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 z-10 animate-bounce-slow"></div>

        {/* Honeycomb Pattern */}
        <div className="absolute left-1/4 top-1/4 grid grid-cols-5 gap-2 opacity-20 z-10 animate-honeycomb">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
          ))}
        </div>

        {/* Flying Honeybee */}
        <div className="absolute z-20 w-12 h-12 bee-container">
          <Image
            src="/image/bee.webp" // Replace with the actual honeybee image path
            alt="Flying Bee"
            width={48}
            height={48}
            className="animate-fly"
          />
        </div>
      </div>

      {/* Keyframes for animations */}
      <style jsx>{`
        .animate-fly {
          animation: fly 20s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite, rotateBee 1.5s linear infinite;
        }

        @keyframes fly {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(60vw, -30vh) rotate(20deg);
          }
          50% {
            transform: translate(-50vw, 40vh) rotate(-10deg);
          }
          75% {
            transform: translate(40vw, -20vh) rotate(10deg);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes rotateBee {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(360deg);
          }
        }

        .bee-container {
          position: absolute;
          top: 10%;
          left: 10%;
          width: 48px;
          height: 48px;
          z-index: 50;
        }

        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Honeycomb animation */
        @keyframes honeycombAnim {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        .animate-honeycomb {
          animation: honeycombAnim 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
