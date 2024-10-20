import Image from 'next/image';
import Link from 'next/link';

const AboutHoney = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center py-12 lg:py-20 px-6 lg:px-20  overflow-hidden">
      {/* Decorative background shapes */}
      <div className='w-full lg:w-[50%] flex'>
        <div className="absolute inset-0 z-0">
          {/* Left orange background spot */}
          <div className="absolute -left-80 top-32 lg:w-[40%] w-3/5 h-[80%] bg-amber-500 rounded-full mix-blend-multiply -rotate-45"></div>
          {/* Bottom right bee-like spot */}
          <div className="absolute bottom-0 right-0 lg:w-1/6 w-1/4 h-1/4">
            <div className="absolute bottom-2 right-6 w-4 h-4 bg-yellow-500 rounded-full"></div>
            <div className="absolute bottom-4 right-10 w-3 h-3 bg-yellow-300 rounded-full"></div>
            <div className="absolute bottom-6 right-12 w-2 h-2 bg-yellow-100 rounded-full"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[95%] flex justify-center z-10">

          <div className="p-8 rounded-full">
            <Image
              src="https://hanio.peerduck.com/wp-content/uploads/2021/02/Group-174.png" // Replace  image
              alt="Honey"
              width={400}
              height={400}
              className="w-full"
            />
          </div>

        </div>
      </div>

      {/* Text Section */}
      <div className="relative lg:w-[35%] z-10 mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <p className="text-yellow-500 font-semibold mb-2">INFORMATION</p>
        <h2 className="text-5xl font-bold mb-4 text-black">About Haniko</h2>
        <p className="text-lg mb-6 text-black">
          Over its history as a food, the main uses of honey are in cooking, baking, desserts,
          as a spread on bread, as an addition to various beverages such as tea,
          and as a sweetener in some commercial beverages.
          <br /><br />
          Due to its energy density, honey is an important food for virtually all
          hunter-gatherer cultures in warm climates, with the Hadza people ranking
          honey as their favorite food.
        </p>
        <Link href={"/about-us"}>
          <button className="bg-gradient-to-r h-12 px-6 from-amber-500 text-xl to-[#ffde4a]  font-semibold  text-black  rounded-full transition duration-300 ease-in-out transform hover:scale-105 ">
            Learn More
          </button>
        </Link>
      </div>

    </section>
  );
};

export default AboutHoney;
