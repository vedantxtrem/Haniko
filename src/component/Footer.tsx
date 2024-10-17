"use client";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { TiMail } from "react-icons/ti";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-amber-400 text-white mt-20">
      <div className="container mx-auto px-4 lg:px-10 py-10">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 px-2">
          <div>
            <h6 className="font-bold text-lg text-white mb-4 relative">
              Services
              <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
            </h6>
            <ul>
              {["Branding", "Design", "Marketing", "Advertisement"].map(
                (service) => (
                  <li key={service} className="mb-3">
                    <a
                      href="#"
                      className="block text-gray-900 font-medium relative"
                      aria-label={`Learn more about ${service}`}
                    >
                      <span className="absolute inset-0 bg-yellow-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                      <span className="relative">{service}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-lg text-white mb-4 relative">
              Company
              <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
            </h6>
            <ul>
              {["About Us", "Contact", "Jobs", "Press Kit"].map((item) => (
                <li key={item} className="mb-3">
                  <a
                    href="#"
                    className="block text-gray-900 font-medium relative"
                    aria-label={`Learn more about ${item}`}
                  >
                    <span className="absolute inset-0 bg-yellow-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                    <span className="relative">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="font-bold text-lg text-white mb-4 relative">
              Legal
              <span className="block w-12 h-1 bg-yellow-800 mt-1"></span>
            </h6>
            <ul>
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
                (item) => (
                  <li key={item} className="mb-3">
                    <a
                      href="#"
                      className="block text-gray-900 font-medium relative"
                      aria-label={`Read the ${item}`}
                    >
                      <span className="absolute inset-0 bg-yellow-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
                      <span className="relative">{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-600 pt-8 mt-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <img
                src="/image/logo.png"
                alt="M B Exim Logo"
                className="w-32 lg:w-48 -m-[2.6rem] mx-auto"
                loading="lazy"
              />
              <p className="text-gray-900 text-base font-medium mt-3 lg:max-w-lg mx-auto font-posey">
                M B Exim has earned a reputation as a trusted leader in honey
                production, providing quality products at competitive prices.
              </p>
            </div>

            <div className="bg-amber-500 p-6 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <IoLocationOutline
                    size={24}
                    className="text-yellow-800 mr-3"
                  />
                  <span className="text-sm text-gray-900 font-semibold">
                    M B EXIM PRIVATE LIMITED, Village Kumarhera, Chajjpura,
                    Pargana Harora, Saharanpur, Uttar Pradesh, 247001
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center">
                        <MdPhoneInTalk
                          size={24}
                          className="text-yellow-800 mr-3"
                        />
                        <a
                          href="tel:+919557105677"
                          className="text-gray-900 font-semibold hover:text-yellow-100 focus:ring-2 focus:ring-yellow-300 transition duration-300"
                        >
                          (+91) 9557105677
                        </a>
                      </div>
                      <div className="flex items-center">
                        <TiMail size={24} className="text-yellow-800 mr-3" />
                        <a
                          href="mailto:info@mbexim.org"
                          className="text-gray-900 font-semibold hover:text-yellow-100 focus:ring-2 focus:ring-yellow-300 transition duration-300"
                        >
                          info@mbexim.org
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mt-4">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="text-yellow-800 hover:text-yellow-100 transition-colors duration-300 focus:ring-2 focus:ring-yellow-300 p-2 rounded-full border border-yellow-800 hover:border-yellow-300"
                    >
                      <FaFacebookF size={22} />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="text-yellow-800 hover:text-yellow-100 transition-colors duration-300 focus:ring-2 focus:ring-yellow-300 p-2 rounded-full border border-yellow-800 hover:border-yellow-300"
                    >
                      <FaInstagram size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-900 py-4 bg-amber-500 mt-8">
        &copy; {new Date().getFullYear()} M B EXIM. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
