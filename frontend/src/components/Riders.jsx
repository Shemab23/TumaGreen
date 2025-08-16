'use client'
import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import {  Send } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import { benefits } from '../lib';
import RiderCard from './ui/RiderCard';

const Riders = () => {
  const { riders } = useAppContext();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleType: 'Electric Motorcycle',
    hasLicense: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);
  };

  const displayedRiders = riders.slice(0, 2);


  return (
    <section id="riders" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
            Become an <span className="text-green-600">Electric Rider</span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Join Rwanda's green delivery revolution. Ride with TumaGreen!
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Featured Riders - takes more space */}
          <Motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-800 mb-2 text-center lg:text-left">Meet Our Top Riders</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {displayedRiders.map(rider => (
                <RiderCard key={rider.id} rider={rider}/>
              ))}
            </div>
             <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4 text-center lg:text-left">Why Ride With TumaGreen?</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-green-100">
                    <benefit.icon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-green-700 text-sm">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion.div>

          {/* Rider Application Form - takes less space */}
          <Motion.div
            className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-green-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-5   text-center">Apply Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="font-semibold text-black  text-md">Full Name</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} placeholder='Enter your full-name' required className="mt-1 px-4 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm " />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="font-semibold text-md  text-black ">Phone</label>
                  <input type="tel" name="phone" id="phone" placeholder='+250 7********' value={formData.phone} onChange={handleChange} required className="mt-1 shadow-lg  border border-green-800/40 px-4 bg-gray-100/60 w-full text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold text-md  text-black ">Email</label>
                  <input type="email" name="email" placeholder='your@email' id="email" value={formData.email} onChange={handleChange} required className="mt-1 px-4 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="vehicleType" className="font-semibold text-md  text-black ">Vehicle Type</label>
                <select
                  name="vehicleType"
                  id="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  required
                  className="mt-1 border border-green-800/40 shadow-lg bg-gray-100/60 w-full text-sm"
                >
                  <option>Electric Motorcycle</option>
                  <option>Electric Scooter</option>
                  <option>Electric Van</option>
                  <option>Electric Taxi</option>
                </select>
              </div>
              <div className="flex items-start space-x-2 pt-1">
                <input type='checkbox' id="hasLicense" name="hasLicense" checked={formData.hasLicense} onChange={handleChange} className="mt-1  cursor-pointer"/>
                <label htmlFor="hasLicense" className="text-xs font-normal text-green-700">I have a valid Rwandan driving license for this vehicle type.</label>
              </div>
              <div className="flex items-start space-x-2">
                <input type='checkbox'  id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required className="mt-1  cursor-pointer"/>
                <label htmlFor="agreeTerms" className="text-xs font-normal text-green-700 ">I agree to the TumaGreen rider terms and conditions.</label>
              </div>
              <button type="submit" className="w-full flex justify-center  bg-green-600 font-medium py-2.5 text-white rounded-lg">
                <Send className="w-4 h-4 mr-2"/> Submit Application
              </button>
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Riders;
