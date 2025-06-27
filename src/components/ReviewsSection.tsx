import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Milledgeville, GA",
      rating: 5,
      text: "Mid Georgia Landscape Solutions truly transformed our backyard into our dream space! Their attention to detail and professional service exceeded our expectations. They really made our house feel like our forever home.",
      service: "Complete Landscape Design"
    },
    {
      id: 2,
      name: "Michael R.",
      location: "Eatonton, GA",
      rating: 5,
      text: "Outstanding workmanship and dedicated support throughout the entire process. The team was professional, reliable, and delivered exactly what they promised. Highly recommend for anyone in Mid Georgia!",
      service: "Property Upgrade"
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Gray, GA",
      rating: 5,
      text: "We've used Mid Georgia Landscape Solutions for multiple projects over the past two years. They're consistently professional, show up on time, and do excellent work. Couldn't be happier with their service!",
      service: "Lawn Care & Landscaping"
    },
    {
      id: 4,
      name: "David K.",
      location: "Sparta, GA",
      rating: 5,
      text: "They installed our new patio and walkway last spring. The craftsmanship is outstanding and has held up beautifully through Georgia's weather. Great communication throughout the entire process.",
      service: "Hardscaping"
    },
    {
      id: 5,
      name: "Amanda T.",
      location: "Milledgeville, GA",
      rating: 5,
      text: "Professional lawn care that keeps our yard looking perfect year-round. The team is knowledgeable about local plants and Georgia's climate. Fair pricing and excellent results every time.",
      service: "Lawn Maintenance"
    },
    {
      id: 6,
      name: "Robert H.",
      location: "Sandersville, GA",
      rating: 5,
      text: "Reliable, professional, and detail-oriented. Mid Georgia Landscape Solutions has been maintaining our property for months and the results are consistently excellent. Highly recommend for any property owner in Mid Georgia.",
      service: "Property Maintenance"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-bold text-gray-700">5.0</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Don't just take our word for it. Here's what satisfied customers across Mid Georgia have to say about our work.
          </p>
          <div className="inline-flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-yellow-800">Trusted Since 2020</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-green-600 opacity-50" />
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{review.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Ready to Join Our Happy Customers?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the quality service that has made us a trusted name in Mid Georgia landscaping since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Your Free Estimate
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+14784560749'}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
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

export default ReviewsSection;