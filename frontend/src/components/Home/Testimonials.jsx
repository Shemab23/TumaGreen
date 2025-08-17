import React from 'react';
import { motion as Motion } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../lib';

const TestimonialsSection = () => {

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
            Loved by <span className="text-green-600">Our Community</span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Hear what eco-conscious businesses and users are saying about TumaGreen.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
