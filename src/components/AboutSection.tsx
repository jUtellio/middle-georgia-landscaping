import React from 'react';
import { Card, CardContent } from './ui/card';
import { Award, Shield, MapPin, Clock } from 'lucide-react';

const AboutSection = () => {
  const credentials = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractor with comprehensive liability insurance for your peace of mind."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Established 2020",
      description: "Proudly serving Mid Georgia with reliable, professional landscaping services since 2020."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Expertise",
      description: "Deep understanding of Georgia's unique climate, soil conditions, and local regulations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Guarantee",
      description: "We stand behind our work with unmatched workmanship and dedicated support throughout the entire process."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
              About Mid Georgia Landscape Solutions
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                At Mid Georgia Landscape Solutions, we take pride in providing our customers with 
                unmatched workmanship and dedicated support throughout the entire process. We're 
                more than just a landscaping company – we're your partners in transforming your 
                house into your forever home.
              </p>
              <p>
                Located at <strong>2082 N Jefferson St NE, Milledgeville, GA 31061</strong>, we 
                understand the unique challenges and opportunities that come with maintaining 
                properties in Mid Georgia. From the specific plants that thrive in our climate 
                to the seasonal maintenance needs of Georgia homes, our local expertise makes 
                all the difference.
              </p>
              <p>
                Whether it's a new property or an upgrade to your existing one, we're here to 
                help make your vision a reality! Our commitment to excellence has made us a 
                trusted name in Mid Georgia landscaping since 2020.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="font-semibold text-green-800 mb-2">Our Promise to You:</p>
                <p className="text-green-700">
                  Professional service, transparent pricing, and results that exceed your expectations. 
                  We're not satisfied until you're completely happy with our work and your house 
                  truly feels like your forever home.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Credentials */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {credentials.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Area */}
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-center mb-4 text-gray-800">
                  Proudly Serving Mid Georgia
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <p className="font-semibold text-green-700">Primary Areas:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Milledgeville</li>
                      <li>Eatonton</li>
                      <li>Gray</li>
                      <li>Sparta</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-green-700">Extended Areas:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Sandersville</li>
                      <li>Monticello</li>
                      <li>Dublin</li>
                      <li>Macon</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Headquarters:</strong> 2082 N Jefferson St NE, Milledgeville, GA 31061
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;