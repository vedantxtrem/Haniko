"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import axios from "axios";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const BREVO_API_KEY = process?.env?.NEXT_PUBLIC_BREVO_API_KEY;

const defaultSender = {
  name: "Rajyavardhan Bithale",
  email: "bithale01@gmail.com",
};

function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: defaultSender,
          to: [{ email: "vedants9090@gmail.com" }],
          subject: "TEST Mail",
          htmlContent: `<p><strong>Name:</strong> ${formData?.name}</p>
                      <p><strong>Email:</strong> ${formData?.email}</p>
                      <p><strong>Mobile:</strong> ${formData?.mobile}</p>
                      <p><strong>Message:</strong> ${formData?.message}</p>`,
        },
        {
          headers: {
            accept: "application/json",
            "api-key": BREVO_API_KEY,
            "content-type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className={`relative overflow-hidden ${poppins.className} py-10`}>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:text-start text-center bg-white max-w-screen mx-auto">
        {/* Contact Information */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start py-20 bg-amber-500 text-white p-6 lg:p-12 rounded-br-[50%] lg:rounded-br-full shadow-xl">
          <h2 className="text-white text-lg font-semibold mb-2 tracking-wide">
            Contact Information
          </h2>
          <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Reach Us At
          </h3>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Address:</strong> M B Exim PRIVATE LIMITED, Village
            Kumarhera, Chajjpura, Pargana Harora, Saharanpur, Uttar Pradesh,
            247001
          </p>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Phone:</strong> +91 9310441423
          </p>
          <p className="text-white mb-2 sm:mb-4">
            <strong>Email:</strong> info@haniko.in
          </p>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white p-6 lg:px-10">
          <h1 className="text-amber-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-10">
            Contact Us
          </h1>
          <h2 className="text-gray-800 text-lg font-semibold">
            Get in Touch with Us
          </h2>
          <h1 className="mb-4 text-sm md:text-lg">
            Whether you have questions about our products or are looking for a
            trusted B2B honey supplier, we’re here to help.
          </h1>

          {successMessage && (
            <p className="text-green-500 mb-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile" className="sr-only">
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Mobile Number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 py-3 px-4 rounded-md focus:border-amber-500 focus:ring-2 focus:ring-amber-300 outline-none transition-all duration-300"
                placeholder="Your Message"
                rows={5}
              />
            </div>

            <button
              type="submit"
              disabled={loading} // Disable the button while loading
              className={`bg-amber-500 font-medium text-white py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-amber-600"
                }`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
