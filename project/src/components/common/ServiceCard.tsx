import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Service } from '../../data/services';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  const { t } = useLanguage();
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Activity;

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 card-hover ${className}`}>
      <div className="p-6">
        <div className={`w-16 h-16 rounded-full ${service.colorClass} flex items-center justify-center mb-4`}>
          <Icon size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{t(service.translationKey)}</h3>
        <p className="text-gray-600 mb-4">{t(service.descriptionKey)}</p>
        <Link 
          to={`/services#${service.id}`} 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          Learn More
          <LucideIcons.ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;