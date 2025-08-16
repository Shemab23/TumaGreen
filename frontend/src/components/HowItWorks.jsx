import React from 'react';
import { motion as Motion } from 'framer-motion';
import { steps } from '../lib';

const HowItWorksSection = () => {


  return (
    <section id="howitworks" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
            Easy Steps to <span className="text-green-600">Green Delivery</span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Experience seamless, eco-friendly deliveries with TumaGreen.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <Motion.div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-green-light hover:shadow-green-medium transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6`}>
                <step.icon className={`w-8 h-8 ${step.color}`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-2.5">{step.title}</h3>
              <p className="text-green-700 leading-relaxed">{step.description}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
