import React from 'react'

import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import WhyUs from '../components/Home/WhyUs';
import HowItWorksSection from '../components/Home/HowItWorks';
import Riders from '../components/Home/Riders';
import TestimonialsSection from '../components/Home/Testimonials';
import ContactSection from '../components/Home/ContactUs';
import About from '../components/Home/About';
import Footer from '../components/Home/Footer';


const App = () => {

  const currentYear = new Date().getFullYear();
  return (
  <div className=' bg-[var(--bg)] min-h-screen overflow-x-hidden'>
    <Navbar/>
    <main >
      <Hero/>
      <HowItWorksSection/>
      <WhyUs/>
      <Riders/>
      <TestimonialsSection/>
      <About/>
      <ContactSection/>
      <Footer/>
    </main>
    <div className=" bg-green-800 text-center ">
      <p className="text-md font-medium text-white pb-4">
        &copy; {currentYear} TumaGreen. All rights reserved. Innovating for a sustainable Rwanda.
      </p>
    </div>
  </div>
  )
}

export default App
