import React from "react";
import { Motion } from "framer-motion";
import { MapPin, Truck, Clock, Mail } from "lucide-react";

const Sidebar = ({ active, setActive, navigate }) => {
  const navLinks = [
    { link: "Map", id: "map", icon: <MapPin className="w-5 h-5" /> },
    { link: "Request Ride", id: "ride", icon: <Truck className="w-5 h-5" /> },
    { link: "History", id: "history", icon: <Clock className="w-5 h-5" /> },
    { link: "Contact Us", id: "contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <div className="col-span-1 bg-gradient-to-b from-green-50 to-cyan-50 h-screen px-4 py-6 flex flex-col gap-6">
      <Motion.div
        className="flex items-center cursor-pointer gap-2"
        initial={{ x: -50, scale: 0.4 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => navigate("/")}
      >
        <h3 className="text-xl font-bold text-green-700">TumaGreen</h3>
      </Motion.div>

      <div className="flex flex-col gap-4 mt-6">
        {navLinks.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer ${
              active === item.id ? "bg-green-200 font-semibold" : "hover:bg-green-100"
            }`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon}
            <span>{item.link}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
