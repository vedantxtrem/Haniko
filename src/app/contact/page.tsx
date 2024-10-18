"use client";
import React from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

function Page() {
  return (
    <section className={`relative overflow-hidden ${poppins.className} py-10`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:text-start text-center bg-white max-w-screen mx-auto">
        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start bg-amber-500 text-white p-6 lg:p-12 rounded-br-[50%] lg:rounded-br-full shadow-xl">
          <img
            src="/image/logo.png"
            alt="Beekeepers"
            className="rounded-full h-36 w-36 sm:h-48 sm:w-48 lg:h-56 lg:w-56 mb-4 sm:mb-6 shadow-md bg-white border-4 border-white"
          />

          <h2 className="text-white text-lg font-semibold mb-2 tracking-wide">
            Contact Information
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Reach Us At
          </h3>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Address:</strong> 1234 Honeybee Lane, Beekeeper City, HB 56789
          </p>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Email:</strong> contact@haniko.com
          </p>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Phone:</strong> +123-456-7890
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-6 lg:p-10">
          <h1 className="text-amber-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10">
            Contact Us
          </h1>
          <h2 className="text-gray-800 text-lg font-semibold mb-4">
            Get In Touch
          </h2>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                required
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Message"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="bg-amber-500 font-medium text-white py-3 px-8 rounded-full hover:bg-amber-600 transition duration-300 ease-in-out transform hover:scale-105"
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
