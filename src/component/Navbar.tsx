'use client'

import { Poppins } from "next/font/google";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";

import "animate.css"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [animationState, setAnimationState] = useState('');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const options = [
        { name: "About Us", icon: <AiOutlineInfoCircle className="font-bold mt-1" /> },
        { name: "Shop", icon: <BsCart className="font-bold mt-1" /> },
        { name: "Blogs", icon: <HiOutlineGlobeAlt className="font-bold mt-1" /> }
    ];

    return (
        <>
            <div className="hidden bg-transparent w-11/12 md:flex flex-row justify-between items-center py-5 mt-2 mx-auto">
                <img src="/new/logo.webp" alt="" className="max-w-20" />
                <div className={`${poppins.className} flex flex-row gap-5`}>
                    {options.map((option, index) => (
                        <div key={index} className="flex cursor-pointer text-slate-950 text-xl flex-row gap-2 items-start justify-center font-semibold">
                            <span>{option.name}</span>
                            {option.icon}
                        </div>
                    ))}
                </div>
                <button className="bg-gradient-to-r h-12 px-6 from-[#fc6571] to-[#ff934a] text-base font-semibold text-white rounded-full transition duration-300 ease-in-out transform hover:scale-x-110">
                    Contact Us
                </button>
            </div>

            <div className="md:hidden relative bg-transparent  w-11/12 flex flex-row justify-center items-center py-3 mx-auto">
                <div onClick={toggleSidebar} className="z-[500] absolute top-1/2 left-1 transform -translate-y-1/2">
                    <GiHamburgerMenu />
                </div>
                <img src="/new/logo.webp" alt="" className="max-w-20" />
            </div>

            {isOpen && (
                <div className={`animate__animated animate__slideInDown absolute mt-3 w-11/12 left-5 transform -translate-x-1/2  glass-card duration-700 transition-transform z-50 flex flex-col items-center justify-center p-5`}>
                    <div className={`${poppins.className} mx-auto min-w-[70%] flex flex-col justify-center items-center gap-3`}>
                        {options.map((option, index) => (
                            <div key={index} className="flex w-full bg-amber-500 py-1.5 rounded-2xl bg-opacity-10 mx-auto text-center items-center justify-center text-slate-950 text-xl gap-2 font-semibold">
                                {option.icon}
                                {option.name}
                            </div>
                        ))}
                    </div>
                    <Link href="/contact-us" className="flex w-full justify-center items-center">
                        <button className="bg-gradient-to-r h-10 min-w-[70%] mt-5 px-6 from-[#fc6571] to-[#ff934a] text-base font-semibold text-white rounded-full transition duration-300 ease-in-out transform hover:scale-x-110">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
