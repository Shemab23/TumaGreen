import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../lib";
import { FadeInUp } from "../motion/animations";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp delay={0.1}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
              Loved by <span className="text-green-600">Our Community</span>
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Hear what eco-conscious businesses and users are saying about TumaGreen.
            </p>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInUp key={index} delay={0.2 + index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
