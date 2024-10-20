"use client";

import { Parallax } from "react-parallax";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Bulk Honey Supply",
    description:
      "Our state-of-the-art facility near New Delhi, India, produces up to 50 metric tons of honey daily. We cater to large bulk and institutional orders for export requirements with efficiency and care.",
    image:
      "https://img.freepik.com/premium-photo/photo-honey-glass-jars-bottles-counter-dark-background-selling-delicious-healthy-product-generative-ai_653669-1520.jpg",
  },
  {
    id: 2,
    title: "White-Label Packaging",
    description:
      "Our bottling unit ensures precision and hygiene, packaging large quantities of honey daily while maintaining the highest standards of quality and customization.",
    image:
      "https://t3.ftcdn.net/jpg/09/53/59/02/360_F_953590276_4IYwLZsrA0tOTMBbDzavpYnwqIr2xEh4.jpg",
  },
];

const certifications = [
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
  "https://www.designerpeople.com//wp-content/uploads/2020/08/honey-jar-shape-design-2.jpg",
];

export default function Page() {
  const autoplay = Autoplay({ delay: 3000 });

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true }, [autoplay]);

  const onSelect = () => {
    if (!emblaApi) return;
  };

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <>
      <Parallax
        blur={0}
        bgImage="/image/screens.webp"
        bgImageAlt="banner"
        strength={500}
        className="min-h-[500px] hidden md:flex items-center  justify-center relative"
      >
        <div className="absolute inset-0 w-screen bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col text-center text-white min-h-[500px] justify-center">
          <h1 className="text-8xl font-bold mb-4 shadow-md">B2B Solutions</h1>
          <p className="text-xl w-3/4 mx-auto mb-6">
            Haniko has built a reputation as a reliable B2B partner for
            businesses across the globe. From bulk honey exports to fully
            customizable bottle packaging, we offer a flexible, high-quality
            service that meets your business needs.
          </p>
        </div>
      </Parallax>

      <Parallax
        blur={0}
        bgImage="https://images.pexels.com/photos/2260932/pexels-photo-2260932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        bgImageAlt="banner"
        strength={500}
        className="min-h-[400px] flex md:hidden items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col text-center text-white min-h-[400px] justify-center">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 shadow-md">
            B2B Solutions
          </h1>
          <p className="text-base md:text-lg lg:text-xl w-3/4 mx-auto mb-6">
            Haniko has built a reputation as a reliable B2B partner for
            businesses across the globe. From bulk honey exports to fully
            customizable bottle packaging, we offer a flexible, high-quality
            service that meets your business needs.
          </p>
        </div>
      </Parallax>

      {/* Services Section */}
      <div className="md:py-20 py-10 bg-white">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-20">
          Our Services Include
        </h2>
        <div className="w-screen h-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`max-w-screen bg-white flex flex-col-reverse md:flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[50vh] md:w-[50%] md:h-[90vh] object-cover"
              />
              <div className="p-8 md:p-32 w-full md:w-[50%] md:mt-20">
                <h3 className="text-3xl md:text-6xl font-bold mb-4 text-amber-600">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="md:py-20 py-10 bg-white">
        <h2 className="text-4xl text-center font-extrabold mb-10">
          Quality Assurance
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-6 text-gray-700">
          We have an in-house laboratory equipped with industry-standard
          technology, where our dedicated team ensures our honey meets all
          regulatory and international standards.
        </p>

        {/* Certifications Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {certifications.map((image, index) => (
                <div className="embla__slide user-select-none" key={index}>
                  <img
                    src={image}
                    alt={`Certification ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .embla {
            overflow: hidden;
            width: 100%;
          }
          .embla__container {
            display: flex;
          }
          .embla__slide {
            min-width: 50%;
            position: relative;
            box-sizing: border-box; /* Ensure padding/margins don't affect width */
          }
          .embla__slide img {
            width: 100%;
            height: auto; /* Maintain aspect ratio */
          }
        `}</style>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-white md:pb-20">
        <div className="md:w-3/4 w-full  mx-auto md:rounded-2xl py-10 px-3 md:py-20 text-center bg-gradient-to-tr from-amber-500 via-amber-500 to-amber-300">
          <h2 className="text-3xl font-extrabold mb-4 text-white">
            Ready to Partner with Us?
          </h2>
          <p className="mb-6 text-gray-50">
            Contact us for B2B inquiries and discover how we can support your
            business.
          </p>
          <a
            href="/contact"
            className="inline-block text-xl bg-white text-yellow-600 py-3 px-6 rounded-lg shadow hover:bg-amber-200 hover:text-black font-medium  transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
