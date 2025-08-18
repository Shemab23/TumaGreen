import React from "react";
import { useNavigate } from "react-router-dom";
import { FadePage, FadeInUp } from "../components/motion/animations";
import MapInParent from "../Map/Map";
import RiderPackage from "../components/rider/RiderPackage";
import RiderHistory from "../components/rider/RiderHistory";
import ContactSection from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";

const Rider = () => {
  const navigate = useNavigate();

  const navLinks = [
    { link: "Map", id: "map" },
    { link: "Packages", id: "packages" },
    { link: "History", id: "history" },
    { link: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FadePage>
      <div className="flex h-screen w-screen">
        {/* Sidebar */}
        <aside className="w-1/6 bg-amber-200 h-full p-4 flex flex-col">
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
                  className="text-left px-2 py-1 rounded-md text-green-700 hover:bg-green-200"
                >
                  {link.link}
                </button>
              </FadeInUp>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-green-50 p-4 space-y-6">
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
      </div>
    </FadePage>
  );
};

export default Rider;
