"use client";

import React, { useEffect, useRef } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function VideoSectionBanner() {

  return (
    <main className="w-screen relative h-[50vh] md:h-[80vh] lg:min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <video
          src="/istock/bannervideo.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover backdrop-blur-xl"
          preload="auto"
        ></video> */}
        <img 
        src="/istock/banner.gif" 
        alt=""
        className="w-full h-full object-cover backdrop-blur-xl"
          preload="auto"
         />
        <div className="absolute inset-0 opacity-20"></div>
      </div>

      <div className={`${poppins.className} w-full h-full absolute flex flex-col lg:justify-items-center`}>
        <div className="p-10 my-auto lg:pl-32 ">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="text-white">The Finest Taste</span>
            <br />
            <span className="text-white">of <span className="text-[#f2b104]">Nature</span></span>
          </h1>

          <p className="text-white mb-8 max-w-lg text-xl lg:text-2xl">
            At Haniko, we deliver the finest honey straight from the source to you
          </p>

          <Link href={"/products"}>
            <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a] font-semibold text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              View Products
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default VideoSectionBanner;
