

export default function WhyChooseUs() {
  const features = [
    {
      icon: "/image/honeycomb.webp" ,
      title: 'Organic Honey',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh.',
    },
    {
      icon: "/image/bee.webp",
      title: 'Queen Bee Honey',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh.',
    },
    {
      icon: "/image/honey.webp",
      title: 'Hygienic Packing',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh.',
    },
    {
      icon: "/image/fast.webp",
      title: 'Fast Delivery',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus mollis malesuada. Sed suscipit, tortor nec sollicitudin tincidunt nibh.',
    },
  ]

  return (
    <section className="w-screen mt-16">
      <div className="w-full flex flex-col justify-center items-center">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Honey
          </h2>
          <p className="text-gray-600 max-w-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-5 px-5 lg:px-24 ">

          {features.map((feature, index) => (

            <div key={index} className="w-full flex flex-col justify-center items-center md:w-[300px] ">
              <img src={feature.icon} className='w-24' alt="" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>

          ))}

        </div>
      </div>
    </section>
  )
}
