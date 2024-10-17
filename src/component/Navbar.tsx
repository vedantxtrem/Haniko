"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    let contactLink = '/contact-us';
    if (window.location.pathname === '/') {
        contactLink = '#contact';
    } else {
        contactLink = '/contact';
    }

    return (
        <nav className="fixed top-4 bg-amber-50 px-5 flex justify-between items-center drop-shadow-[0_0_5px_#fcd34d] z-50 w-11/12 rounded-full">
            {/* Hamburger Menu for Mobile (left-aligned) */}
            <div className="lg:hidden flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 text-2xl focus:outline-none"
                >
                    <HiMenuAlt2 />
                </button>
            </div>

            {/* Logo for mobile (centered in mobile view) */}
            <Link href="/" className="text-2xl font-bold lg:order-none lg:w-auto mx-auto lg:mx-0">
                <img className="w-[100px] h-[70px]" src="/image/logo.png" alt="Logo" />
            </Link>

            {/* Links for larger screens */}
            <div className="hidden lg:flex space-x-8 pr-10 font-medium">
                <Link href="/" passHref>
                    <div className="relative text-gray-700 text-xl px-1 cursor-pointer group">
                        <span className="group-hover:text-amber-500">Home</span>
                        <div className="absolute left-0 -bottom-1 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    </div>
                </Link>

                <Link href="/products" passHref>
                    <div className="relative text-gray-700 text-xl px-1 cursor-pointer group">
                        <span className="group-hover:text-amber-500">Product</span>
                        <div className="absolute left-0 -bottom-1 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    </div>
                </Link>

                <Link href="/about-us" passHref>
                    <div className="relative text-gray-700 text-xl px-1 cursor-pointer group">
                        <span className="group-hover:text-amber-500">About Us</span>
                        <div className="absolute left-0 -bottom-1 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    </div>
                </Link>

                <Link href={contactLink} passHref>
                    <div className="relative text-gray-700 text-xl px-1 cursor-pointer group">
                        <span className="group-hover:text-amber-500">Contact Us</span>
                        <div className="absolute left-0 -bottom-1 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    </div>
                </Link>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed -top-4 -left-5 md:-left-8 lg:-left-36 w-[60%] h-screen bg-amber-50 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}
            >
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 p-4 focus:outline-none absolute top-0 right-2"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <nav className="flex flex-col items-center justify-center space-y-4 pt-10">
                    <img src="/image/logo.png" className="w-[90%]" alt="Logo" />
                    <a href="/about-us" className="block text-gray-700 hover:text-gray-900">
                        About Us
                    </a>
                    <a href="/products" className="block text-gray-700 hover:text-gray-900">
                        Product
                    </a>
                    <a href={contactLink} className="block text-gray-700 hover:text-gray-900">
                        Contact Us
                    </a>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                />
            )}
        </nav>
    );
};

export default Navbar;

// import Head from 'next/head';
// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <>
//       <Head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
//         <title>Site Title</title>
//       </Head>

//       <nav className="navbar bg-gray-900 text-white px-4 py-2">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/">
//             <span className="text-lg font-bold">Site Name</span>
//           </Link>
//           <button
//             id="mobile-toggle"
//             aria-label="Toggle Mobile Menu"
//             className="ml-4 inline-flex items-center px-3 py-2 border rounded text-gray-400 border-gray-700 hover:text-white hover:border-white md:hidden"
//             onClick={toggleMobileMenu}
//           >
//             <span className="icon-bar" />
//             <span className="icon-bar" />
//             <span className="icon-bar" />
//           </button>

//           <div className={`navbar-collapse ${isMobileMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
//             <ul className="navbar-nav flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
//               <li><Link href="/about"><span className="text-white hover:text-gray-400">About</span></Link></li>
//               <li><Link href="/services"><span className="text-white hover:text-gray-400">Services</span></Link></li>
//               <li><Link href="/contact"><span className="text-white hover:text-gray-400">Contact</span></Link></li>
//             </ul>

//             <div className="header-info mt-4 md:mt-0 flex flex-col md:flex-row md:space-x-6">
//               <Link href="https://goo.gl/maps/XyANinc4EoxHZguc9" target="_blank" className="text-white hover:text-gray-400">
//                 <p>202 Honey Springs Rd, Crawford, TN</p>
//               </Link>
//               <Link href="tel:8002758777" className="text-white hover:text-gray-400">
//                 <p className="font-bold">800.275.8777</p>
//                 <p className="text-sm">Call Us</p>
//               </Link>
//             </div>
//           </div>

//           <div className="header-icons flex items-center space-x-4">
//             <form className="search-form">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </form>
//             <Link href="/cart">
//               <span className="text-white hover:text-gray-400">Cart</span>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <header className="header-bg bg-gray-800 text-white py-10">
//         <div className="container mx-auto text-center">
//           <h1 className="header-title text-3xl font-bold">
//             Page Title {/* Dynamic page title */}
//           </h1>

//           <div className="breadcrumbs mt-4">
//             <Link href="/">
//               <span className="text-gray-400 hover:text-white">Home</span>
//             </Link> / <span>Current Page</span>
//           </div>
//         </div>

//         <div className="header-wave mt-10">
//           {/* Add a decorative wave or SVG graphic here */}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

