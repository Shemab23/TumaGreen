import React, { useState } from 'react'
import { navLinks } from '../../lib/index'
import { useAppContext } from '../../context/useAppContext'
import { motion as Motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import {BrowserRouter as Router , Routes, Route,useNavigate} from 'react-router-dom'


const Navbar = () => {
  const { activeSection, setActiveSection } = useAppContext();
  const [visible, setVisible] = useState(false);

    const navigate = useNavigate();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
      <nav className='fixed top-0 w-full z-50 flex justify-between px-12 py-4 bg-white/80'>
      <Motion.div
        className='flex flex-row cursor-pointer'
        initial={{ x: -50, scale: 0.4 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{scale: 1.1 }}
        whileTap={{scale: 0.9 }}
        onClick={()=>alert(`to home`)}
      >
        <img src="/logo2.png" alt="Logo" />
        <h3 className='font-semibold text-[var(--primary)]'>TumaGreen</h3>
      </Motion.div>

      {/* Desktop Nav */}
      <ul className='hidden lg:flex gap-6 cursor-pointer sticky'>
        {navLinks.map((link, i) => (
          <Motion.p
            key={i}
            className={`text-sm md:text-sm lg:text-md xl:text-lg font-medium transition-colors hover:text-green-600 ${
              activeSection === link.id
                ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                : 'text-green-700 font-semibold text-md'
            }`}
            onClick={() => scrollToSection(link.id)}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {link.title}
          </Motion.p>
        ))}
        <Motion.button className='bg-blue-500 py-2 px-4 text-lg inter font-semibold text-white rounded-lg cursor-pointer'
          initial={{scale: 0.3 , y: -10}}
          animate={{scale: 1 , y: 0}}
          transition={{duration: 0.5}}
          whileHover={{scale: 1.2 }}
          whileTap={{scale: 0.9 }}
          onClick={()=>navigate('/login')}
        >Login</Motion.button>
      </ul>

      {/* Mobile Menu */}
      <div className='lg:hidden'>
        {!visible ? (
          <Menu size={32} className='cursor-pointer' onClick={handleClick} />
        ) : (
          <div className='absolute top-0 right-0 min-h-[40vh] min-w-[30vw] bg-blue-100/80 p-4 flex flex-col gap-3 rounded-xl cursor-pointer'>
            <X className='cursor-pointer' onClick={handleClick} size={35}/>
            {navLinks.map((link, i) => (
          <Motion.p
            key={i}
            className={`text-lg hover:text-green-800 ${
              activeSection === link.id
                ? 'text-green-600 underline underline-offset-4 decoration-2 decoration-green-500 font-semibold text-lg'
                : 'text-green-700 font-semibold text-md'
            }`}
            onClick={() => scrollToSection(link.id)}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            {link.title}
          </Motion.p>
        ))}
        <Motion.button className='bg-blue-500 py-2 px-4 text-lg inter font-semibold text-white rounded-lg cursor-pointer'
          initial={{scale: 0.3 , y: -10}}
          animate={{scale: 1 , y: 0}}
          transition={{duration: 0.5}}
          whileHover={{scale: 1.2 }}
          whileTap={{scale: 0.9 }}
          onClick={()=>navigate('/login')}
        >Login</Motion.button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
