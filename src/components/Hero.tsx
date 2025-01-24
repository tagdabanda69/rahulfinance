import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-6">
          Empowering Your<br />Financial Journey
        </h1>
        <p className="text-xl md:text-1xl mb-8 max-w-2xl">
          Our mission is to provide the insights, tools, and expertise you need to turn your financial dreams into reality. Introducing India's First of its kind All-In-One Investment Platform to transform your Investment Journey.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200"
        >
          <span>Get Started</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
