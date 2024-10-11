// pages/honey.js (or index.js for homepage)
import Image from 'next/image';

export default function HoneyTypes() {
  return (
    <div className="relative bg-white py-16 px-8">
      {/* Background Spots */}
      <div className="absolute inset-0 flex justify-between items-start pointer-events-none">
        <div className="bg-yellow-200 rounded-full w-64 h-64 absolute left-0 -top-16 opacity-50"></div>
        <div className="bg-yellow-100 rounded-full w-32 h-32 absolute right-0 top-20 opacity-50"></div>
      </div>

      {/* Title Section */}
      <div className="relative z-10 text-center">
        <h2 className="text-yellow-600 text-sm uppercase font-bold tracking-wide">About Our Products</h2>
        <h1 className="text-4xl font-bold mt-2">Types of Honey</h1>
        <p className="text-gray-500 mt-4">Take a look at the different types of honey we produce.</p>
      </div>

      {/* Cards Section */}
      <div className="relative z-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Linden Honey Card */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-lg relative">
          <Image
            src="/images/linden-honey.jpg" // Replace with your image path
            alt="Linden Honey"
            width={500}
            height={200}
            className="rounded-lg mb-4 w-full h-36 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Linden Honey</h3>
          <p className="text-gray-500 mb-4">Linden honey has a strong and very attractive aroma. A first sniff...</p>
          <a href="#" className="text-yellow-600 font-bold">Learn more</a>
          <div className="absolute right-2 bottom-2 bg-yellow-300 opacity-30 w-12 h-12 rounded-full"></div>
        </div>

        {/* Jumun Honey Card */}
        <div className="bg-pink-100 p-6 rounded-lg shadow-lg relative">
          <Image
            src="/images/jumun-honey.jpg" // Replace with your image path
            alt="Jumun Honey"
            width={500}
            height={200}
            className="rounded-lg mb-4 w-full h-36 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Jumun Honey</h3>
          <p className="text-gray-500 mb-4">Jumun honey is famous for its antiseptic activity. A specific dose...</p>
          <a href="#" className="text-yellow-600 font-bold">Learn more</a>
          <div className="absolute left-2 bottom-2 bg-pink-300 opacity-30 w-12 h-12 rounded-full"></div>
        </div>

        {/* Organic Honey Card */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg relative">
          <Image
            src="/images/organic-honey.jpg" // Replace with your image path
            alt="Organic Honey"
            width={500}
            height={200}
            className="rounded-lg mb-4 w-full h-36 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Organic Honey</h3>
          <p className="text-gray-500 mb-4">Organic honey is highly nutritious honey made by bees that...</p>
          <a href="#" className="text-yellow-600 font-bold">Learn more</a>
          <div className="absolute right-2 bottom-2 bg-green-300 opacity-30 w-12 h-12 rounded-full"></div>
        </div>

        {/* Flower Honey Card */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg relative">
          <Image
            src="/images/flower-honey.jpg" // Replace with your image path
            alt="Flower Honey"
            width={500}
            height={200}
            className="rounded-lg mb-4 w-full h-36 object-cover"
          />
          <h3 className="text-2xl font-semibold mb-2">Flower Honey</h3>
          <p className="text-gray-500 mb-4">There are many different varieties of flower honey available...</p>
          <a href="#" className="text-yellow-600 font-bold">Learn more</a>
          <div className="absolute left-2 bottom-2 bg-yellow-300 opacity-30 w-12 h-12 rounded-full"></div>
        </div>
      </div>

      {/* Bees and Dots (Decorative) */}
      <div className="absolute right-0 top-0 w-32 h-32">
        <Image
          src="/images/bees-dots.svg" // Replace with your image path
          alt="Bees and Dots"
          width={128}
          height={128}
        />
      </div>
    </div>
  );
}
