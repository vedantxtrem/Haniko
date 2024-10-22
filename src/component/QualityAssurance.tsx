'use client'

import { useState, useEffect } from "react";

const certifications = [
    '/certificate/apeda.png', '/certificate/eic.png',
    '/certificate/fda.png', '/certificate/fssai.png',
    '/certificate/fssc.png', '/certificate/halal.png',
    '/certificate/nbb.png',
];

export default function QualityAssurance() {
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedImage(prevIndex => (prevIndex + 1) % certifications.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="md:py-20 w-11/12 mx-auto py-10 bg-white flex justify-center items-center flex-col">
            <h2 className="text-3xl md:text-5xl text-center font-extrabold mb-10">
                Quality Assurance
            </h2>
            <p className="max-w-4xl mx-auto text-center mb-6 text-xl md:text-2xl text-gray-700">
                We have an in-house laboratory equipped with industry-standard
                technology, where our dedicated team ensures our honey meets all
                regulatory and international standards.
            </p>

            <div className="flex flex-col w-11/12 lg:max-w-[50%] rounded-3xl bg-gray-100 overflow-hidden">
                <div className="flex h-72 mx-auto p-10 justify-center">
                    <img
                        key={selectedImage}
                        src={certifications[selectedImage]}
                        alt={`Certification`}
                        className="w-full max-h-72 object-contain rounded-lg animate__animated animate__fadeIn"
                    />
                </div>

                <div className="flex overflow-x-auto hide-scrollbar p-1 justify-between bg-gray-200">
                    {certifications.map((image, index) => (
                        <div
                            onClick={() => setSelectedImage(index)}
                            className={`flex items-center justify-center ${selectedImage === index ? "opacity-100 bg-white rounded-3xl" : "opacity-50 bg-gray-200"} user-select-none p-2`}
                            key={index}>
                            <img
                                src={image}
                                alt={`Certification ${index + 1}`}
                                className={`md:max-w-24 md:max-h-24 max-w-20 max-h-20 object-cover rounded-lg ${selectedImage === index ? "animate__animated" : ""}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
