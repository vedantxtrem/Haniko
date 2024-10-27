import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    step: "01",
    name: "Honey and its benefits",
    imageUrl:
      "/blog/1.webp",
    description:
      "Honey is packed with nutrients, antioxidants, and healing properties.",
    bgColor: "bg-yellow-300",
    buttonColor: "bg-red-500",
    href: "/blog/honey-benefits",
  },
  {
    step: "02",
    name: "How Honey Gets Its Unique Taste from Different Flowers",
    imageUrl: "/blog/2.webp",
    description:
      "Honey, often considered nature’s sweet gift, is more than just a delicious sweetener.",
    bgColor: "bg-[#225D67]",
    buttonColor: "bg-amber-500",
    href: "/blog/honey-flowers",
  },
  {
    step: "03",
    name: "Why Does Honey Crystallize?",
    imageUrl: "/blog/3.webp",
    description:
      "If you’ve ever noticed your honey turning thick and grainy over time, don’t worry—it’s a natural process called crystallization.",
    bgColor: "bg-[#E75D6B]",
    buttonColor: "bg-pink-800",
    href: "/blog/why-honey-crystallizes",
  },
];

const Blog = () => {
  return (
    <div
      id="blog"
      className="mx-auto flex justify-center object-center mb-16  px-3 mt-16 pb-24"
    >
      <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center">
          Blog
        </h2>
        <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group h-96 w-96 [perspective:1000px] px-5"
            >
              <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">
                  {service.imageUrl && (
                    //test 01
                    <Image
                      loading="eager"
                      className="object-cover cursor-pointer object-left h-full w-full rounded-xl"
                      src={service.imageUrl}
                      alt={service.name}
                      width={320}
                      height={320}
                    />
                  )}
                  <p className="md:my-6 text-2xl text-center font-semibold">
                    {service.name}
                  </p>
                </div>

                {/* Conditionally apply text color based on background */}
                <div
                  className={`absolute inset-0 h-full w-full rounded-xl ${service.bgColor
                    } px-12 text-center ${service.bgColor === "bg-yellow-300"
                      ? "text-gray-950"
                      : "text-white"
                    } [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                >
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h2 className="text-lg font-bold mb-4">{service.name}</h2>
                    <p className="text-lg text-pretty text-center mb-4 font-medium">
                      {service.description}
                    </p>

                    <Link
                      href={service.href}
                      className={`my-2 ${service.buttonColor} hover:bg-opacity-80 transition-all duration-1000 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center`}
                    >
                      <span>READ MORE</span>
                    </Link>
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
