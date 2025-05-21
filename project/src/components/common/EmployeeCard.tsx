import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Employee } from '../../data/employees';

interface EmployeeCardProps {
  employee: Employee;
  detailed?: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee, detailed = false }) => {
  const { language } = useLanguage();
  
  const displayName = language === 'ta' && employee.nameTranslated 
    ? employee.nameTranslated 
    : employee.name;
  
  const displayPosition = language === 'ta' && employee.positionTranslated
    ? employee.positionTranslated
    : employee.position;
  
  const displayDepartment = language === 'ta' && employee.departmentTranslated
    ? employee.departmentTranslated
    : employee.department;
  
  const displayBio = language === 'ta' && employee.bioTranslated
    ? employee.bioTranslated
    : employee.bio;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 card-hover">
      <div className="relative">
        <img 
          src={employee.image} 
          alt={displayName} 
          className={`w-full object-cover ${detailed ? 'h-64' : 'h-52'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold">{displayName}</h3>
          <p className="text-white/90 text-sm">{displayPosition}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded">
              {displayDepartment}
            </span>
            {employee.languages.map((lang, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {lang}
              </span>
            ))}
          </div>
          
          {detailed ? (
            <p className="text-gray-700">{displayBio}</p>
          ) : (
            <p className="text-gray-700 text-sm line-clamp-3">{displayBio}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;