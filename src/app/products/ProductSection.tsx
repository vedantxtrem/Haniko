import React from "react";
import Link from "next/link";

const products = [
  {
    name: "Honey",
    front: "/product/pure-front.png",
    back: "/product/pure-back.png",
  },
  {
    name: "Jamun Honey",
    front: "/product/jamun-front.png",
    back: "/product/jamun-back.png",
  },
  {
    name: "Mustard Honey",
    front: "/product/mustard-front.png",
    back: "/product/mustard-back.png",
  },
  {
    name: "Multiflora Honey",
    front: "/product/multiflora-front.png",
    back: "/product/multiflora-back.png",
  },
  {
    name: "Litchi Honey",
    front: "/product/litchi-front.png",
    back: "/product/litchi-back.png",
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
              <img
                src={front}
                alt={name}
                loading="lazy"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>

            {/* Back side */}
            <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex justify-center items-center">
              <img
                src={back}
                alt={name}
                loading="lazy"
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
