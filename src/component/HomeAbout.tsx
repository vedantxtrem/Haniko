import { FaMedal, FaHandPaper, FaBeer } from 'react-icons/fa'

export default function AboutUs() {
  const features = [
    {
      icon: FaMedal,
      title: "Our Story",
      description: "Haniko is more than just a honey brand; it's the culmination of decades of passion, dedication, and expertise in the world of honey. As a subsidiary of M B Exim Pvt. Ltd., a premium exporter of bulk honey with nearly three decades of experience, Haniko carries forward a rich legacy of quality and trust. Our parent company, M B Exim, has built its reputation by supporting small businesses and sharing the exceptional quality of Indian honey with the world."
    },
    {
      icon: FaHandPaper,
      title: "Easy to order",
      description: "You can select the product you are interested in and add to the cart. Or just call us!"
    },
    {
      icon: FaBeer,
      title: "Fast shipping",
      description: "We are working only with the best delivery services. You can be sure our honey will be delivered to you safe and sound."
    }
  ]

  return (
    <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0">
        <div className="w-12 h-12 bg-amber-400 transform rotate-45 -translate-x-6 -translate-y-6"></div>
        <div className="w-8 h-8 bg-amber-200 absolute top-8 left-8 transform rotate-45"></div>
      </div>

      <div className=" mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-amber-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Us</h3>
          <p className="w-11/12 md:w-[60%] text-center mx-auto text-xl text-gray-600">
          At Haniko, we believe in offering pure and finest sourced honey that supports sustainable beekeeping. We work closely with local beekeepers to ensure every jar of honey meets the highest standards of quality. With a variety of natural honey flavors such as Litchi, Multiflora, Mustard, Eucalyptus, we bring you the authentic taste of India.

          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <feature.icon className="w-12 h-12 text-amber-500 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}