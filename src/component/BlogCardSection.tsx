"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BlogCardSectionProps {
  title: string;
  described: string;
  image: string;
  href: string;
  flex: string;
}

const BlogCardSection: React.FC<BlogCardSectionProps> = ({
  title,
  described,
  image,
  href,
  flex,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <main
      className={`min-h-full flex flex-col md:${flex} items-center`}
      data-aos="fade-up"
    >
      <section
        className="flex-1 flex flex-col justify-center p-8 md:p-16"
        data-aos="fade-right"
      >
        <div className="text-4xl font-bold text-gray-800 mb-4">{title}</div>
        <div className="text-gray-500 text-lg leading-relaxed mb-6 max-w-2xl">
          {described}
        </div>
        <Link href={href}>
          <button className="md:w-1/3 bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a] font-semibold text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Read More
          </button>
        </Link>
      </section>
      <section className="flex-1 p-8 md:p-16" data-aos="fade-left">
        <img
          src={image}
          alt="Blog image"
          className="rounded-lg shadow-lg w-full h-64 md:h-full object-cover"
        />
      </section>
    </main>
  );
};

export default BlogCardSection;
