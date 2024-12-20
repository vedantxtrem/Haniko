import React from "react";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Honey",
    front: "/product/pure-front.webp",
    back: "/product/pure-back.webp",
  },
  {
    name: "Jamun Honey",
    front: "/product/jamun-front.webp",
    back: "/product/jamun-back.webp",
  },
  {
    name: "Mustard Honey",
    front: "/product/mustard-front.webp",
    back: "/product/mustard-back.webp",
  },
  {
    name: "Multiflora Honey",
    front: "/product/multiflora-front.webp",
    back: "/product/multiflora-back.webp",
  },
  {
    name: "Litchi Honey",
    front: "/product/litchi-front.webp",
    back: "/product/litchi-back.webp",
  },
];

const ProductSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            front={product.front}
            back={product.back}
          />
        ))}
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ name: string; front: string; back: string }> = ({
  name,
  front,
  back,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4">
      <div className="w-full text-center text-black relative">
        <div className="group h-[250px] md:h-[350px] lg:h-[400px] w-[200px] md:w-[250px] lg:w-[300px] [perspective:1000px]">
          <div className="relative h-full w-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front side */}
            <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex justify-center items-center">
              <Image
                loading="eager"
                height={0}
                width={0}
                sizes="100vw"
                src={front}
                alt={name}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Back side */}
            <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center">
              <Image
                loading="eager"
                height={0}
                width={0}
                sizes="100vw"
                src={back}
                alt={name}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-base md:text-xl mt-4 text-black uppercase">
        {name}
      </h2>

      <Link
        href="/contact"
        className="mt-5 bg-yellow-400 text-black font-bold text-sm md:text-lg px-6 py-2 md:px-10 md:py-3 rounded-3xl hover:bg-white border-2 border-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default ProductSection;   
