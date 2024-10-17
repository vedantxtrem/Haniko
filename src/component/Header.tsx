"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const beeRef = useRef<HTMLDivElement>(null);
  const [maxDimensions, setMaxDimensions] = useState({ maxWidth: 0, maxHeight: 0 });

  let targetX = 0;
  let targetY = 0;

  useEffect(() => {
    const updateMaxDimensions = () => {
      setMaxDimensions({
        maxWidth: window.innerWidth - 16,
        maxHeight: window.innerHeight - 16,
      });
    };

    // Update dimensions on initial mount
    updateMaxDimensions();

    // Update dimensions on window resize
    window.addEventListener('resize', updateMaxDimensions);
    return () => {
      window.removeEventListener('resize', updateMaxDimensions);
    };
  }, []);

  useEffect(() => {
    const beeContainer = beeRef.current;

    const getRandomWaypoint = () => ({
      x: Math.random() * maxDimensions.maxWidth,
      y: Math.random() * maxDimensions.maxHeight,
    });

    const moveBee = () => {
      const { x, y } = getRandomWaypoint();
      targetX = x;
      targetY = y;
    };

    const animate = () => {
      if (beeContainer) {
        const currentTransform = beeContainer.style.transform;
        const [_, x, y] = /translate\(([^px]+)px, ([^px]+)px\)/.exec(currentTransform) || [0, 0, 0];
        const newX = parseFloat(x as string) + (targetX - parseFloat(x as string)) * 0.1; // Adjust the speed of movement
        const newY = parseFloat(y as string) + (targetY - parseFloat(y as string)) * 0.1;

        beeContainer.style.transform = `translate(${newX}px, ${newY}px)`;
      }

      requestAnimationFrame(animate); // Loop the animation
    };

    // Start moving to a random waypoint initially
    moveBee();
    animate();

  
    const intervalId = setInterval(moveBee, 800);

    return () => {
      clearInterval(intervalId); // Cleanup on unmount
    };
  }, [maxDimensions]);

  return (
    <section className="bg-amber-50 overflow-hidden relative p-4 mt-16 lg:mt-0">
      <div ref={beeRef} className="absolute z-20 w-12 h-12 transition-transform  ease-in-out">
        <Image
          src="/image/bee.webp"
          alt="Flying Bee"
          width={16}
          height={16}
          className="bee-shake"
        />
      </div>

      <span></span>

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

      </div>

      {/* Keyframes for animations */}

    </section>
  );
}
