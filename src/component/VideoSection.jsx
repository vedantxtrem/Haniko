import React from "react";

function VideoSection() {
  return (
    <main className="relative h-[80vh] w-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover backdrop-blur-xl"
          autoPlay
          loop
          muted
        >
          <source src="/image/video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gray-400 opacity-40"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <img
          src="/image/videoImage.png"
          alt="video image"
          className="w-[200px] md:w-[300px]"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-[#013e52] drop-shadow-lg">
          HANIKO
        </h1>
        <h2 className="text-xl md:text-2xl font-bold text-[#F28729] mt-4 drop-shadow-md">
          Every bottle supports Indian beekeepers.
          <br />
          100% harvested & bottled in India.
        </h2>
        <button className="bg-[#F28729] text-white font-bold py-2 px-6 rounded-xl mt-8 hover:bg-[#E67E33] transition-all duration-300 shadow-lg border-4">
          Learn More
        </button>
      </div>
    </main>
  );
}

export default VideoSection;
