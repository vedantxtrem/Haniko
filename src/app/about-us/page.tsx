import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'

export default function AboutUs() {
    return (
        <section className="bg-amber-50 relative overflow-hidden">
            {/* <div className="absolute top-0 left-0 right-0">
                <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 50C840 40 960 20 1080 15C1200 10 1320 20 1380 25L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                </svg>
            </div> */}
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-2">About Us Honey</h1>
                <div className="flex justify-center mb-12">
                    <span className="bg-amber-400 text-white px-4 py-1 rounded-full text-sm">ABOUT US HONEY</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="w-full h-0 pb-[100%] rounded-full overflow-hidden">
                            <Image
                                src="https://g-6r95onc1ynb.vusercontent.net/placeholder.svg?height=500&width=500"
                                alt="Beekeepers"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-amber-500 text-lg font-semibold mb-2">WHO WE ARE</h2>
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">About Our Company</h3>
                        <p className="text-gray-600 mb-4">
                            Our company was founded in 2001. Our honey is 100% natural. We bring
                            to you honey straight from the hive, unheated, unprocessed,
                            unpasteurized.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We have been producing honey for many years and we are undeniably
                            proud of the quality of our products.
                        </p>
                        <p className="text-gray-600 mb-6">
                            The term beekeeper refers to a person who keeps honey bees in beehives,
                            boxes, or other receptacles. The beekeeper does not control the creatures.
                            The beekeeper owns the hives or boxes and associated equipment. The
                            bees are free to forage or leave as they desire.
                        </p>
                        <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300 ease-in-out flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute left-4 bottom-4 text-amber-400">
                <FaBeer className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            <div className="absolute right-4 top-1/4 text-amber-400">
                <FaBeer className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
        </section>
    )
}