import { useState } from "react";
import { navLinks } from "../../lib/index";
import { useAppContext } from "../../context/useAppContext";
import { motion as Motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { activeSection, setActiveSection } = useAppContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setVisible(false); // auto-close mobile menu
    }
  };

  const navItem = (link, i) => (
    <Motion.li
      key={i}
      className={`cursor-pointer transition-colors ${
        activeSection === link.id
          ? "text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold"
          : "text-green-700 font-medium"
      }`}
      onClick={() => scrollToSection(link.id)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.05 }}
    >
      {link.title}
    </Motion.li>
  );

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-4 bg-white/80 backdrop-blur-md shadow-sm">
      {/* Logo */}
      <Motion.div
        className="flex items-center gap-2 cursor-pointer"
        initial={{ x: -50, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
      >
        <img src="/logo2.png" alt="Logo" className="h-8 w-auto" />
        <h3 className="font-semibold text-lg text-[var(--primary)]">
          TumaGreen
        </h3>
      </Motion.div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-6 items-center text-sm md:text-base">
        {navLinks.map(navItem)}
        <Motion.button
          className="bg-blue-500 py-2 px-5 rounded-lg text-white font-semibold shadow-md"
          initial={{ scale: 0.8, y: -10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
        >
          Login
        </Motion.button>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        {!visible ? (
          <Menu size={32} className="cursor-pointer" onClick={() => setVisible(true)} />
        ) : (
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-screen w-3/4 bg-blue-100/95 p-6 flex flex-col gap-6 shadow-lg"
          >
            <X
              className="cursor-pointer self-end mb-4"
              size={32}
              onClick={() => setVisible(false)}
            />
            <ul className="flex flex-col gap-4 text-lg">{navLinks.map(navItem)}</ul>
            <Motion.button
              className="bg-blue-500 py-2 px-5 rounded-lg text-white font-semibold shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setVisible(false);
                navigate("/login");
              }}
            >
              Login
            </Motion.button>
          </Motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
