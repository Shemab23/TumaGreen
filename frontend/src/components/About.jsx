import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Leaf,TrendingUp,Users } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-green-800 mb-3">
            About <span className="text-green-600">TumaGreen</span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Pioneering sustainable logistics for a brighter Rwandan future.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
              alt="Team of TumaGreen riders with electric motorcycles in Kigali"
             src="https://images.unsplash.com/photo-1695654394974-39e08777a2dd" />
          </Motion.div>

          <Motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay:0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-green-800">Our Mission: Clean Energy, Real-Time Delivery</h3>
            <p className="text-green-700 leading-relaxed">
              TumaGreen was founded with a clear vision: to revolutionize Rwanda's delivery landscape by harnessing the power of clean energy and smart technology. We are committed to providing fast, reliable, and eco-friendly delivery solutions that benefit our customers, our riders, and our planet.
            </p>
            <p className="text-green-700 leading-relaxed">
              We believe that sustainable practices and technological innovation can go hand-in-hand. By building an all-electric delivery network, we aim to significantly reduce carbon emissions, improve air quality, and contribute to Rwanda's ambitious environmental goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <Leaf className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-sm text-green-700 font-medium">100% Electric Fleet</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-sm text-green-700 font-medium">Smart Logistics</span>
              </div>
              <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-sm text-green-700 font-medium">Community Focused</span>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
