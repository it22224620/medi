import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Clock, MapPin, Phone, ArrowRight, Calendar, StethoscopeIcon } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceCard from '../components/common/ServiceCard';
import TestimonialCard from '../components/common/TestimonialCard';
import AnimatedStat from '../components/common/AnimatedStat';
import { services } from '../data/services';
import { testimonials } from '../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

// Hero slider images
const heroImages = [
  'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  // Hero slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Your existing animations...
    // (Previous animation code remains unchanged)
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-r from-primary-800/90 to-primary-900/90 text-white overflow-hidden"
      >
        {/* Hero Slider */}
        <div className="absolute inset-0 hero-slider">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/80" />
            </div>
          ))}
        </div>

        <div className="container-custom relative z-10 min-h-[80vh] flex items-center">
          <div className="max-w-3xl">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-primary-100 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment" className="hero-button btn btn-secondary">
                {t('cta.book')}
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/services" className="hero-button btn btn-outline text-white border-white hover:bg-white/10">
                {t('menu.services')}
                <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4 border-t border-white/20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Clock className="text-primary-300 h-6 w-6 mr-3" />
                <div>
                  <p className="text-sm font-medium">24/7 Emergency Service</p>
                  <p className="text-xs text-primary-200">Always Available</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-primary-300 h-6 w-6 mr-3" />
                <div>
                  <p className="text-sm font-medium">+94 77 123 4567</p>
                  <p className="text-xs text-primary-200">For Appointments & Inquiries</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary-300 h-6 w-6 mr-3" />
                <div>
                  <p className="text-sm font-medium">123 Hospital Road</p>
                  <p className="text-xs text-primary-200">Chavakachcheri, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your components remain unchanged */}
      {/* ... (Keep all other sections as they were) ... */}
    </Layout>
  );
};

export default HomePage;