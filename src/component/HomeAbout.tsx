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
      <div className="absolute right-0 bottom-0 w-48 h-48 bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 z-10 animate-bounce-slow"></div>
      <div className="absolute left-1/2 bottom-0 w-96 h-96  bg-amber-100 rounded-full translate-x-1/3 translate-y-1/3 -z-10 animate-bounce-slow"></div>

      {/* Honeycomb Pattern */}
      <div className="absolute left-1/4 top-1/4 grid grid-cols-5 gap-2 opacity-20 -z-10 animate-honeycomb">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-amber-400 rounded-full"></div>
        ))}
      </div>
        <p className="text-yellow-500 font-semibold mb-2">INFORMATION</p>
        <h2 className="text-5xl font-bold mb-4 text-black">About Us</h2>
        <p className="text-lg mb-6 text-black">
        At Haniko, we believe in offering pure and finest sourced honey that supports sustainable beekeeping. We work closely with local beekeepers to ensure every jar of honey meets the highest standards of quality. With a variety of natural honey flavors such as Litchi, Multiflora, Mustard, Jamun, we bring you the authentic taste of India.
          {/* <br /><br />
          Due to its energy density, honey is an important food for virtually all
          hunter-gatherer cultures in warm climates, with the Hadza people ranking
          honey as their favorite food. */}
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
