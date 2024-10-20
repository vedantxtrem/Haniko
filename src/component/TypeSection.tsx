import React from "react";
import TypesCard from "@/component/Types";

function TypeSection() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-0 mb-20">
      <img
        src="/image/hexgon.png"
        alt="spot"
        className="absolute w-28 mx-auto md:block hidden"
      />
      <img
        src="/image/vector.png"
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

        <img
          src="/image/hexgon.png"
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
              imageSrc="https://www.shutterstock.com/shutterstock/photos/2335216723/display_1500/stock-photo-jambul-or-jamun-syzygium-cumini-isolated-on-wooden-background-2335216723.jpg"
              title="Jamun Honey"
              description=" Jamun Honey, derived from the nectars of jamun flowers, offers a distinctive taste of the Jamun flower and is packed with antioxidant properties."
              bgColor="bg-[#8b45ba]"
            />
            <TypesCard
              imageSrc="https://www.shutterstock.com/shutterstock/photos/788276815/display_1500/stock-photo-mustard-plants-are-any-of-several-plant-species-in-the-genera-brassica-and-sinapis-in-the-family-788276815.jpg"
              title="Mustard Honey"
              description="Mustard honey boasts a mild, earthy flavor with a hint of spice, naturally sourced from the nectar of mustard flowers."
              bgColor="bg-[#EFA820]"
            />
            <TypesCard
              imageSrc="https://www.shutterstock.com/shutterstock/photos/2513008237/display_1500/stock-photo-phaseolus-coccineus-known-as-runner-bean-scarlet-runner-bean-or-multiflora-bean-is-a-plant-in-2513008237.jpg"
              title="Multiflora Honey"
              description="Multiflora honey is a harmonious blend of nectars from various wildflowers, offering a rich and diverse flavor profile with natural goodness."
              bgColor="bg-[#225D67]"
            />
            <TypesCard
              imageSrc="https://www.shutterstock.com/shutterstock/photos/2002779566/display_1500/stock-photo-fresh-litchi-lichee-lychee-or-litchi-chinensis-background-2002779566.jpg"
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
