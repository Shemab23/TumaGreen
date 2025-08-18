'use client'
import React, { useState } from "react";
import { useAppContext } from "../../context/useAppContext";
import RiderCard from "../ui/RiderCard";
import { benefits } from "../../lib";
import { FadeInUp, FadeInLeft, FadeInRight } from "../motion/animations";
import { Send } from "lucide-react";

const Riders = () => {
  const { riders } = useAppContext();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleType: "Electric Motorcycle",
    hasLicense: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submitted! Next steps: fetch current users, validate, and push this data to the database."
    );
  };

  const displayedRiders = riders.slice(0, 2);

  return (
    <section id="riders" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <FadeInUp delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
              Become an <span className="text-green-600">Electric Rider</span>
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Join Rwanda's green delivery revolution. Ride with TumaGreen!
            </p>
          </div>
        </FadeInUp>

        {/* Main Content - Flex for large screens */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* Rider Cards */}
          <FadeInLeft delay={0.1}>
            <div className="flex-1 space-y-8 w-full">
              <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-2 text-center lg:text-left">
                Meet Our Top Riders
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {displayedRiders.map((rider) => (
                  <RiderCard key={rider.id} rider={rider} />
                ))}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4 mt-6 text-center lg:text-left">
                Why Ride With TumaGreen?
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-green-100"
                  >
                    <benefit.icon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-green-700 text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInLeft>

          {/* Rider Application Form */}
          <FadeInRight delay={0.2}>
            <div className="w-full lg:w-[400px] min-w-[300px] bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-green-200 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-5 text-center">
                Apply Now
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="font-semibold text-black text-md">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full-name"
                    required
                    className="mt-1 px-4 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm rounded"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="font-semibold text-md text-black">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+250 7********"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 shadow-lg border border-green-800/40 px-4 bg-gray-100/60 w-full text-sm rounded"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-semibold text-md text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 px-4 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm rounded"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicleType" className="font-semibold text-md text-black">
                    Vehicle Type
                  </label>
                  <select
                    name="vehicleType"
                    id="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    required
                    className="mt-1 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm rounded"
                  >
                    <option>Electric Motorcycle</option>
                    <option>Electric Scooter</option>
                    <option>Electric Van</option>
                    <option>Electric Taxi</option>
                  </select>
                </div>
                <div className="flex items-start space-x-2 pt-1">
                  <input
                    type="checkbox"
                    id="hasLicense"
                    name="hasLicense"
                    checked={formData.hasLicense}
                    onChange={handleChange}
                    className="mt-1 cursor-pointer"
                  />
                  <label htmlFor="hasLicense" className="text-xs font-normal text-green-700">
                    I have a valid Rwandan driving license for this vehicle type.
                  </label>
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 cursor-pointer"
                  />
                  <label htmlFor="agreeTerms" className="text-xs font-normal text-green-700">
                    I agree to the TumaGreen rider terms and conditions.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-600 font-medium py-2.5 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <Send className="w-4 h-4 mr-2" /> Submit Application
                </button>
              </form>
            </div>
          </FadeInRight>
        </div>
      </div>
    </section>
  );
};

export default Riders;
