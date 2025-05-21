import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Building2, Users, Heart, ShieldCheck, HandshakeIcon, BadgeCheck } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedStat from '../components/common/AnimatedStat';

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Mission/Vision animation
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.querySelectorAll('.mission-item'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // Timeline animation
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current.querySelectorAll('.timeline-item'),
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // Values animation
    if (valuesRef.current) {
      gsap.fromTo(
        valuesRef.current.querySelectorAll('.value-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
        }
      );
    }
  }, []);

  return (
    <Layout title="About Us">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Since 2005, New Modern Medicare has been committed to providing exceptional healthcare services to the Chavakachcheri community.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section ref={missionRef} className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="mission-item bg-primary-50 p-8 rounded-lg">
              <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mb-4">
                <Building2 size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h2>
              <p className="text-gray-700">
                {t('about.mission.desc')}
              </p>
            </div>
            
            <div className="mission-item bg-secondary-50 p-8 rounded-lg">
              <div className="w-14 h-14 bg-secondary-100 text-secondary-700 rounded-full flex items-center justify-center mb-4">
                <Users size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">{t('about.vision.title')}</h2>
              <p className="text-gray-700">
                {t('about.vision.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{t('about.history.title')}</h2>
            <p className="section-subtitle">{t('about.history.desc')}</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform md:translate-x-[-0.5px]"></div>

            {/* Timeline items */}
            <div className="space-y-10">
              <div className="timeline-item relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-10 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-700">2005</h3>
                  <h4 className="text-lg font-medium mb-2">Founding of New Modern Medicare</h4>
                  <p className="text-gray-600">Started as a small clinic with just 5 staff members and 10 beds, focusing on general medical services.</p>
                </div>
                <div className="timeline-marker z-10 absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-primary-500 border-4 border-white shadow transform md:translate-x-[-14px]"></div>
                <div className="md:w-1/2 md:pl-10 ml-10 md:ml-0"></div>
              </div>

              <div className="timeline-item relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-10 md:text-right hidden md:block"></div>
                <div className="timeline-marker z-10 absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-primary-500 border-4 border-white shadow transform md:translate-x-[-14px]"></div>
                <div className="md:w-1/2 md:pl-10 ml-10 md:ml-0">
                  <h3 className="text-xl font-bold text-primary-700">2010</h3>
                  <h4 className="text-lg font-medium mb-2">Facility Expansion</h4>
                  <p className="text-gray-600">Expanded to include specialized departments for pediatrics, gynecology, and surgery, and increased bed capacity to 25.</p>
                </div>
              </div>

              <div className="timeline-item relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-10 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-700">2015</h3>
                  <h4 className="text-lg font-medium mb-2">Laboratory Modernization</h4>
                  <p className="text-gray-600">Invested in state-of-the-art diagnostic equipment and expanded the laboratory to provide comprehensive testing services.</p>
                </div>
                <div className="timeline-marker z-10 absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-primary-500 border-4 border-white shadow transform md:translate-x-[-14px]"></div>
                <div className="md:w-1/2 md:pl-10 ml-10 md:ml-0"></div>
              </div>

              <div className="timeline-item relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-10 md:text-right hidden md:block"></div>
                <div className="timeline-marker z-10 absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-primary-500 border-4 border-white shadow transform md:translate-x-[-14px]"></div>
                <div className="md:w-1/2 md:pl-10 ml-10 md:ml-0">
                  <h3 className="text-xl font-bold text-primary-700">2020</h3>
                  <h4 className="text-lg font-medium mb-2">Emergency Department Enhancement</h4>
                  <p className="text-gray-600">Renovated and expanded the emergency department to handle a greater volume of cases with improved efficiency.</p>
                </div>
              </div>

              <div className="timeline-item relative flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-10 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-700">2023</h3>
                  <h4 className="text-lg font-medium mb-2">Pediatric Wing Opening</h4>
                  <p className="text-gray-600">Opened a dedicated pediatric wing with specialized facilities for children's healthcare needs.</p>
                </div>
                <div className="timeline-marker z-10 absolute left-0 md:left-1/2 top-0 w-7 h-7 rounded-full bg-primary-500 border-4 border-white shadow transform md:translate-x-[-14px]"></div>
                <div className="md:w-1/2 md:pl-10 ml-10 md:ml-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">{t('about.values.title')}</h2>
            <p className="section-subtitle">
              Our core values guide every aspect of our operation and patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.compassion')}</h3>
              <p className="text-gray-600">
                We approach every patient interaction with empathy, kindness, and genuine care for their wellbeing.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.excellence')}</h3>
              <p className="text-gray-600">
                We strive for excellence in all aspects of patient care, continuously improving our skills and services.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.integrity')}</h3>
              <p className="text-gray-600">
                We maintain the highest ethical standards and are transparent in our interactions with patients and partners.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.respect')}</h3>
              <p className="text-gray-600">
                We respect the dignity, privacy, and individual needs of every patient, family member, and colleague.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <HandshakeIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('about.values.teamwork')}</h3>
              <p className="text-gray-600">
                We collaborate effectively across all departments, recognizing that quality healthcare is a team effort.
              </p>
            </div>

            <div className="value-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We are committed to serving and improving the health of our community in Chavakachcheri and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat 
              value={18} 
              title="Years of Service" 
            />
            <AnimatedStat 
              value={50} 
              suffix="+" 
              title="Hospital Beds" 
            />
            <AnimatedStat 
              value={150} 
              suffix="+" 
              title="Healthcare Professionals" 
            />
            <AnimatedStat 
              value={24} 
              suffix="/7" 
              title="Care Commitment" 
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Healthcare Family</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Experience the care, compassion, and excellence that have defined New Modern Medicare for over 18 years.
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

export default AboutPage;