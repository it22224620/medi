import React, { useEffect, useRef } from 'react';
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

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Hero animation
    const heroElement = heroRef.current;
    if (heroElement) {
      const tl = gsap.timeline();
      tl.fromTo(
        heroElement.querySelector('.hero-title'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          heroElement.querySelector('.hero-subtitle'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          heroElement.querySelectorAll('.hero-button'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.2 },
          '-=0.4'
        );
    }

    // Services animation
    const servicesElement = servicesRef.current;
    if (servicesElement) {
      gsap.fromTo(
        servicesElement.querySelectorAll('.service-card'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: servicesElement,
            start: 'top 80%',
          },
        }
      );
    }

    // Stats animation
    const statsElement = statsRef.current;
    if (statsElement) {
      gsap.fromTo(
        statsElement.querySelectorAll('.stat-item'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsElement,
            start: 'top 80%',
          },
        }
      );
    }

    // Testimonials animation
    const testimonialElement = testimonialRef.current;
    if (testimonialElement) {
      gsap.fromTo(
        testimonialElement.querySelectorAll('.testimonial-card'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: testimonialElement,
            start: 'top 80%',
          },
        }
      );
    }

    // CTA animation
    const ctaElement = ctaRef.current;
    if (ctaElement) {
      gsap.fromTo(
        ctaElement,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaElement,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-primary-400 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-200 blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
          </div>
        </div>

        <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto md:mx-0">
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
        <div className="bg-white/10 backdrop-blur-sm py-4 border-t border-white/20">
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

      {/* Services Section */}
      <section ref={servicesRef} className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{t('home.services.title')}</h2>
            <p className="section-subtitle">{t('home.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} className="service-card" />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="inline-flex items-center btn btn-outline"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-item">
              <AnimatedStat 
                value={15000} 
                suffix="+" 
                title={t('home.stats.patients')} 
                className="text-white"
              />
            </div>
            <div className="stat-item">
              <AnimatedStat 
                value={25} 
                suffix="+" 
                title={t('home.stats.doctors')} 
                className="text-white"
              />
            </div>
            <div className="stat-item">
              <AnimatedStat 
                value={18} 
                title={t('home.stats.experience')} 
                className="text-white"
              />
            </div>
            <div className="stat-item">
              <AnimatedStat 
                value={98} 
                suffix="%" 
                title={t('home.stats.satisfaction')} 
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialRef} className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{t('home.testimonials.title')}</h2>
            <p className="section-subtitle">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-2">Ready to Schedule an Appointment?</h2>
              <p className="text-primary-100">Our team of specialists is ready to provide you with the best care.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-gray-100">
                {t('cta.contact')}
              </Link>
              <Link to="/appointment" className="btn bg-primary-800 text-white hover:bg-primary-900">
                {t('cta.book')}
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;