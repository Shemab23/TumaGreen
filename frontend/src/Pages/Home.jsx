import { FadePage } from "../components/motion/animations";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorksSection from "../components/Home/HowItWorks";
import WhyUs from "../components/Home/WhyUs";
import Riders from "../components/Home/Riders";
import TestimonialsSection from "../components/Home/Testimonials";
import About from "../components/Home/About";
import ContactSection from "../components/Home/ContactUs";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <FadePage>
      <Navbar />
      <main className="flex flex-col gap-16">
        <Hero />
        <HowItWorksSection />
        <WhyUs />
        <Riders />
        <TestimonialsSection />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </FadePage>
  );
};

export default Home;
