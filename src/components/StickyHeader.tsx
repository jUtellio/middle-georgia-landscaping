import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
  { label: 'Get Quote', href: '#contact' },
];

interface StickyHeaderProps {
  show: boolean;
}

export const StickyHeader: React.FC<StickyHeaderProps> = ({ show }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 shadow-md border-b border-white/30"
        >
          <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#top"
              className="flex items-center"
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src="/lovable-uploads/491886410_1088193086663045_5775876936489367045_n-removebg-preview.png"
                alt="Mid Georgia Landscape Solutions Logo"
                className="h-10 w-auto md:h-12 drop-shadow"
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
              <span className="ml-3 font-playfair text-xl md:text-2xl font-bold text-green-800 hidden sm:inline">Mid Georgia</span>
            </motion.a>

            {/* Hamburger for mobile */}
            <button
              className="md:hidden flex flex-col items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600 relative w-10 h-10"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className={`absolute left-2 right-2 h-0.5 bg-green-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 top-5' : 'top-3'}`}
                style={{ transitionProperty: 'all' }}
              />
              <span
                className={`absolute left-2 right-2 h-0.5 bg-green-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : 'top-5'}`}
                style={{ transitionProperty: 'all' }}
              />
              <span
                className={`absolute left-2 right-2 h-0.5 bg-green-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 top-5' : 'top-7'}`}
                style={{ transitionProperty: 'all' }}
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-4 md:space-x-8 h-12">
              {NAV_LINKS.map((link) => {
                const isContact = link.label === 'Contact';
                const isQuote = link.label === 'Get Quote';
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={
                      isQuote
                        ? 'bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all duration-200 border-2 border-green-600 flex items-center h-12'
                        : isContact
                        ? 'border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 flex items-center h-12'
                        : 'text-green-900 hover:text-green-700 font-medium transition-colors px-4 py-2 rounded flex items-center h-12'
                    }
                    style={{ lineHeight: '1.5' }}
                    onClick={e => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 flex flex-col md:hidden"
              >
                {/* Overlay for visual effect only */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                <motion.div
                  ref={menuRef}
                  initial={{ y: -40 }}
                  animate={{ y: 0 }}
                  exit={{ y: -40 }}
                  transition={{ duration: 0.25 }}
                  className="relative bg-white rounded-b-2xl shadow-lg mx-2 mt-2 p-6 pt-4 flex flex-col space-y-4 z-10"
                >
                  {/* Green X Close Button */}
                  <button
                    className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M6 6l8 8M14 6l-8 8" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                  </button>
                  {NAV_LINKS.map((link) => {
                    const isContact = link.label === 'Contact';
                    const isQuote = link.label === 'Get Quote';
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className={
                          isQuote
                            ? 'bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg shadow transition-all duration-200 border-2 border-green-600 text-center'
                            : isContact
                            ? 'border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-semibold px-4 py-3 rounded-lg transition-all duration-200 text-center'
                            : 'text-green-900 hover:text-green-700 font-medium transition-colors px-4 py-3 rounded text-center'
                        }
                        style={{ lineHeight: '1.5' }}
                        onClick={e => {
                          e.preventDefault();
                          setMenuOpen(false);
                          const el = document.querySelector(link.href);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}; 