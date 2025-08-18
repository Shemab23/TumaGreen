import React from "react";
import { steps } from "../../lib";
import { FadeInUp } from "../motion/animations";

const HowItWorksSection = () => {
  return (
    <section id="howitworks" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
              Easy Steps to <span className="text-green-600">Green Delivery</span>
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Experience seamless, eco-friendly deliveries with TumaGreen.
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <FadeInUp key={index} delay={0.2 + index * 0.1}>
              <div className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-green-light hover:shadow-green-medium transition-all duration-300 hover:scale-[1.03]">
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-green-700 leading-relaxed">{step.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
