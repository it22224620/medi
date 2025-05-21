import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Doctor } from '../../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  detailed?: boolean;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, detailed = false }) => {
  const { language } = useLanguage();
  
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 card-hover">
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={displayName} 
          className={`w-full object-cover ${detailed ? 'h-64' : 'h-52'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold">{displayName}</h3>
          <p className="text-white/90 text-sm">{displaySpecialty}</p>
        </div>
      </div>
      
      <div className="p-4">
        {detailed ? (
          <div>
            <div className="mb-4">
              <h4 className="text-gray-900 font-medium mb-2">About</h4>
              <p className="text-gray-700 text-sm">{displayBio}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-gray-900 font-medium mb-2">Education</h4>
              <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                {doctor.education.map((edu, index) => (
                  <li key={index}>{edu}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <h4 className="text-gray-900 font-medium mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map((lang, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-medium mb-2">Availability</h4>
              <p className="text-gray-700 text-sm">{doctor.availability}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {doctor.languages.map((lang, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {lang}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between">
              <Link 
                to={`/doctors/${doctor.id}`} 
                className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors"
              >
                View Profile
              </Link>
              
              <div className="flex space-x-2">
                <Link
                  to="/appointment"
                  className="w-8 h-8 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-100 transition-colors"
                  title="Book Appointment"
                >
                  <Calendar size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                  title="Contact"
                >
                  <MessageCircle size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;