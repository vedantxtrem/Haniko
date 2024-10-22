import React from "react";

const services = [
  {
    step: "01",
    name: "Honey",
    imageUrl: "https://www.verywellfit.com/thmb/wYu_hvb6hLUhVqXpAupfXqc9uhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1255787221-3589d5984cb84925983714fb522608c0.jpg",
    description: "State-of-the-art diagnostics to accurately identify vehicle issues.",
    bgColor: "bg-yellow-300", // Card background color
    buttonColor: "bg-red-500", // Button background color
  },
  {
    step: "02",
    name: "How to make Honey",
    imageUrl: "https://carolinahoneybees.com/wp-content/uploads/2021/10/recipes-using-honey-.jpg",
    description: "Engine overhauls to brake replacements, we ensure high-quality work for your vehicle’s longevity.",
    bgColor: "bg-[#225D67]",
    buttonColor: "bg-amber-500",
  },
  {
    step: "03",
    name: "Are you Honey?",
    imageUrl: "https://honestandsimple.com/wp-content/uploads/2021/05/Chai-Spiced-Honey_Unsplash-scaled-e1620310581566.jpg",
    description: "Oil changes, tire rotations, and more to enhance performance and prevent future issues.",
    bgColor: "bg-[#E75D6B]",
    buttonColor: "bg-pink-800",
  },
];

const Blog = () => {
  return (
    <div id="blog" className="mx-auto flex justify-center object-center mb-16  px-3 mt-16 pb-16">
      <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">
          Blog
        </h2>
        <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="group h-96 w-96 [perspective:1000px] px-5">
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  {service.imageUrl && (
                    <img
                      className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                      src={service.imageUrl}
                      alt={service.name}
                      width={320}
                      height={320}
                    />
                  )}
                  <p className="md:my-6 text-2xl text-center font-semibold">{service.name}</p>
                </div>

                {/* Conditionally apply text color based on background */}
                <div
                  className={`absolute inset-0 h-full w-full rounded-xl ${service.bgColor} px-12 text-center ${
                    service.bgColor === "bg-yellow-300" ? "text-gray-950" : "text-white"
                  } [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                    <p className="text-lg text-pretty text-center mb-4 font-medium">
                      {service.description}
                    </p>
                    <a href="tel:555-555-5555" className="inline-flex">
                      <button
                        className={`my-2 ${service.buttonColor} hover:bg-opacity-80 transition-all duration-1000 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center`}
                      >
                        <span>Schedule Service</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
