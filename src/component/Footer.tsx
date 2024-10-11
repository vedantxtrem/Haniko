"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='relative bottom-0 w-screen'>
      <img src="/image/footerwave.svg" alt="" />
      <footer className="bg-amber-50  pt-16 pb-8 ">
        <div className="absolute top-0 left-0 right-0">
          
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Menu
              </h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Testimonials Honey",
                  "Contact Us Honey",
                  "Products",
                  "Cart",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-2">
                202 Honey Springs Rd, Crawford, TN 38554
              </p>
              <p className="text-gray-600">Call Us: 800.275.8777</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Social Links
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-amber-500 hover:text-amber-600 transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">
                Subscribe to Newsletter
              </h3>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your e-mail address"
                  className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                Sign up with your email address to receive news and updates
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Copyright ©2024 Hanio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
