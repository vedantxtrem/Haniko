"use client";
import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page() {
  return (
    <section className={`relative overflow-hidden ${poppins.className}`}>
      
      <div className="flex flex-col lg:flex-row gap-16 px-6 lg:px-24 py-16 lg:text-start text-center bg-gray-50">
        {/* Contact Information */} 
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start bg-amber-500 text-white p-8 rounded-br-full shadow-xl">
          <img
            src="/image/logo.png"
            alt="Beekeepers"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-full h-52 w-52 mb-6 shadow-md border-4 border-white"
          />

          <h2 className="text-white text-lg font-semibold mb-2 tracking-wide">
            Contact Information
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            Reach Us At
          </h3>
          <p className="text-white mb-4">
            <strong>Address:</strong> 1234 Honeybee Lane, Beekeeper City, HB 56789
          </p>
          <p className="text-white mb-4">
            <strong>Email:</strong> contact@haniko.com
          </p>
          <p className="text-white mb-4">
            <strong>Phone:</strong> +123-456-7890
          </p>
        </div>

        <div className="lg:w-1/2 bg-white p-10 rounded-xl border-4 border-amber-500 shadow-2xl">
          <h1 className="text-amber-500 text-4xl sm:text-5xl font-bold mb-10">
            Contact Us
          </h1>
          <h2 className="text-gray-800 text-lg font-semibold mb-4">
            Get In Touch
          </h2>

          <form className="space-y-6">
            <div className="flex flex-col">
              <input
                id="name"
                type="text"
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                id="email"
                type="email"
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                id="message"
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Message"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 text-white py-3 px-8 rounded-full hover:bg-amber-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
