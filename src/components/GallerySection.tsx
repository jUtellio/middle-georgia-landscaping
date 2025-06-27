import React, { useState } from 'react';
import { Button } from './ui/button';
import { FadeInWhenVisible } from './FadeInWhenVisible';
import { AnimatePresence, motion } from 'framer-motion';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'landscaping',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/481160206_1045350347613986_5580935784565092018_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7eM6GRlQzkMQ7kNvwE9FWSP&_nc_oc=Adlu41zJ67V936l66gHkQ86GX9uf9wRJBJ1-nlzQWx1AseqaYQlDr70VQUzUeR-fWQh_Fcne1ywbfWpXa2A9wASb&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=-D6JLFHfHmgNa4Pb-1SoIw&oh=00_AfNwrTiViR133_qJqO8AStw2irye0c7xi15UdyaAgJ3YJw&oe=686468D7',
      title: 'Modern Landscape Design',
      description: 'Professional landscape design with decorative elements and native Georgia plants'
    },
    {
      id: 2,
      category: 'landscaping',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/476342475_1033013568847664_2111236442121360180_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oon18iC7GEgQ7kNvwHRI0F1&_nc_oc=AdnjJ3vWdUvgneHMG6Cah41h6W6mqUuOdmjJqab0ohPZMGJQ6lyrdQ3TUVrSarP9G1aFZ9Q_IsuIWQ26KgQWPM9Z&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=nSl40RPkOTE4786zvHhqDA&oh=00_AfOSYPWTixATpwDu3rnZotbvkjNpCa7MieHKy4TpqIQqWg&oe=68647263',
      title: 'Complete Lawn Installation',
      description: 'Fresh sod installation with landscape edging and strategic plantings'
    },
    {
      id: 3,
      category: 'hardscaping',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/481995456_1053677896781231_2395647065497973988_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mKuE91lZNjEQ7kNvwF2zjWl&_nc_oc=AdkwpY920WwnWuqUIqiHkhHq7VPrObbXPMBb5OePE2KK0PmQ9KqSfiUEBPC4z_RR1aReXM8-bu4cekgYdu9mTdxF&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=A6V7QIKOoRkLrKxBp_mn5A&oh=00_AfMC9P84D_Q24YKSRUs7Oo00PN5cxa8IdVcOFUIfiCe71A&oe=68647B4E',
      title: 'Retaining Wall & Lawn',
      description: 'Professional retaining wall installation with fresh lawn and edging'
    },
    {
      id: 4,
      category: 'landscaping',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/485302303_1064084055740615_2213253767994487903_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xstZT90owSMQ7kNvwHgkIk1&_nc_oc=Adnc2kBNYqjog6mFvimTQpPFaKvxGlGkVGqvcsuFbH7FFd9sedFuPaURoDxL6smzI0XXOmlGyF73D0SgJVwPi5pq&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=fdlo3ITPoB4-I-kgfuYj4g&oh=00_AfPo7vbbc-7IgutwL4eJnsyVLsBM62yrESfwQ84r1xhP8g&oe=68646BCC',
      title: 'Garden Design',
      description: 'Beautiful garden landscape with natural stone and mountain views'
    },
    {
      id: 5,
      category: 'maintenance',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/376406591_694488206033537_4271690165521352885_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CBRaI2hLiVwQ7kNvwHaf4zk&_nc_oc=AdmoeP0aumRQxXA3UqBVfBjSNNoTnX-eljtOduI_nb8zjUAoAEtyE2_jXRPsb26Gc_lfn1nkSHCUD2XerA8NLIwA&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=tIzt_COseYsDEL_PWrwzTw&oh=00_AfPwDZEiSxyp1_ZGCKvAop6oWPik2Mlff4cr3afWLREeoQ&oe=6864431C',
      title: 'Lawn Care & Maintenance',
      description: 'Pristine lawn care with professional mowing and edging services'
    },
    {
      id: 6,
      category: 'landscaping',
      image: 'https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/503877112_1124193719729648_6298897044332267887_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qzair987rZsQ7kNvwFmDYIe&_nc_oc=AdlYQzHjoiYN2QdoBeG5unCXkO5h3hwQi0wqTIrGpu_O8c7XSPlwTD60Bq4kJ7i_dUDAQ_5dNT-D2aHOpA92wSOX&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=FUt9oO4IVk5Z-EMqWdSXyw&oh=00_AfOn4tGQ_Pjz62l_uqS2jZT-yT2JmNJ2POh9m4MYP_1tmA&oe=686457B1',
      title: 'Property Transformation',
      description: 'Complete property makeover showcasing our unmatched workmanship'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Our Beautiful Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See the transformations we've created for homeowners across Mid Georgia. Quality work that speaks for itself.
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
                onClick={() => setActiveFilter('hardscaping')}
                variant={activeFilter === 'hardscaping' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === 'hardscaping' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                }`}
              >
                Hardscaping
              </Button>
              <Button
                onClick={() => setActiveFilter('maintenance')}
                variant={activeFilter === 'maintenance' ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === 'maintenance' 
                    ? 'bg-green-600 text-white shadow-lg' 
                    : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
                }`}
              >
                Maintenance
              </Button>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence initial={false}>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </FadeInWhenVisible>

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