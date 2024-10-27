import Image from "next/image";
import React from "react";

function Packaging() {
  const data = [
    {
      image: "/b2b/teddy.webp",
      title: "Bottles",
    },
    {
      image: "/b2b/bottle.webp",
      title: "Jugs",
    },
    {
      image: "/b2b/bucket.webp",
      title: "Pails",
    },
    {
      image: "/b2b/steel-container.webp",
      title: "Drums",
    },
    {
      image: "/b2b/container.webp",
      title: "Totes",
    },
    {
      image: "/b2b/truck.webp",
      title: "Tankers",
    },
  ];

  return (
    <section className="my-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 uppercase">
          Packaging Flexibility
        </h1>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          We offer a wide variety of sizes and delivery methods to meet your
          specific packaging needs, including:
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <Image
                loading="eager"
                height={0}
                width={0}
                sizes="100vw"
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 uppercase">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packaging;
