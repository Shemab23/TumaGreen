import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Phone, Mail, MapPin as MapPinIcon, HelpCircle, MessageSquare } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import { faqs } from '../lib';

const ContactSection = () => {
  const { handleContactSubmit } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactSubmit(formData);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };


  return (
    <section id="contactus" className="py-16 sm:py-20 bg-white text-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Have questions or need support? We're here to help!
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Motion.div
            className="bg-green-50 p-6 sm:p-8 rounded-xl border border-green-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
              <MessageSquare className="w-7 h-7 text-green-600 mr-3" /> Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className='flex flex-col text-black'>
                Your Name
                <input type="text" name="name" id="contact-name" value={formData.name} onChange={handleChange} required className="border border-green-600/70 rounded-lg h-[40px] mt-1  px-3 bg-white" />
              </div>
              <div className='flex flex-col text-black'>
                Your Email
                <input type="email" name="email" id="contact-email" value={formData.email} onChange={handleChange} required className="border border-green-600/70 rounded-lg h-[40px] mt-1  px-3 bg-white"/>
              </div>
              <div className='flex flex-col text-black'>
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input type="text" name="subject" id="contact-subject" value={formData.subject} onChange={handleChange} required className="border border-green-600/70 rounded-lg h-[40px] mt-1  px-3 bg-white" />
              </div>
              <div className='flex flex-col text-black'>
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea name="message" id="contact-message" rows={4} value={formData.message} onChange={handleChange} required className="border border-green-600/70 rounded-lg h-auto mt-1  px-3 bg-white" />
              </div>
              <button type="submit" className="w-full bg-green-600/90 text-white font-medium py-3 rounded-lg">
                Send Message
              </button>
            </form>
          </Motion.div>

          <Motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4 flex items-center">
                <HelpCircle className="w-7 h-7 text-green-600 mr-3" /> Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details key={index} className="group bg-green-50 p-4 rounded-lg border border-green-100">
                    <summary className="flex justify-between items-center font-medium text-green-800 cursor-pointer hover:text-green-600">
                      {faq.q}
                      <span className="ml-2 text-green-500 group-open:rotate-90 transition-transform duration-200">&rarr;</span>
                    </summary>
                    <p className="text-green-700 mt-2 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Contact Information</h3>
              <ul className="space-y-3 text-green-700">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-green-500 mr-3" />
                  <span>+250 7XX XXX XXX</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-green-500 mr-3" />
                  <span>info@tumagreen.rw</span>
                </li>
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>KN XXX Street, Kigali, Rwanda</span>
                </li>
              </ul>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
