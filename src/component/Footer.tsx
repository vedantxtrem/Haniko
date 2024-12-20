"use client";
import React, { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

export const ServicesOptions = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Product",
    link: "/products",
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
  {
    label: "Export Inquiry",
    link: "/b2b",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export const BlogsOptions = [
  {
    label: "Honey & its benefits",
    link: "/blog/honey-benefits",
  },
  {
    label: "How Honey Gets Its Unique Taste from Different Flowers",
    link: "/blog/honey-flowers",
  },
  {
    label: "Why Does Honey Crystallize?",
    link: "/blog/why-honey-crystallizes",
  },

];

function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  const currentPath = usePathname();

  useEffect(() => {
    setIsOpen(currentPath === "/about-us" ? false : true);
  }, [currentPath]);

  return (
    <footer
      className={`${isOpen ? "bg-yellow-100 text-black p-10" : "hidden"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image
            loading="eager"
            height={0}
            width={0}
            sizes="100vw"
            src="/image/logo.webp"
            alt="M B Exim Logo"
            className="w-32 lg:w-48 mx-auto"
          />
        </div>
        <div>
          <h6 className="font-bold text-lg mb-4 relative">
            Services
            <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
          </h6>
          <ul className="space-y-1">
            {ServicesOptions.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  className="block text-gray-900 font-medium relative hover:text-yellow-600 transition duration-300"
                  aria-label={`Learn more about ${service}`}
                >
                  <span className="absolute inset-0 bg-yellow-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                  <span className="relative">{service.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <h6 className="font-bold text-lg mb-4 relative">
            Blogs
            <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
          </h6>
          <ul className="space-y-3">
            {BlogsOptions.map((service, index) => (
              <li key={index}>
                <a
                  href={service.link}
                  className="block text-gray-900 font-medium relative hover:text-yellow-600 transition duration-300"
                  aria-label={`Learn more about ${service}`}
                >
                  <span className="absolute inset-0 bg-yellow-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                  <span className="relative">{service.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <h6 className="font-bold text-lg mb-4 relative ">
            Contact Us
            <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
          </h6>
          <div className="flex items-start mb-3">
            <IoLocationOutline size={45} className="text-yellow-800 mr-3" />
            <span className="text-sm text-gray-900 font-semibold">
              M B Exim PRIVATE LIMITED, Village Kumarhera, Chajjpura, Pargana
              Harora, Saharanpur, Uttar Pradesh, 247001
            </span>
          </div>
          <div className="flex items-center">
            <MdPhoneInTalk size={20} className="text-yellow-800 mr-3" />
            <a
              href="tel:+919310441423"
              className="text-gray-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
              aria-label="Call us"
            >
              +91 9310441423
            </a>
          </div>

          <div className="flex items-center">
            <IoIosMail size={20} className="text-yellow-800 mr-3" />
            <a
              href="mailto:info@haniko.in"
              className="text-gray-900 font-semibold hover:text-yellow-600 transition-colors duration-300"
              aria-label="Send us an email"
            >
              info@haniko.in
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <h6 className="font-bold text-lg mb-4 relative">
            Social Links
            <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
          </h6>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-900 p-3 rounded-full transition duration-300 bg-yellow-300 hover:bg-yellow-400 hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-900 p-3 rounded-full transition duration-300 bg-yellow-300 hover:bg-yellow-400 hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-900 p-3 rounded-full transition duration-300 bg-yellow-300 hover:bg-yellow-400 hover:scale-110"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t-2 border-gray-300">
        <p className="text-sm text-gray-600 mt-3">
          Copyright © {new Date().getFullYear()} Haniko. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
