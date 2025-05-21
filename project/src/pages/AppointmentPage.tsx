import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { doctors } from '../data/doctors';
import { services } from '../data/services';

const AppointmentPage: React.FC = () => {
  const { t } = useLanguage();
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      phone: '',
      email: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
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
          delay: 0.3
        }
      );
    }

    // Info animation
    if (infoRef.current) {
      gsap.fromTo(
        infoRef.current.querySelectorAll('.info-item'),
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.4
        }
      );
    }
  }, []);

  return (
    <Layout title="Appointment">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('appointment.title')}</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t('appointment.subtitle')}
          </p>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Request Submitted!</h2>
                  <p className="text-gray-600 mb-6">{t('appointment.form.success')}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form 
                  ref={formRef} 
                  onSubmit={handleSubmit} 
                  className="bg-white rounded-lg shadow-md p-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.name')} *
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.phone')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.email')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.department')} *
                      </label>
                      <select
                        id="department"
                        name="department"
                        required
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                      >
                        <option value="">Select Department</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {t(service.translationKey)}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.doctor')}
                      </label>
                      <select
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                      >
                        <option value="">Select Doctor (Optional)</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialty.split(',')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.date')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('appointment.form.time')} *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('appointment.form.message')}
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <FileText size={16} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50"
                        placeholder="Any specific concerns or requirements..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700">
                      <p className="font-semibold">Privacy Notice</p>
                      <p>Your personal information will be used only for appointment scheduling and will be kept secure.</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      {t('appointment.form.submit')}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Information */}
            <div ref={infoRef}>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Working Hours</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center text-primary-600">
                    <span>Emergency Department</span>
                    <span className="font-medium">24/7</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 info-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Phone className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <span className="block font-medium">Phone</span>
                      <span className="text-gray-600">+94 77 123 4567</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={18} />
                    <div>
                      <span className="block font-medium">Email</span>
                      <span className="text-gray-600">appointments@newmodernmedicare.com</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary-700 text-white rounded-lg shadow-md p-6 info-item">
                <h3 className="text-xl font-semibold mb-4">Emergency Cases</h3>
                <p className="mb-4">
                  If you are experiencing a medical emergency, please call our emergency number or visit our Emergency Department immediately.
                </p>
                <div className="text-2xl font-bold mb-2">+94 77 123 4567</div>
                <p className="text-primary-200 text-sm">Available 24 hours / 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPage;