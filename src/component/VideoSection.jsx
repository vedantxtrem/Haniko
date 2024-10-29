import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function VideoSection() {
  return (
    <section
      className={`relative h-[80vh] w-full flex items-center justify-center text-center md:text-left ${poppins.className}`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          playsInline
          autoPlay
          loop
          muted
          className="slideshow-split_video image_img hide-mobile w-full h-full object-cover"
          preload="metadata"
          poster="/istock/v2.png"
        >
          <source src="/istock/beeKeper.mp4" type="video/mp4" />
        </video>
        {/* testz */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 w-full md:w-3/4 lg:w-1/2 px-6 md:px-12 text-white flex flex-col justify-center items-center">
        {/* Text Content */}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl text-start lg:text-center">
          The Journey
        </h1>
        <p className="text-xl md:text-2xl my-4 text-center">
          At Haniko, we are committed to upholding the integrity of our product
          for our customers. We believe in full transparency, sharing the
          origins of our product and the sustainable journey it follows from
          hive to jar, ensuring you receive pure, natural honey every time.
        </p>
        <Link
          href={"/about-us"}
          //test
          className="bg-gradient-to-r py-3 px-8 from-amber-500 text-xl to-[#ffde4a] font-medium text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default VideoSection;
