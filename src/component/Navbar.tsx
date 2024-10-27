"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiClothJar, GiHamburgerMenu } from "react-icons/gi";
import { BsCart } from "react-icons/bs";

import "animate.css";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { IoChevronDownOutline } from "react-icons/io5";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Option {
  name: string;
  icon: null | JSX.Element;
  link: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [blog, setBlog] = useState<string>("#blog");


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const currentPath = usePathname();

  useEffect(() => {
    setBlog(currentPath === "/" ? "#blog" : "/#blog");
  }, [currentPath]);


  const options = [
    {
      name: currentPath !== "/" ? "Home" : null,
      icon: currentPath !== "/" ? <IoChevronDownOutline className="font-bold" /> : null,
      link: currentPath !== "/" ? "/" : "",
    },
    {
      name: currentPath !== "/about-us" ? "About Us" : null,
      icon: currentPath !== "/about-us" ? <IoChevronDownOutline className="font-bold" /> : null,
      link: currentPath !== "/about-us" ? "/about-us" : "",
    },
    {
      name: currentPath !== "/products" ? "Shop" : null,
      icon: currentPath !== "/products" ? <IoChevronDownOutline className="font-bold" /> : null,
      link: currentPath !== "/products" ? "/products" : "",
    },
    {
      name: currentPath !== "/b2b" ? "Business Segment" : null,
      icon: currentPath !== "/b2b" ? <IoChevronDownOutline className="font-bold" /> : null,
      link: currentPath !== "/b2b" ? '/b2b' : "",
    },
    // {
    //   name: currentPath !== blog ? "Blogs" : null,
    //   icon: currentPath !== blog ? <IoChevronDownOutline className="font-bold" /> : null,
    //   link: currentPath !== blog ? blog : "",
    // },
  ].filter(option => option.name);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden bg-white px-10 xl:flex flex-row justify-between items-center py-2 pt-3">

        <div className="absolute z-50 top-3 left-1/2 transform -translate-x-1/2 p-4 rounded-full">
          <Link href="/">
            <img
              loading="eager" src="/new/logo.webp" alt="Logo" className="max-w-32" />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 h-[200px] w-[200px] bg-white z-40 mt-3  rounded-full">
        </div>

        <div className={`${poppins.className} flex flex-row gap-5 p-4 `}>
          {options.map((option, index) => (
            <Link key={index} href={option.link}>
              <div className="flex cursor-pointer text-black text-xl items-center gap-2 transition-transform duration-300 hover:scale-105 hover:opacity-80">
                <span className="flex items-center mt-0.5 font-medium">{option.name}</span>
                <span className="flex items-center font-semibold">{option.icon}</span>
              </div>
            </Link>
          ))}

        </div>
        <Link href="/contact">
          <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a]  font-semibold  text-black  rounded-full transition duration-300 ease-in-out transform hover:scale-x-110">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Navbar */}
      <div className="xl:hidden bg-white relative bg-transparent h-20 flex  flex-row justify-center items-center py-3">
        <div
          onClick={toggleSidebar}
          className="z-[500] absolute top-1/2 left-1 transform -translate-y-1/2 cursor-pointer"
        >
          <GiHamburgerMenu className="text-2xl mx-5" />
        </div>

        <div className="absolute  z-50 top-3 p-4 rounded-full">
          <Link href="/">
            <img
              loading="eager"
              src="/new/logo.webp"
              alt="Logo"
              className="max-w-24" />
          </Link>
        </div>
        <div className="absolute h-[180px] w-[180px] bg-white z-40 -mt-2 -mx-5 rounded-full">
        </div>

      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="animate__animated animate__slideInDown absolute mt-3 w-11/12 left-5 transform -translate-x-1/2 glass-card duration-700 transition-transform z-50 flex flex-col items-center justify-center p-5">
          <div
            className={`${poppins.className} mx-auto min-w-[70%] flex flex-col justify-center items-center gap-3`}
          >
            {options.map((option, index) => (
              <Link key={index} href={option.link} onClick={toggleSidebar}>
                <div className="flex w-full bg-amber-500 px-1 py-1.5 rounded-2xl bg-opacity-20 mx-auto text-center items-center justify-center text-slate-950 text-xl gap-2 font-semibold">
                  {option.icon}
                  {option.name}
                </div>
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={toggleSidebar} className="mt-5 flex w-full justify-center items-center">
            <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a]  font-semibold  text-black  rounded-full transition duration-300 ease-in-out transform hover:scale-x-110">
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
