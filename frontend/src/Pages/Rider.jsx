import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage, FadeInUp } from "../components/motion/animations";
import MapInParent from "../Map/Map";
import RiderPackage from "../components/rider/RiderPackage";
import RiderHistory from "../components/rider/RiderHistory";
import ContactSection from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";

const Rider = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("map");

  const navLinks = [
    { link: "Map", id: "map" },
    { link: "Packages", id: "packages" },
    { link: "History", id: "history" },
    { link: "Contact", id: "contact" },
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
          className={`bg-amber-200 p-4 flex flex-col space-y-4 overflow-y-auto fixed md:static top-0 left-0 h-full z-40 w-64 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <FadeInUp>
            <h2
              className="cursor-pointer text-xl font-bold text-[var(--primary)] mb-6"
              onClick={() => navigate("/")}
            >
              TumaGreen
            </h2>
          </FadeInUp>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <FadeInUp key={i}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-2 py-1 rounded-md ${
                    activeSection === link.id
                      ? "bg-green-500 text-white font-semibold"
                      : "text-green-700 hover:bg-green-200"
                  }`}
                >
                  {link.link}
                </button>
              </FadeInUp>
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
          {/* Map */}
          <FadeInUp>
            <section id="map" className="h-[400px] rounded-lg overflow-hidden shadow-md">
              <MapInParent />
            </section>
          </FadeInUp>

          {/* Packages */}
          <FadeInUp>
            <section id="packages">
              <RiderPackage />
            </section>
          </FadeInUp>

          {/* History */}
          <FadeInUp>
            <section id="history">
              <RiderHistory />
            </section>
          </FadeInUp>

          {/* Contact */}
          <FadeInUp>
            <section id="contact">
              <ContactSection />
            </section>
          </FadeInUp>

          {/* Footer */}
          <div className="pt-3">
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

export default Rider;
