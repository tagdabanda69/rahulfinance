import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <span className="text-2xl font-bold text-blue-500">WealthVate</span>
            <p className="mt-4 text-gray-400">
              Professional financial consulting services to help you achieve your financial goals.
              SEBI Registered Investment Advisor.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white">Resources</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
          <iframe 
                src="https://varshney3-my.sharepoint.com/personal/abhilash_varshney3_onmicrosoft_com/_layouts/15/embed.aspx?UniqueId=282c1bdc-ebea-4333-adfd-2eb43a1b58a1"
                width="180" 
                height="180" 
                style={{ borderRadius: '50%', pointerEvents: 'none' }} // Set border radius and disable interaction
                sandbox="allow-same-origin allow-scripts" // Restrict actions
              ></iframe>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Finance Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/rahul-agarwal-68877a56?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/financewithcarahul?igsh=cTQzeTBrcTJ5cWpu" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:rahulca.agarwal@gmail.com" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;