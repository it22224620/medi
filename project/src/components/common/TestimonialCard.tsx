import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { language } = useLanguage();
  const displayName = language === 'ta' && testimonial.nameTranslated 
    ? testimonial.nameTranslated 
    : testimonial.name;
  
  const displayTestimonial = language === 'ta' && testimonial.testimonialTranslated
    ? testimonial.testimonialTranslated
    : testimonial.testimonial;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={displayName} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-gray-900">{displayName}</h4>
          <p className="text-sm text-gray-600">{testimonial.service}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700">{displayTestimonial}</p>
      
      <p className="text-sm text-gray-500 mt-3">{testimonial.date}</p>
    </div>
  );
};

export default TestimonialCard;