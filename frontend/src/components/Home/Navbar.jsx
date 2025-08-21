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
      className={`cursor-pointer text-lg  transition-colors px-3 ${
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
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-2 bg-white/80 backdrop-blur-md shadow-sm">
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
        <img src="/logo2.png" alt="Logo" className="h-6 w-auto" />
        <h3 className="font-semibold text-md text-[var(--primary)]">
          TumaGreen
        </h3>
      </Motion.div>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex gap-4 items-center text-md">{/**/}
        {navLinks.map(navItem)}
        <Motion.button
          className="bg-blue-500 py-1.5 px-4 rounded-lg text-white font-semibold shadow-md text-md" //
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
          <Menu size={24} className="cursor-pointer" onClick={() => setVisible(true)} />
        ) : (
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 right-0 h-screen w-2/6 bg-blue-100/95 p-4  gap-4 shadow-lg"
          >
            <div className="h-2/3 flex flex-col gap-12">
            <X
              className="cursor-pointer self-end"
              size={24}
              onClick={() => setVisible(false)}
            />
            <ul className="flex flex-col gap-3 text-">{navLinks.map(navItem)}</ul>
            <div className="flex justify-center">
            <Motion.button
              className="bg-blue-500 py-1.5 px-4 w-1/2 cursor-pointer rounded-lg text-white font-semibold shadow-md text-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setVisible(false);
                navigate("/login");
              }}
            >
              Login
            </Motion.button>

            </div>

            </div>
          </Motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
