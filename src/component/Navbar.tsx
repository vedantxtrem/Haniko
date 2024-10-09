"use client";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-amber-50 p-4 flex justify-between items-center drop-shadow-xl z-50 fixed w-full top-0 left-0">
            {/* Logo */}
            <div className="text-2xl font-bold ">
                <img className="w-[100px] h-[50px]" src="/image/logo.png" alt="Logo" />
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 focus:outline-none"
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
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Links for larger screens */}
            <div className="hidden lg:flex space-x-8 pr-10 font-medium">
                <a
                    href="/"
                    className="text-gray-700 text-xl hover:border-b-4  border-amber-500 hover:text-amber-500 px-1"
                >
                    Home
                </a>
                <a
                    href="/products"
                    className="text-gray-700 text-xl hover:border-b-4  border-amber-500 hover:text-amber-500 px-1"
                >
                    Product
                </a>
                <a
                    href="/about-us"
                    className="text-gray-700 text-xl hover:border-b-4  border-amber-500 hover:text-amber-500 px-1"
                >
                    About Us
                </a>
                <a
                    href="/contact"
                    className="text-gray-700 text-xl hover:border-b-4  border-amber-500 hover:text-amber-500 px-1"
                >
                    Contact Us
                </a>
            </div>

            {/* Sidebar for Mobile */}
            <div
                className={`h-screen fixed top-0 left-0 w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    onClick={toggleSidebar}
                    className="text-gray-500 p-4 focus:outline-none"
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

                <nav className="w-full bg-amber-50 p-4 space-y-4 flex flex-col justify-center items-center">
                    <div>
                        <img src="/image/logo.png" className='w-[130px] ' alt="" />
                    </div>
                    <a
                        href="/about-us"
                        className="block text-gray-700 hover:text-gray-900"
                    >
                        About Us
                    </a>
                    <a
                        href="/products"
                        className="block text-gray-700 hover:text-gray-900"
                    >
                        Product
                    </a>
                    <a
                        href="/contact"
                        className="block text-gray-700 hover:text-gray-900"
                    >
                        Contact Us
                    </a>
                </nav>
            </div>

            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                />
            )}
        </nav>
    );
};

export default Navbar;
