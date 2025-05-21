import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import ServiceCard from '../components/common/ServiceCard';
import AnimatedStat from '../components/common/AnimatedStat';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Services animation
    const servicesElements = servicesRefs.current.filter(Boolean);
    servicesElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
          },
        }
      );
    });

    // Details animation
    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Handle hash scroll
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth',
          });
        }, 500);
      }
    }
  }, [location.hash]);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    servicesRefs.current[index] = el;
  };

  return (
    <Layout title="Services">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive healthcare solutions tailored to meet the needs of our community in Chavakachcheri.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.id} ref={(el) => addToRefs(el, index)}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <div ref={detailsRef}>
        {services.map((service) => {
          const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;
          
          return (
            <section 
              key={service.id} 
              id={service.id}
              className="py-16 border-t border-gray-200 scroll-mt-24"
            >
              <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div>
                    <div className={`w-16 h-16 rounded-full ${service.colorClass} flex items-center justify-center mb-6 animate-item`}>
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 animate-item">{t(service.translationKey)}</h2>
                    <p className="text-lg text-gray-700 mb-6 animate-item">{t(service.descriptionKey)}</p>
                    
                    <ul className="space-y-3 mb-8 animate-item">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`flex-shrink-0 ${service.colorClass} rounded-full p-1 mr-3 mt-1`}>
                            <Check size={12} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/appointment" 
                      className="btn btn-primary animate-item"
                    >
                      Book for {t(service.translationKey)}
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className="animate-item">
                    <img 
                      src={service.image} 
                      alt={t(service.translationKey)} 
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                      style={{ maxHeight: '400px' }}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals is committed to providing the highest quality 
              healthcare services to the Chavakachcheri community.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat 
              value={15000} 
              suffix="+" 
              title="Patients Treated" 
            />
            <AnimatedStat 
              value={25} 
              suffix="+" 
              title="Skilled Doctors" 
            />
            <AnimatedStat 
              value={98} 
              suffix="%" 
              title="Patient Satisfaction" 
            />
            <AnimatedStat 
              value={24} 
              suffix="/7" 
              title="Emergency Service" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Care?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
            Schedule an appointment today and let our team of healthcare professionals take care of you and your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment" className="btn bg-white text-primary-700 hover:bg-gray-100">
              Book an Appointment
            </Link>
            <Link to="/contact" className="btn bg-primary-800 text-white hover:bg-primary-900">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;