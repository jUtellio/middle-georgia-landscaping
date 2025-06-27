import React from 'react';
import { Card, CardContent } from './ui/card';
import { Leaf, Home, Scissors, TreePine, Sparkles, Users } from 'lucide-react';
import { FadeInWhenVisible } from './FadeInWhenVisible';

const ServicesSection = () => {
  const services = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Landscape Design & Installation",
      description: "Custom landscape designs tailored to Georgia's climate with expert installation and plant selection for your forever home."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Lawn Care & Maintenance",
      description: "Professional mowing, edging, and seasonal lawn maintenance to keep your property pristine year-round."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hardscaping & Patios",
      description: "Beautiful patios, walkways, and retaining walls that enhance your property's value and create outdoor living spaces."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Property Upgrades",
      description: "Transform your existing property with strategic improvements that make your house feel like your forever home."
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "New Property Landscaping",
      description: "Complete landscaping solutions for new properties, creating beautiful outdoor spaces from the ground up."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Design Consultation",
      description: "Professional consultation services to help you plan and visualize your dream landscape transformation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From landscape design to property upgrades, we provide comprehensive services to transform 
              your house into your forever home throughout Mid Georgia.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800">Unmatched Workmanship & Dedicated Support</span>
            </div>
          </div>
        </FadeInWhenVisible>

        {/* Services Grid */}
        <FadeInWhenVisible delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-xl mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Let's Make Your Vision a Reality!
            </h3>
            <p className="text-xl mb-6 text-green-100">
              Whether it's a new property or an upgrade to your existing one, we're here to help 
              transform your house into your forever home with unmatched workmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Your Free Estimate
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+14784560749'}
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call (478) 456-0749
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;