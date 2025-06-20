
import React, { useState } from 'react';
import { Button } from './ui/button';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'landscaping',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Garden Transformation',
      description: 'Complete garden redesign with native Utah plants'
    },
    {
      id: 2,
      category: 'landscaping',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Landscape Maintenance',
      description: 'Professional lawn care and tree maintenance'
    },
    {
      id: 3,
      category: 'windows',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Residential Window Cleaning',
      description: 'Crystal clear windows for modern homes'
    },
    {
      id: 4,
      category: 'landscaping',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Hardscape Installation',
      description: 'Beautiful stone work and pathways'
    },
    {
      id: 5,
      category: 'windows',
      image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Commercial Cleaning',
      description: 'Professional window cleaning for businesses'
    },
    {
      id: 6,
      category: 'landscaping',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Natural Landscaping',
      description: 'Sustainable landscape design with native species'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Our Beautiful Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the transformations we've created for homeowners across Utah County. Quality work that speaks for itself.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              onClick={() => setActiveFilter('all')}
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              All Work
            </Button>
            <Button
              onClick={() => setActiveFilter('landscaping')}
              variant={activeFilter === 'landscaping' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'landscaping' 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
              }`}
            >
              Landscaping
            </Button>
            <Button
              onClick={() => setActiveFilter('windows')}
              variant={activeFilter === 'windows' ? 'default' : 'outline'}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === 'windows' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
            >
              Window Cleaning
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
