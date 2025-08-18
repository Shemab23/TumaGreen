import { useState, useEffect } from "react";
import { Navigation } from "lucide-react";
import { FadeInUp, ZoomIn } from "../motion/animations";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToRiders = () => {
    document.getElementById("riders")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full h-[80vh] overflow-hidden bg-green-50"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        <img
          key={index}
          src={images[index]}
          alt={`slide-${index}`}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 via-green-800/40 to-green-700/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp y={40} delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold leading-tight text-white drop-shadow-md">
            Real-Time Delivery,{" "}
            <span className="text-green-300">Powered by Clean Energy.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
            Track and book the nearest electric rider in Rwanda — fast, smart, and 100% green.
          </p>
          <ZoomIn delay={0.3}>
            <button
              onClick={scrollToRiders}
              className="flex items-center px-8 py-3 bg-green-600 hover:bg-green-700 transition-colors rounded-md text-white font-semibold shadow-lg mt-4"
            >
              <Navigation className="w-5 h-5 mr-2.5" />
              Book a Green Ride
            </button>
          </ZoomIn>
        </FadeInUp>
      </div>
    </section>
  );
};

export default HeroSection;
