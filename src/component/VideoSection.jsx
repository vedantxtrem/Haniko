import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

function VideoSection() {
  return (
    <section className={`relative h-[80vh] w-full flex items-center justify-center text-center md:text-left ${poppins.className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Video showcasing organic honey production"
        >
          <source src="/image/video.webm" type="video/webm" />
          <source src="/image/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 px-6 md:px-12 text-white ">
        {/* Text Content */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl text-start lg:text-center">
          Organic Hive
        </h1>
        <p className="text-xl md:text-2xl my-4">
          We traveled over 5,000 miles to find a light & sweet, 100% organic
          honey and support the local beekeepers who produce it.
        </p>
        <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a]  font-semibold  text-black  rounded-full transition duration-300 ease-in-out transform hover:scale-105 ">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default VideoSection;
