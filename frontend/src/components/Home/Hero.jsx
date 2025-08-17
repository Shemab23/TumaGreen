import { useState, useEffect } from "react"
import { motion as Motion } from 'framer-motion';
import { Navigation } from 'lucide-react';
// import {useUser } from '@/context/UserContext';

const HeroSection = () => {
  // const { riders, handleTrackOrder } = useUser();
    const [index, setIndex] = useState(0)

  const images = ["/img1.jpg","/img2.jpg","/img3.jpg"]

  const scrollToRiders = () => {
    document.getElementById('riders')?.scrollIntoView({ behavior: 'smooth' });
  };

   useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="home" className="flex items-center bg-green-50 pt-12 w-[100%] h-[80vh]">
      {/* displaying back ground */}
    <div className="absolute inset-0 opacity-20">
      <Motion.div
        className="w-full h-[80vh] rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ position: 'relative' }}
      >
        <Motion.img
        key={index} // 👈 important for animation reset
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-full xl:object-cover md:object-contain lg:object-contain object-contain "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
      </Motion.div>
    </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        <div className="grid  gap-12 items-center w-full">
          <Motion.div
            className=" space-y-6 text-center lg:text-left flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold leading-tight text-green-800">
              Real-Time Delivery, <span className="text-green-600">Powered by Clean Energy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-green-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Track and book the nearest electric rider in Rwanda — fast, smart, and 100% green.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="flex px-8 py-3 bg-green-600 rounded-md text-white font-semibold"
                onClick={scrollToRiders}
              >
                <Navigation className="w-5 h-5 mr-2.5" />
                Book a Green Ride
              </button>
            </div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
