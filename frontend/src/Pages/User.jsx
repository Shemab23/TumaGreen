import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage } from "../components/motion/animations";
import MapInParent from "../Map/Map";
import RideRequest from "../components/User/RiderRequest";
import PaymentSection from "../components/User/PaymentSection";
import ProgressSteps from "../components/User/ProgressSteps";
import HistoryTable from "../components/User/HistoryTable";
import ContactSection from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";
import { tableHeaders, tableData } from "../lib";

const User = () => {
  const [activeSection, setActiveSection] = useState("map");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      setSidebarOpen(false); // close sidebar on mobile
    }
  };

  return (
    <FadePage>
      <div className="grid grid-cols-[auto_1fr] h-screen w-screen">
        {/* Sidebar */}
        <aside
          className={`bg-green-100 p-4 flex flex-col space-y-4 overflow-y-auto fixed md:static top-0 left-0 h-full z-40 w-64 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
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

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="overflow-y-auto z-0 bg-green-50 p-4 space-y-6">
          <section id="map" className="h-[300px] rounded-lg overflow-hidden shadow-md">
            <MapInParent />
          </section>

          <section id="ride" className="grid gap-4 md:grid-cols-2 w-full">
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

          {/* Footer */}
          <div className="pt-6">
            <Footer />
          </div>
        </main>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden fixed top-3 right-3 z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-green-600 text-white px-3 py-2 rounded-md"
          >
            {sidebarOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </FadePage>
  );
};

export default User;
