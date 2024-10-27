import React from "react";
import TypesCard from "@/component/Types";
import Image from "next/image";

function TypeSection() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-0 mb-20">
      <Image
        loading="eager"
        height={0}
        width={0}
        sizes="100vw"
        src="/image/hexgon.webp"
        alt="spot"
        className="absolute w-28 mx-auto md:block hidden"
      />
      <Image
        loading="eager"
        height={0}
        width={0}
        sizes="100vw"
        src="/image/vector.webp"
        alt="spot"
        className="absolute left-[20%] w-28 mx-auto md:block hidden"
      />

      <div className="text-center mb-5 relative">
        <div>
          <h2 className="text-lg font-bold text-amber-500 uppercase tracking-wider mb-2">
            ABOUT OUR PRODUCTS
          </h2>
          <h1 className="text-3xl font-black font-harman tracking-tight text-gray-900 sm:text-4xl md:text-5xl my-4">
            Types of Honey
          </h1>
          <p className="  text-lg text-gray-600 mt-2 max-w-xl mx-auto">
            Take a look at the different types of honey we produce.
          </p>
        </div>

        <Image
          loading="eager"
          height={0}
          width={0}
          sizes="100vw"
          src="/image/hexgon.webp"
          alt="spot"
          className="absolute left-[70%] top-0 w-28 mx-auto md:block hidden"
        />

        <div className="absolute right-9 top-1  grid grid-cols-5 gap-2 opacity-20 z-10 animate-honeycomb">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-amber-400 rounded-full "></div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-0 z-0 mx-auto animate-pulse"
          style={{
            backgroundImage: `url('/image/bg.svg')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "90%",
            height: "90%",
            top: "5%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        <div className="relative z-30">
          <div className="w-full max-w-7xl mx-auto gap-10 xl:gap-x-[100px] grid grid-cols-1 xl:grid-cols-2">
            <TypesCard
              imageSrc="/stock/jamun.webp"
              title="Jamun Honey"
              description=" Jamun Honey, derived from the nectars of jamun flowers, offers a distinctive taste of the Jamun flower and is packed with antioxidant properties."
              bgColor="bg-[#8b45ba]"
            />
            <TypesCard
              imageSrc="/stock/mustard.webp"
              title="Mustard Honey"
              description="Mustard honey boasts a mild, earthy flavor with a hint of spice, naturally sourced from the nectar of mustard flowers."
              bgColor="bg-[#EFA820]"
            />
            <TypesCard
              imageSrc="/stock/multiflora.webp"
              title="Multiflora Honey"
              description="Multiflora honey is a harmonious blend of nectars from various wildflowers, offering a rich and diverse flavor profile with natural goodness."
              bgColor="bg-[#225D67]"
            />
            <TypesCard
              imageSrc="/stock/litchi.webp"
              title="Litchi Honey"
              description="Naturally infused from the nectar of litchi flowers, this variety of honey is light and has a delicate floral sweetness with a fruity tinge to it."
              bgColor="bg-[#E75D6B]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeSection;
