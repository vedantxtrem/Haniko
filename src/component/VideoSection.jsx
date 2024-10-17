import React from "react";

function VideoSection() {
  return (
    <main className="w-screen relative h-[100vh] ">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover backdrop-blur-xl"
          autoPlay
          loop
          muted
        >
          <source src='https://www.shutterstock.com/shutterstock/videos/3017200/preview/stock-footage-honey-drizzling-shooting-with-high-speed-camera-phantom-flex.webm' type="video/webm" />
        </video>
        <div className="absolute inset-0  opacity-20"></div>
      </div>

      <div className="w-full h-full absolute flex flex-col lg:justify-items-center ">

        <div className="p-10 my-auto pl-28">
          <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-amber-700">
            <span className="text-white  ">The finest taste </span>
            <br />
            <span className="text-white ">of <span className="text-[#f2b104] "> Nature </span></span>
          </h1>

          <p className="text-white mb-8 max-w-lg text-xl lg:text-2xl">
            At Haniko, we deliver the finest honey straight from the source to you
          </p>
          <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
            View Products
          </button>
        </div>

      </div>
    </main>
  );
}

export default VideoSection;
