import React, { useRef, useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import ReviewsSection from '../components/ReviewsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { StickyHeader } from '../components/StickyHeader';

const Index = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowHeader(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (logoRef.current) {
      observer.observe(logoRef.current);
    }
    return () => {
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader show={showHeader} />
      <div id="top">
        <HeroSection logoRef={logoRef} />
      </div>
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
