import React from 'react';
import { Phone, MapPin, Star, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallClick = () => {
    window.location.href = 'tel:+14784560749';
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/491886410_1088193086663045_5775876936489367045_n-removebg-preview.png" 
                alt="Mid Georgia Landscape Solutions Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="font-playfair text-xl font-bold text-green-400">
              Mid Georgia Landscape Solutions
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-medium">Trusted Since 2020</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your house into your forever home with unmatched workmanship 
              and dedicated support throughout Mid Georgia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Customer Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Landscape Design & Installation</li>
              <li>Lawn Care & Maintenance</li>
              <li>Hardscaping & Patios</li>
              <li>Property Upgrades</li>
              <li>New Property Landscaping</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <button 
                    onClick={handleCallClick}
                    className="text-white hover:text-green-400 font-medium transition-colors"
                  >
                    (478) 456-0749
                  </button>
                  <p className="text-gray-400 text-sm">Click to call</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">2082 N Jefferson St NE</p>
                  <p className="text-white">Milledgeville, GA 31061</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-gray-400 text-sm">
                  <strong className="text-green-400">Service Area:</strong><br />
                  Milledgeville, Eatonton, Gray, Sparta,<br />
                  Sandersville, Monticello & surrounding Mid Georgia areas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} Mid Georgia Landscape Solutions. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Licensed & Insured | Serving Mid Georgia Since 2020
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={handleCallClick}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;