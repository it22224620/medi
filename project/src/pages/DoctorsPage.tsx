import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import DoctorCard from '../components/common/DoctorCard';
import { doctors } from '../data/doctors';

gsap.registerPlugin(ScrollTrigger);

const DoctorsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const doctorsGridRef = useRef<HTMLDivElement>(null);

  // Extract unique specialties
  const uniqueSpecialties = ['all', ...Array.from(new Set(doctors.map(doctor => {
    // Extract the main specialty before the comma if any
    const mainSpecialty = doctor.specialty.split(',')[0].trim();
    return mainSpecialty;
  })))];

  // Filter doctors based on search term and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === 'all' || 
                             doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    
    return matchesSearch && matchesSpecialty;
  });

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Doctors card animation
    if (doctorsGridRef.current) {
      gsap.fromTo(
        doctorsGridRef.current.querySelectorAll('.doctor-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: doctorsGridRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  return (
    <Layout title="Our Doctors">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Meet our team of experienced healthcare professionals dedicated to providing you with the best medical care.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="relative w-full md:w-64">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                {uniqueSpecialties.map((specialty, index) => (
                  <option key={index} value={specialty === 'all' ? 'all' : specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          {filteredDoctors.length > 0 ? (
            <div ref={doctorsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No doctors found</h3>
              <p className="text-gray-600">Please try a different search term or filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Medical Team</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented and compassionate healthcare professionals to join our team at New Modern Medicare. 
                If you're passionate about improving patient care and making a difference in our community, we'd love to hear from you.
              </p>
              <a 
                href="mailto:careers@newmodernmedicare.com" 
                className="btn btn-primary"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorsPage;