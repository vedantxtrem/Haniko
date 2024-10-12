import React from "react";
import TypesCard from "@/component/Types";

function TypeSection() {
  return (
    <div className="flex flex-col gap-10 px-4 md:px-0">
      <div className="text-center mb-10">
        <h2 className="text-lg font-bold text-amber-500 uppercase tracking-wider mb-2">
          ABOUT OUR PRODUCTS
        </h2>
        <h1 className="text-3xl font-black font-harman tracking-tight text-gray-900 sm:text-4xl md:text-5xl my-4">
          Types of Honey
        </h1>
        <p className="text-lg text-gray-600 mt-2 max-w-xl mx-auto">
          Take a look at the different types of honey we produce.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto gap-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <TypesCard
          imageSrc="https://brokenovenbaking.com/wp-content/uploads/2022/11/honey-bun-cookies-14.jpg"
          title="Linden Honey"
          description="Linden honey has a strong and very distinctive aroma. At first sniff…"
          bgColor="bg-[#ffdfcc]"
        />
        <TypesCard
          imageSrc="https://www.tasteofhome.com/wp-content/uploads/2024/02/GettyImages-1684517871-does-honey-expire-JVedit.jpg"
          title="Jumun Honey"
          description="Jamun honey is famous for its antihypoxic activity. A specific dose…"
          bgColor="bg-[#dfe3ec]"
        />
        <TypesCard
          imageSrc="https://img.freepik.com/free-photo/honey-jar-with-wooden-honey-dipper_23-2149442339.jpg"
          title="Organic Honey"
          description="Organic honey is highly nutritious honey made by bees that…"
          bgColor="bg-[#feb3b2]"
        />
        <TypesCard
          imageSrc="https://cdn.shopify.com/s/files/1/0020/7978/5023/files/a-jar-of-brightland-raw-california-honey.jpg?v=1642822491"
          title="Flower Honey"
          description="There are many different varieties of flower honey available…"
          bgColor="bg-[#fecb41]"
        />
      </div>
    </div>
  );
}

export default TypeSection;
