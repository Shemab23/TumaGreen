import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import HowItWorksSection from './components/HowItWorks';
import Riders from './components/Riders';
import TestimonialsSection from './components/Testimonials';
import ContactSection from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';


const App = () => {
  return (
    <main className='bg-[var(--bg)] h-[100vh]'>
      <Navbar/>
      <Hero/>
      <HowItWorksSection/>
      <WhyUs/>
      <Riders/>
      <TestimonialsSection/>
      <About/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

export default App
