import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadePage, FadeInUp } from "../components/motion/animations";
import Footer from "../components/Home/Footer";
import MapInParent from "../Map/Map";

// Admin sections
import FinanceSection from "../components/admin/FinanceSection";
import RiderRegistration from "../components/admin/RiderRegistration";
import AllUsersSection from "../components/admin/AllUsers";
import AllPartnersSection from "../components/admin/AllPartnersSection";
import HistorySection from "../components/admin/HistorySection";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("map");
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { link: "Map", id: "map" },
    { link: "Finance", id: "finance" },
    { link: "Rider Registration", id: "rider" },
    { link: "All Users", id: "users" },
    { link: "All Partners", id: "partners" },
    { link: "History", id: "history" },
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

        {/* Main content */}
        <main className="overflow-y-auto z-0 bg-green-50">
          <section id="map" className="h-[300px] rounded-lg overflow-hidden shadow-md">
            <MapInParent />
          </section>

          <section id="finance">
            <FadeInUp>
              <FinanceSection />
            </FadeInUp>
          </section>

          <section id="rider">
            <FadeInUp>
              <RiderRegistration />
            </FadeInUp>
          </section>

          <section id="users">
            <FadeInUp>
              <AllUsersSection />
            </FadeInUp>
          </section>

          <section id="partners">
            <FadeInUp>
              <AllPartnersSection />
            </FadeInUp>
          </section>

          <section id="history">
            <FadeInUp>
              <HistorySection />
            </FadeInUp>
          </section>

          {/* Footer */}
          <div className="pt-6">
            <Footer />
          </div>
        </main>

        {/* Mobile hamburger toggle */}
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

export default Admin;
