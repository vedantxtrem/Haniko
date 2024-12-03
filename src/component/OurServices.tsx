import Image from 'next/image';
import React from 'react'

function OurServices() {
    const data = [
        {
          image: "/OurServices/mood-board.png", 
          title: "quality check",
        },
        {
          image: "/OurServices/shopping.png", 
          title: "reasonable pricing",
        },
        {
          image: "/OurServices/trolley.png", 
          title: " Bulk Supply ",
        },
      ];
  return (
    <section className="my-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-black mb-4 uppercase tracking-widest">
          Our  Services
        </h1>

        <div className='w-20 h-1 rounded-full bg-yellow-500 mx-auto my-12 '></div>
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
  )
}

export default OurServices