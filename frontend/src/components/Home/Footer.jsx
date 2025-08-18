import React, { useState } from 'react';
import { Leaf, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FadeInUp } from '../motion/animations';

const Footer = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState('');
  const currentYear = new Date().getFullYear();

  const handleLogin = () => {
    if (key === 'Brian') {
      navigate('/admin');
    } else {
      alert('Not permitted');
      setKey('');
      setVisible(false);
    }
  };

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'How It Works', href: '#howitworks' },
        { label: 'Why TumaGreen', href: '#whyus' },
        { label: 'For Businesses', href: '#' },
      ],
    },
    {
      title: 'Riders',
      links: [
        { label: 'Become a Rider', href: '#riders' },
        { label: 'Rider Benefits', href: '#' },
        { label: 'Safety', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
  ];

  const socialMedia = [
    { icon: <Youtube color="red" />, label: 'YouTube', href: '#' },
    { icon: <Instagram color="orange" />, label: 'Instagram', href: '#' },
    { icon: <Linkedin color="blue" />, label: 'LinkedIn', href: '#' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <FadeInUp>
      <footer className="bg-green-50 relative">
        {/* Hidden Admin Login */}
        {visible && (
          <div className="absolute top-3 left-3 h-[150px] w-[150px] bg-green-400/70 flex flex-col p-2 gap-3 rounded-lg shadow-lg z-50">
            <button
              className="bg-red-400 w-[50px] text-white px-4 py-2 rounded-lg"
              onClick={() => setVisible(false)}
            >
              X
            </button>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter Key"
              className="bg-amber-100 px-2 py-1 rounded-md"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}

        {/* Footer Main */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-5 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setVisible(true)}>
                <Leaf className="w-8 h-8 text-green-600" />
                <span className="font-orbitron text-2xl font-bold text-green-700">TumaGreen</span>
              </div>
              <p className="text-md font-medium text-green-800">
                Pioneering clean energy delivery in Rwanda. Fast, smart, and 100% green.
              </p>
              <p className="text-sm text-green-600 font-medium">Live Green. Deliver Smart.</p>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-bold text-green-800 mb-3">{section.title}</p>
                <ul className="space-y-1.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }
                        }}
                        className="text-md font-medium text-green-700 hover:text-green-500 hover:underline transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Media */}
            <div className="grid space-y-1.5">
              <p className="font-bold text-green-700">Social Media</p>
              {socialMedia.map((media, i) => (
                <div key={i} className="font-semibold flex items-center gap-2">
                  {media.icon}
                  <a href={media.href} className="text-green-700 hover:text-green-500 transition-colors">
                    {media.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="bg-green-800 text-center py-4">
          <p className="text-sm md:text-md font-medium text-white">
            &copy; {currentYear} TumaGreen. All rights reserved. Innovating for a sustainable Rwanda.
          </p>
        </div>
      </footer>
    </FadeInUp>
  );
};

export default Footer;
