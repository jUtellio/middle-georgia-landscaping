import React from 'react';
import { Button } from './ui/button';
import { Star, Phone, MapPin } from 'lucide-react';

interface HeroSectionProps {
  logoRef?: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ logoRef }) => {
  const handleCallClick = () => {
    window.location.href = 'tel:+14784560749';
  };

  const handleEstimateClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 90, 39, 0.7), rgba(45, 90, 39, 0.5)), url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          {/* Company Logo */}
          <div className="flex justify-center mb-8" ref={logoRef}>
            <img 
              src="/lovable-uploads/491886410_1088193086663045_5775876936489367045_n-removebg-preview.png" 
              alt="Mid Georgia Landscape Solutions Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-yellow-200 font-medium">Trusted Since 2020</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Transform Your House into Your Forever Home
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 max-w-4xl mx-auto">
            Professional Landscaping Services Mid Georgia
          </h2>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">(478) 456-0749</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Milledgeville, GA</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              onClick={handleEstimateClick}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
            >
              Get Free Estimate
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Call Now: (478) 456-0749
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white bg-white/20 backdrop-blur-sm rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;