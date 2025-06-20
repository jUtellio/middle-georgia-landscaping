
import React from 'react';
import { Phone, MapPin, Star, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleCallClick = () => {
    window.location.href = 'tel:+18014725408';
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
            <h3 className="font-playfair text-2xl font-bold text-green-400">
              AGC Window Washing<br />& Landscaping
            </h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-medium">42+ Five-Star Reviews</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional landscaping and window cleaning services throughout Utah County. 
              Quality work that transforms your property.
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
              <li>Landscaping Design & Installation</li>
              <li>Lawn Care & Maintenance</li>
              <li>Hardscaping & Patios</li>
              <li>Residential Window Cleaning</li>
              <li>Commercial Window Cleaning</li>
              <li>Pressure Washing</li>
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
                    (801) 472-5408
                  </button>
                  <p className="text-gray-400 text-sm">Click to call</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">1692 N 240 W</p>
                  <p className="text-white">Orem, UT 84057</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-gray-400 text-sm">
                  <strong className="text-green-400">Service Area:</strong><br />
                  Orem, Provo, Lindon, Pleasant Grove,<br />
                  Spanish Fork, Springville & surrounding areas
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
                © {currentYear} AGC Window Washing & Landscaping. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Licensed & Insured | Serving Utah County Since 2020
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
