import React, { useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Calendar, Phone, Mail, Languages, Clock, Award, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { doctors } from '../data/doctors';

const DoctorDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const doctor = doctors.find(d => d.id === Number(id));
  
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!doctor) {
      navigate('/doctors');
      return;
    }

    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Content animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
        }
      );
    }
  }, [doctor, navigate]);

  if (!doctor) return null;

  const displayName = language === 'ta' && doctor.nameTranslated 
    ? doctor.nameTranslated 
    : doctor.name;
  
  const displaySpecialty = language === 'ta' && doctor.specialtyTranslated
    ? doctor.specialtyTranslated
    : doctor.specialty;

  const displayBio = language === 'ta' && doctor.bioTranslated
    ? doctor.bioTranslated
    : doctor.bio;

  return (
    <Layout title={doctor.name}>
      {/* Header */}
      <section ref={headerRef} className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Link to="/doctors" className="flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to All Doctors
          </Link>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={doctor.image} 
                alt={displayName} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{displayName}</h1>
              <p className="text-xl text-primary-100 mb-4">{displaySpecialty}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {doctor.languages.map((lang, index) => (
                  <span key={index} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <Link to="/appointment" className="btn bg-white text-primary-700 hover:bg-gray-100">
                  Book Appointment
                </Link>
                <Link to="/contact" className="btn bg-primary-700 text-white hover:bg-primary-800">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="section bg-white" ref={contentRef}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-item">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-700">{displayBio}</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 animate-item">
                <h2 className="text-2xl font-bold mb-4">Education & Training</h2>
                <ul className="space-y-4">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="flex">
                      <Award size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-item">
                <h2 className="text-xl font-bold mb-4">Availability</h2>
                <div className="flex items-start mb-4">
                  <Clock size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{doctor.availability}</span>
                </div>
                <div className="flex items-center mt-4">
                  <Calendar size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                  <Link to="/appointment" className="text-primary-600 hover:text-primary-700 font-medium">
                    Schedule an appointment
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 animate-item">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">doctors@newmodernmedicare.com</span>
                  </div>
                  <div className="flex items-start">
                    <Languages size={20} className="text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-medium mb-2">Languages Spoken:</p>
                      <div className="flex flex-wrap gap-2">
                        {doctor.languages.map((lang, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorDetailPage;