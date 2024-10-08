"use client"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <div className=''>
      <svg id="footer-wave" viewBox="0 0 1440 125" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path className="f-bg-wave" d="M1256 11.76C1237.2 17.26 1209.4 27.56 1170 25.76C1127.2 23.86 1125.3 10.16 1087 7.75998C1026.9 3.95998 1015 36.56 959 29.76C920.1 25.06 921.3 8.85998 884 7.75998C841.3 6.55998 834.4 27.66 790 27.76C749.8 27.86 748.5 10.66 707 9.75998C662.5 8.75998 658.2 28.46 611 31.76C563.1 35.06 560 15.26 504 13.76C452.5 12.36 450 28.96 396 29.76C336.7 30.56 332.6 9.35998 279.1 10.76C216.3 12.36 202.3 40.36 146 43.76C112.8 45.76 63 41.96 0 10.76V124.6H1440V10.76C1353.8 -7.34002 1294.8 0.459979 1256 11.76Z"></path>
        </g>
      </svg>
      <footer className="bg-amber-50 pt-16 pb-8 ">
        <div className="absolute top-0 left-0 right-0">
          <svg
            className="w-full h-auto"
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 37.3C840 42.7 960 53.3 1080 58.7C1200 64 1320 64 1380 64H1440V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z"
              fill="#FFF7ED"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">Menu</h3>
              <ul className="space-y-2">
                {['Home', 'Testimonials Honey', 'Contact Us Honey', 'Products', 'Cart'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-2">202 Honey Springs Rd, Crawford, TN 38554</p>
              <p className="text-gray-600">Call Us: 800.275.8777</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-500 hover:text-amber-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-600 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-600 transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-4">Subscribe to Newsletter</h3>
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
  )
}