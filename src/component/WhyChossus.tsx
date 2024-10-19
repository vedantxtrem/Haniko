export default function WhyChooseUs() {
  const features = [
    {
      icon: "/image/honeycomb.webp",
      title: "Organic Honey",
      description:
        "Enjoy the purest, most organic honey straight from the beehives, carefully sourced to ensure the highest quality.",
      gradient: "bg-gradient-to-tr from-[#8b45ba] to-[#d669e7]",
    },
    {
      icon: "/image/bee.webp",
      title: "Queen Bee Honey",
      description:
        "Our Queen Bee Honey is harvested with great care, providing a rich, sweet flavor like no other.",
      gradient: "bg-gradient-to-tr from-[#EFA820] to-[#FFCB74]",
    },
    {
      icon: "/image/honey.webp",
      title: "Hygienic Packing",
      description:
        "Packaged in a clean and hygienic environment to preserve the freshness and purity of our honey.",
      gradient: "bg-gradient-to-tr from-[#225D67] to-[#49C5D5]",
    },
    {
      icon: "/image/fast.webp",
      title: "Fast Delivery",
      description:
        "Our delivery system ensures that you get your honey fast and fresh, straight to your doorstep.",
      gradient: "bg-gradient-to-tr from-[#E75D6B] to-[#FF9DAB]",
    },
  ];

  return (
    <section className="w-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
        <h1 className="text-4xl text-[#013e52] mt-3 text-center font-bold">
        Why Choose Our Honey
        </h1>
  
          <p className="text-yellow-700 max-w-2xl mx-auto leading-relaxed font-semibold">
            Our honey is harvested with precision and love, ensuring each drop
            offers the best flavor and health benefits. Here's why our customers
            love us.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ${feature.gradient}`}
            >
              <img
                src={feature.icon}
                className="w-24 h-24 mb-4"
                alt={feature.title}
              />
              <h3 className="text-2xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-white text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
