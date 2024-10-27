"use client";
import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <h1
        className={`${poppins.className} text-amber-500 text-4xl sm:text-5xl font-bold text-center mt-40`}
      >
        Contact Us
      </h1>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-8 px-8 py-12 lg:px-20 lg:text-start text-center">
        <div className="lg:w-1/2 flex flex-col items-center">
          <Image
            src="/image/logo.webp"
            alt="Beekeepers"
            width={0}
            height={0}
            sizes="100vw"
            className="rounded-full h-[13rem] w-[13rem]"
          />

          <h2 className="text-amber-500 text-lg font-semibold mb-2">
            Contact Information
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Reach Us At</h3>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 1234 Honeybee Lane, Beekeeper City, HB
            56789
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> contact@haniko.com
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Phone:</strong> +123-456-7890
          </p>
        </div>

        {/* Contact Form */}
        <div className={`lg:w-1/2 transition-opacity duration-700`}>
          <h2 className="text-amber-500 text-lg font-semibold mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Send Us a Message
          </h3>

          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-600 mb-1 text-start">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="border border-gray-300 py-2 px-4 rounded-md transition duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-600 mb-1 text-start">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 py-2 px-4 rounded-md transition duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-600 mb-1 text-start"
              >
                Message
              </label>
              <textarea
                id="message"
                className="border border-gray-300 py-2 px-4 rounded-md transition duration-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-300"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
