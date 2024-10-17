import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

function VideoSection() {
  return (
<<<<<<< HEAD
    <main className="w-screen relative min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
=======
    <section className="flex flex-col md:flex-row h-[80vh] w-full">
      {/* Video Section */}
      <div className="w-full md:w-1/2 h-full relative">
>>>>>>> 3cc9bd8 (update)
        <video
          className="w-full h-full object-cover backdrop-blur-xl"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Organic honey drizzling video"
        >
          <source src="/image/video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
<<<<<<< HEAD
        <div className="absolute inset-0  opacity-20"></div>
      </div>

      <div className={`${poppins.className} w-full h-full absolute flex flex-col lg:justify-items-center  `}>

        <div className="p-10 my-auto lg:pl-32 ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 ">
            <span className="text-white  ">The finest taste </span>
            <br />
            <span className="text-white ">of <span className="text-[#f2b104] "> Nature </span></span>
          </h1>

          <p className="text-white mb-8 max-w-lg text-xl lg:text-2xl">
            At Haniko, we deliver the finest honey straight from the source to you
          </p>
          {/* <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
            View Products
          </button> */}
          <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a]  font-semibold  text-black  rounded-full transition duration-300 ease-in-out transform hover:scale-105">
           View Products
          </button>
        </div>

=======
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 relative flex flex-col justify-center items-center p-6 md:p-28 text-center md:text-left bg-white">
        {/* Honeycomb animation */}
        <div className="absolute top-1/4 right-4 rotate-45 grid grid-cols-5 gap-2 opacity-20 z-0 animate-honeycomb">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-amber-500 rounded-full"
            ></div>
          ))}
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-extrabold text-yellow-800 leading-tight tracking-tight sm:text-5xl lg:text-6xl z-10">
          Organic Hive
        </h1>
        <p className="text-lg md:text-xl text-gray-600 my-4 z-10">
          We traveled over 5,000 miles to find a light & sweet, 100% organic
          honey and support the local beekeepers who produce it.
        </p>
        <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full border-2 border-yellow-600 hover:bg-yellow-600 hover:border-yellow-500 transition duration-300 ease-in-out shadow-md hover:shadow-lg transform hover:scale-105 z-10">
          Learn More
        </button>

        {/* Honey bottle image */}
        <img
          src="/image/honey.png"
          alt="Honey bottle"
          className="w-full h-auto max-w-[10rem] absolute -rotate-[30deg] bottom-4 right-4 hidden lg:block"
        />
>>>>>>> 3cc9bd8 (update)
      </div>
    </section>
  );
}

export default VideoSection;
