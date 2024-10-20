import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function WhyChooseUs() {
  const features = [
    {
      icon: "/image/honeycomb.webp",
      title: "Honey as it is",
      description:
        "Our honey is 100% natural, harvested straight from the finest blossoms without any additives and each variety offers unique, naturally occurring flavors.",
      gradient: "",
      // gradient: "bg-gradient-to-tr from-[#8b45ba] to-[#d669e7]",
    },
    {
      icon: "/image/bee.webp",
      title: "Sustainable and Ethical",
      description:
        "During the honey harvesting process, we ensure that our beekeepers follow ethical practices that protect bee populations and preserve the environment, promoting sustainability and ecological balance.",
      gradient: "",
      // gradient: "bg-gradient-to-tr from-[#EFA820] to-[#FFCB74]",
    },
    {
      icon: "/image/honey.webp",
      title: "Hygienic Packing",
      description:
        "Packaged in a clean and hygienic environment to preserve the freshness and purity of our honey.",
      gradient: "",
      // gradient: "bg-gradient-to-tr from-[#225D67] to-[#49C5D5]",
    },
    {
      icon: "/image/flower1.png",
      title: "Floral Specific",
      description:
        "We source honey of specific nectar blossoms, resulting into distinct and natural flavors unique to each variety. These floral-specific varieties ensure that every spoonful delivers an authentic and unadulterated taste of nature.",
      gradient: "",
      // gradient: "bg-gradient-to-tr from-[#E75D6B] to-[#FF9DAB]",
    },
  ];

  return (
    <section className="w-screen py-20 ">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-[#013e52] mt-3 text-center font-bold">
            Why Choose Our Honey
          </h1>

          {/* <p className="text-yellow-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Our honey is harvested with precision and love, ensuring each drop
            offers the best flavor and health benefits. Here why our customers
            love us.
          </p> */}
        </div>

        {/* Features Grid */}
        <div className="w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 md:px-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`h-auto w-full flex flex-col items-center justify-between p-6 rounded-xl  ${feature.gradient}`}
            >
              <img
                src={feature.icon}
                className="w-24 h-24 mb-4 bg-cover "
                alt={feature.title}
              />

              <div className="w-full h-full flex flex-col justify-between items-center">
                <div className="flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-semibold text-black mb-3 text-center font-campton">
                    {feature.title}
                  </h3>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center text-center">
                  <p className={`${poppins.className} text-black text-center leading-relaxed font-medium`}>
                    {feature.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
