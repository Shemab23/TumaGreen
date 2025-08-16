import React from 'react';
import { Leaf, Phone, Mail, MapPin as MapPinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Why TumaGreen", href: "#why-tumagreen" },
        { label: "For Businesses", href: "#" },
      ],
    },
    {
      title: "Riders",
      links: [
        { label: "Become a Rider", href: "#become-rider" },
        { label: "Rider Benefits", href: "#" },
        { label: "Safety", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1)); // remove #
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <footer className="bg-green-50 border-t border-green-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="font-orbitron text-2xl font-bold text-green-700">TumaGreen</span>
            </div>
            <p className="text-sm text-green-700">
              Pioneering clean energy delivery in Rwanda. Fast, smart, and 100% green.
            </p>
            <p className="text-sm text-green-600 font-medium">Live Green. Deliver Smart.</p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-semibold text-green-800 mb-3">{section.title}</p>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if(link.href.startsWith("#")) {
                           e.preventDefault();
                           scrollToSection(link.href);
                        }
                      }}
                      className="text-sm text-green-700 hover:text-green-500 hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-semibold text-green-800 mb-3">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-green-700">
                <Phone className="w-4 h-4 mr-2 text-green-500" />
                <span>+250 7XX XXX XXX</span>
              </li>
              <li className="flex items-center text-green-700">
                <Mail className="w-4 h-4 mr-2 text-green-500" />
                <span>info@tumagreen.rw</span>
              </li>
              <li className="flex items-start text-green-700">
                <MapPinIcon className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-200 pt-8 text-center">
          <p className="text-sm text-green-600">
            &copy; {currentYear} TumaGreen. All rights reserved. Innovating for a sustainable Rwanda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
