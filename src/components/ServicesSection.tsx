
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Leaf, Droplets, Home, Scissors, TreePine, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const landscapingServices = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Lawn Care & Maintenance",
      description: "Professional mowing, edging, and seasonal lawn maintenance to keep your yard pristine year-round."
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Garden Design & Installation",
      description: "Custom garden designs tailored to Utah's climate with expert installation and plant selection."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Hardscaping",
      description: "Beautiful patios, walkways, and retaining walls that enhance your property's value and appeal."
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Tree & Shrub Care",
      description: "Professional pruning, trimming, and maintenance to keep your landscape healthy and beautiful."
    }
  ];

  const windowServices = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Residential Window Cleaning",
      description: "Crystal clear windows for your home with attention to detail and streak-free results."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Pressure Washing",
      description: "Professional pressure washing for driveways, sidewalks, and exterior surfaces."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pristine landscaping to crystal clear windows, we provide comprehensive property care services throughout Utah County.
          </p>
        </div>

        {/* Landscaping Services */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-semibold text-green-700 text-center mb-12">
            Landscaping Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscapingServices.map((service, index) => (
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
        </div>

        {/* Window Washing Services */}
        <div>
          <h3 className="font-playfair text-3xl font-semibold text-blue-700 text-center mb-12">
            Window Washing & Cleaning Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {windowServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-xl mb-3 text-gray-800">{service.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
