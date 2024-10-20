import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function WhyChooseUs() {
  const features = [
    {
      icon: "/image/honeycomb.png",
      title: "Organic Honey",
      description:
        "Our honey is 100% natural, harvested straight from the finest blossoms without any additives and each variety offers unique, naturally occurring flavors.",
      gradient: "bg-gradient-to-tr from-[#8b45ba] to-[#d669e7]",
    },
    {
      icon: "/image/bee.png",
      title: "Sustainable",
      description:
        "During the honey harvesting process, we ensure that our beekeepers follow ethical practices that protect bee populations and preserve the environment, promoting sustainability and ecological balance.",
      gradient: "bg-gradient-to-tr from-[#EFA820] to-[#FFCB74]",
    },
    {
      icon: "/image/honey_1.png",
      title: "Hygienic Packing",
      description:
        "Packaged in a clean and hygienic environment to preserve the freshness and purity of our honey.",
      gradient: "bg-gradient-to-tr from-[#225D67] to-[#49C5D5]",
    },
    {
      icon: "/image/flower.png",
      title: "Fast Delivery",
      description:
        "Our delivery system ensures that you get your honey fast and fresh, straight to your doorstep.",
      gradient: "bg-gradient-to-tr from-[#E75D6B] to-[#FF9DAB]",
    },
  ];

  return (
    <section className="w-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-[#013e52] mt-3 text-center font-bold">
            Why Choose Our Honey
          </h1>

          <p className="text-yellow-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Our honey is harvested with precision and love, ensuring each drop
            offers the best flavor and health benefits. Here why our customers
            love us.
          </p>
        </div>

        {/* Features Grid */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`h-auto w-full flex flex-col items-center justify-evenly p-6 rounded-xl  ${feature.gradient}`}
            >
              <img
                src={feature.icon}
                className="w-24 max-h-24 mb-4 bg-cover "
                alt={feature.title}
              />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 text-center font-campton">
                  {feature.title}
                </h3>
                <p className={`${poppins.className} text-white text-center leading-relaxed font-medium`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
