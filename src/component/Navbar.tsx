"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

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

                <Link href="/contact" passHref>
                    <div className="relative text-gray-700 text-xl px-1 cursor-pointer group">
                        <span className="group-hover:text-amber-500">Contact Us</span>
                        <div className="absolute left-0 -bottom-1 w-full h-1 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
                    </div>
                </Link>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`fixed -top-4 -left-5 w-[60%] h-screen bg-amber-50 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out`}
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
                    <a href="/contact" className="block text-gray-700 hover:text-gray-900">
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
