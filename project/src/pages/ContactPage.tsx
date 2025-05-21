import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Clock, FileText, User, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Map animation with pin drop effect
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power2.out',
          delay: 0.3
        }
      );
      
      const mapPin = mapRef.current.querySelector('.map-pin');
      if (mapPin) {
        gsap.fromTo(
          mapPin,
          { y: -50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            ease: 'bounce.out',
            delay: 1
          }
        );
      }
    }

    // Info animation
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current.querySelectorAll('.info-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.5
        }
      );
    }

    // Form animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.7
        }
      );
    }
  }, []);

  return (
    <Layout title="Contact Us">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="h-[400px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63130.35591950826!2d80.0784899!3d9.6625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3aff3cbbf57a3a1d%3A0x6d7f53d02d0e1d0c!2sChavakachcheri%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1710950744962!5m2!1sen!2sus" 
          className="w-full h-full" 
          style={{ border: 0 }}
          allowFullScreen 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
        {/* Map Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 map-pin">
          <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 bg-white rounded-lg shadow-md p-2 min-w-[150px] text-center">
            <p className="text-sm font-semibold">New Modern Medicare</p>
            <p className="text-xs text-gray-600">Chavakachcheri, Sri Lanka</p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div ref={infoRef}>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('contact.phone')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Phone className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>+94 77 123 4567 (General)</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>+94 77 765 4321 (Emergency)</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>+94 77 246 8024 (Appointments)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('contact.email')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Mail className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>info@newmodernmedicare.com</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>appointments@newmodernmedicare.com</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-primary-600 mr-3 flex-shrink-0" size={18} />
                    <span>careers@newmodernmedicare.com</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('contact.address')}</h3>
                <div className="flex">
                  <MapPin className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p>New Modern Medicare Hospital</p>
                    <p>123 Hospital Road</p>
                    <p>Chavakachcheri</p>
                    <p>Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{t('contact.hours')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Clock className="text-primary-600 mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p>{t('contact.hours.value')}</p>
                      <p>{t('contact.outpatient.hours')}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                  <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.name')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('contact.form.email')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.subject')} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')} *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <FileText size={16} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      {t('contact.form.submit')}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;