import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <Motion.div
      className="testimonial-card-green rounded-xl p-6 h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current mr-0.5" />
          ))}
        </div>
        <Sparkles className="w-6 h-6 text-green-400" />
      </div>

      <blockquote className="text-green-700 italic leading-relaxed mb-4 flex-grow">
        "{testimonial.content}"
      </blockquote>

      <div className="flex items-center mt-auto">
        <img
          className="w-11 h-11 rounded-full border-2 border-green-200 mr-3"
          alt={testimonial.name + " avatar"}
         src="https://images.unsplash.com/photo-1630862338617-5b47c0ea7a7c" />
        <div>
          <p className="font-semibold text-green-800">{testimonial.name}</p>
          <p className="text-sm text-green-600">{testimonial.role}</p>
        </div>
      </div>
    </Motion.div>
  );
};

export default TestimonialCard;
