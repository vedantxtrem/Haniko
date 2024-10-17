"use client";
import { Poppins } from "next/font/google";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiMenuAlt2, HiOutlineGlobeAlt } from 'react-icons/hi';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contactLink, setContactLink] = useState('/contact-us');
    const [stick, setStick] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        if (window.location.pathname === '/') {
            setContactLink('#contact');
        } else {
            setContactLink('/#contact-us');
        }
    }, []);


    useEffect(() => {
        if (window.location.pathname === '/about-us') {
            setStick(false)
        } else {
            setStick(true)
        }
    }, []);


    const options = [
        {
            name: "About Us",
            icon: <AiOutlineInfoCircle className="font-bold mt-1" />

        },
        {
            name: "Shop",
            icon: <BsCart className="font-bold mt-1" />
        },
        {
            name: "Blogs",
            icon: <HiOutlineGlobeAlt className="font-bold mt-1" />
        }
    ]

    return (
        <>
            <div className="hidden bg-transparent w-11/12 md:flex flex-row justify-between items-center py-5 mt-2 mx-auto">
                <img src="/new/logo.webp" alt="" className="max-w-20" />

                <div className={`${poppins.className} flex flex-row gap-5`}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="flex cursor-pointer text-slate-950 text-xl flex-row gap-2 items-start justify-center font-semibold">
                            <span>
                                {option.name}
                            </span>

                            {option.icon}
                        </div>
                    ))}
                </div>

                <button className="bg-gradient-to-r h-12 px-6 from-[#fc6571] to-[#ff934a] text-base font-semibold  text-white  rounded-full transition duration-300 ease-in-out transform hover:scale-x-110">
                    Contact Us
                </button>
            </div>

            <div className="md:hidden relative bg-transparent w-11/12 flex flex-row justify-center items-center py-5 mx-auto">

                <div className="absolute top-1/2 left-1 translate-y-1/2">
                    <GiHamburgerMenu />
                </div>
                <img src="/new/logo.webp" alt="" className="max-w-20" />
            </div>
        </>
    );
};

export default Navbar;
