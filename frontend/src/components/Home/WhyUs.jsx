import React from "react";
import { features } from "../../lib";
import { FadeInUp, ZoomIn } from "../motion/animations";

const WhyTumaGreenSection = () => {
  return (
    <section id="whyus" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
              Why Choose <span className="text-green-600">TumaGreen</span>?
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              We're not just delivering packages; we're delivering a sustainable future for Rwanda.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ZoomIn key={index} delay={0.2 + index * 0.1}>
              <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">{feature.title}</h3>
                </div>
                <p className="text-green-700 leading-relaxed">{feature.description}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTumaGreenSection;
