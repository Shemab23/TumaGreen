import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage } from "../components/motion/animations";
import MapInParent from "../Map/Map";
import RideRequest from "../components/User/RiderRequest";
import PaymentSection from "../components/User/PaymentSection";
import ProgressSteps from "../components/User/ProgressSteps";
import HistoryTable from "../components/User/HistoryTable";
import ContactSection from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer"; // import Footer

import { tableHeaders, tableData } from "../lib";

const User = () => {
  const [activeSection, setActiveSection] = useState("map");
  const navigate = useNavigate();

  const navLinks = [
    { link: "Map", id: "map" },
    { link: "Request Ride", id: "ride" },
    { link: "Progress", id: "progress" },
    { link: "History", id: "history" },
    { link: "Contact Us", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <FadePage>
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <aside className="w-1/6 bg-green-100 h-full p-4 flex flex-col">
          <h2
            className="text-xl font-bold mb-6 cursor-pointer text-green-700"
            onClick={() => navigate("/")}
          >
            TumaGreen
          </h2>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(link.id)}
                className={`text-left px-2 py-1 rounded-md ${
                  activeSection === link.id
                    ? "bg-green-500 text-white font-semibold"
                    : "text-green-700 hover:bg-green-200"
                }`}
              >
                {link.link}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-green-50 p-4 space-y-6">
          <section id="map" className="h-[300px] rounded-lg overflow-hidden shadow-md">
            <MapInParent />
          </section>

         <section
            id="ride"
              className="grid gap-4 md:grid-cols-2 w-full"
            >
              <div className="w-full">
                <RideRequest />
              </div>
              <div className="w-full">
                <PaymentSection />
              </div>
          </section>


          <section id="progress">
            <ProgressSteps />
          </section>

          <section id="history">
            <HistoryTable headers={tableHeaders} data={tableData} />
          </section>

          <section id="contact">
            <ContactSection />
          </section>

          {/* Footer from Home */}
          <div className="pt-6">
            <Footer />
          </div>
        </main>
      </div>
    </FadePage>
  );
};

export default User;
