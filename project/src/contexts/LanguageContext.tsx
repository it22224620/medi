import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Common
    'site.name': 'New Modern Medicare',
    'site.tagline': 'Comprehensive Healthcare in Chavakachcheri',
    'menu.home': 'Home',
    'menu.about': 'About Us',
    'menu.services': 'Services',
    'menu.employees': 'Employees',
    'menu.doctors': 'Doctors',
    'menu.appointment': 'Appointment',
    'menu.contact': 'Contact',
    'menu.blog': 'Blog',
    'cta.book': 'Book Appointment',
    'cta.emergency': 'Emergency: +94 77 123 4567',
    'cta.contact': 'Contact Us',
    'address': '123 Hospital Road, Chavakachcheri, Sri Lanka',
    'footer.rights': 'All Rights Reserved',
    
    // Home page
    'home.hero.title': 'Your Health is Our Priority',
    'home.hero.subtitle': 'Providing exceptional healthcare services to the Chavakachcheri community since 2005',
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Comprehensive healthcare solutions for your needs',
    'home.testimonials.title': 'What Our Patients Say',
    'home.testimonials.subtitle': 'Hear from the community we serve',
    'home.stats.patients': 'Patients Treated',
    'home.stats.doctors': 'Specialized Doctors',
    'home.stats.experience': 'Years of Experience',
    'home.stats.satisfaction': 'Patient Satisfaction',
    
    // Services sections
    'service.emergency': 'Emergency Care',
    'service.laboratory': 'Laboratory',
    'service.pharmacy': 'Pharmacy',
    'service.surgery': 'Surgery',
    'service.pediatrics': 'Pediatrics',
    'service.maternity': 'Maternity Care',
    'service.outpatient': 'Outpatient Department',
    'service.emergency.desc': '24/7 emergency care for critical conditions',
    'service.laboratory.desc': 'Comprehensive diagnostic laboratory services',
    'service.pharmacy.desc': 'Full-service pharmacy with prescription and over-the-counter medications',
    'service.surgery.desc': 'Advanced surgical procedures performed by specialized surgeons',
    'service.pediatrics.desc': 'Specialized care for infants, children, and adolescents',
    'service.maternity.desc': 'Complete maternity care from pregnancy to postnatal services',
    'service.outpatient.desc': 'General and specialized outpatient services',
    
    // About page
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide accessible, high-quality healthcare services to the Chavakachcheri community with compassion and excellence.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the leading healthcare provider in the region, known for exceptional patient care and medical excellence.',
    'about.values.title': 'Our Values',
    'about.values.compassion': 'Compassion',
    'about.values.excellence': 'Excellence',
    'about.values.integrity': 'Integrity',
    'about.values.respect': 'Respect',
    'about.values.teamwork': 'Teamwork',
    'about.history.title': 'Our History',
    'about.history.desc': 'Since our founding in 2005, New Modern Medicare has been committed to serving the healthcare needs of Chavakachcheri.',
    
    // Appointment page
    'appointment.title': 'Book an Appointment',
    'appointment.subtitle': 'Schedule a visit with our healthcare professionals',
    'appointment.form.name': 'Full Name',
    'appointment.form.phone': 'Phone Number',
    'appointment.form.email': 'Email Address',
    'appointment.form.department': 'Department',
    'appointment.form.doctor': 'Preferred Doctor (Optional)',
    'appointment.form.date': 'Preferred Date',
    'appointment.form.time': 'Preferred Time',
    'appointment.form.message': 'Additional Information',
    'appointment.form.submit': 'Request Appointment',
    'appointment.form.success': 'Thank you! Your appointment request has been submitted. We will contact you shortly to confirm.',
    
    // Contact page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you with any questions or concerns',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Monday to Sunday: 24 hours (Emergency Department)',
    'contact.outpatient.hours': 'Outpatient Department: 8:00 AM - 8:00 PM',
    
    // Blog
    'blog.title': 'Health Blog & News',
    'blog.subtitle': 'Stay informed with the latest health tips and hospital updates',
    'blog.readmore': 'Read More',
    'blog.categories': 'Categories',
    'blog.category.health': 'Health Tips',
    'blog.category.news': 'Hospital News',
    'blog.category.community': 'Community Health',
  },
  ta: {
    // Common
    'site.name': 'நியூ மாடர்ன் மெடிக்கேர்',
    'site.tagline': 'சாவகச்சேரியில் முழுமையான சுகாதார சேவை',
    'menu.home': 'முகப்பு',
    'menu.about': 'எங்களைப் பற்றி',
    'menu.services': 'சேவைகள்',
    'menu.employees': 'ஊழியர்கள்',
    'menu.doctors': 'மருத்துவர்கள்',
    'menu.appointment': 'சந்திப்பு',
    'menu.contact': 'தொடர்பு',
    'menu.blog': 'வலைப்பதிவு',
    'cta.book': 'சந்திப்பு பதிவு செய்ய',
    'cta.emergency': 'அவசரம்: +94 77 123 4567',
    'cta.contact': 'எங்களை தொடர்பு கொள்ள',
    'address': '123 மருத்துவமனை சாலை, சாவகச்சேரி, இலங்கை',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',
    
    // Home page
    'home.hero.title': 'உங்கள் ஆரோக்கியமே எங்கள் முன்னுரிமை',
    'home.hero.subtitle': '2005 முதல் சாவகச்சேரி சமூகத்திற்கு சிறந்த சுகாதார சேவைகளை வழங்குகிறோம்',
    'home.services.title': 'எங்கள் சேவைகள்',
    'home.services.subtitle': 'உங்கள் தேவைகளுக்கான முழுமையான சுகாதார தீர்வுகள்',
    'home.testimonials.title': 'எங்கள் நோயாளிகள் கூறுவது',
    'home.testimonials.subtitle': 'நாங்கள் சேவை செய்யும் சமூகத்திலிருந்து கேளுங்கள்',
    'home.stats.patients': 'சிகிச்சையளிக்கப்பட்ட நோயாளிகள்',
    'home.stats.doctors': 'சிறப்பு மருத்துவர்கள்',
    'home.stats.experience': 'அனுபவ ஆண்டுகள்',
    'home.stats.satisfaction': 'நோயாளி திருப்தி',
    
    // Services sections
    'service.emergency': 'அவசர சிகிச்சை',
    'service.laboratory': 'ஆய்வகம்',
    'service.pharmacy': 'மருந்தகம்',
    'service.surgery': 'அறுவை சிகிச்சை',
    'service.pediatrics': 'குழந்தை மருத்துவம்',
    'service.maternity': 'மகப்பேறு சிகிச்சை',
    'service.outpatient': 'வெளிநோயாளர் பிரிவு',
    'service.emergency.desc': 'ஆபத்தான நிலைகளுக்கான 24/7 அவசர சிகிச்சை',
    'service.laboratory.desc': 'விரிவான நோயறிதல் ஆய்வக சேவைகள்',
    'service.pharmacy.desc': 'மருத்துவர் மருந்து மற்றும் கவுண்டர் மருந்துகளுடன் முழு சேவை மருந்தகம்',
    'service.surgery.desc': 'சிறப்பு அறுவை சிகிச்சை நிபுணர்களால் மேற்கொள்ளப்படும் மேம்பட்ட அறுவை சிகிச்சைகள்',
    'service.pediatrics.desc': 'குழந்தைகள், சிறுவர்கள் மற்றும் இளம் பருவத்தினருக்கான சிறப்பு சிகிச்சை',
    'service.maternity.desc': 'கர்ப்பகாலம் முதல் பிரசவத்திற்கு பிந்தைய சேவைகள் வரை முழுமையான மகப்பேறு சிகிச்சை',
    'service.outpatient.desc': 'பொது மற்றும் சிறப்பு வெளிநோயாளர் சேவைகள்',
    
    // About page
    'about.mission.title': 'எங்கள் நோக்கம்',
    'about.mission.desc': 'அனுதாபத்துடனும் சிறப்புடனும் சாவகச்சேரி சமூகத்திற்கு அணுகக்கூடிய, உயர்தர சுகாதார சேவைகளை வழங்குவது.',
    'about.vision.title': 'எங்கள் தொலைநோக்கு',
    'about.vision.desc': 'சிறந்த நோயாளி சிகிச்சை மற்றும் மருத்துவ சிறப்புக்காக அறியப்படும் பிராந்தியத்தின் முன்னணி சுகாதார வழங்குநராக இருப்பது.',
    'about.values.title': 'எங்கள் மதிப்புகள்',
    'about.values.compassion': 'அனுதாபம்',
    'about.values.excellence': 'சிறப்பு',
    'about.values.integrity': 'நேர்மை',
    'about.values.respect': 'மரியாதை',
    'about.values.teamwork': 'குழு வேலை',
    'about.history.title': 'எங்கள் வரலாறு',
    'about.history.desc': '2005 ஆம் ஆண்டு நிறுவப்பட்டதிலிருந்து, நியூ மாடர்ன் மெடிக்கேர் சாவகச்சேரியின் சுகாதார தேவைகளுக்கு சேவை செய்ய உறுதிபூண்டுள்ளது.',
    
    // Appointment page
    'appointment.title': 'சந்திப்பு பதிவு செய்ய',
    'appointment.subtitle': 'எங்கள் சுகாதார நிபுணர்களுடன் சந்திப்பு ஒன்றை ஏற்பாடு செய்யுங்கள்',
    'appointment.form.name': 'முழு பெயர்',
    'appointment.form.phone': 'தொலைபேசி எண்',
    'appointment.form.email': 'மின்னஞ்சல் முகவரி',
    'appointment.form.department': 'துறை',
    'appointment.form.doctor': 'விருப்பமான மருத்துவர் (விருப்பமானது)',
    'appointment.form.date': 'விருப்பமான தேதி',
    'appointment.form.time': 'விருப்பமான நேரம்',
    'appointment.form.message': 'கூடுதல் தகவல்',
    'appointment.form.submit': 'சந்திப்பு கோரிக்கை',
    'appointment.form.success': 'நன்றி! உங்கள் சந்திப்பு கோரிக்கை சமர்ப்பிக்கப்பட்டது. உறுதிப்படுத்த நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.',
    
    // Contact page
    'contact.title': 'எங்களை தொடர்பு கொள்ளுங்கள்',
    'contact.subtitle': 'உங்கள் கேள்விகள் அல்லது சந்தேகங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்',
    'contact.form.name': 'உங்கள் பெயர்',
    'contact.form.email': 'மின்னஞ்சல் முகவரி',
    'contact.form.subject': 'தலைப்பு',
    'contact.form.message': 'உங்கள் செய்தி',
    'contact.form.submit': 'செய்தி அனுப்ப',
    'contact.phone': 'தொலைபேசி',
    'contact.email': 'மின்னஞ்சல்',
    'contact.address': 'முகவரி',
    'contact.hours': 'வேலை நேரம்',
    'contact.hours.value': 'திங்கள் முதல் ஞாயிறு வரை: 24 மணி நேரம் (அவசர பிரிவு)',
    'contact.outpatient.hours': 'வெளிநோயாளர் பிரிவு: 8:00 AM - 8:00 PM',
    
    // Blog
    'blog.title': 'ஆரோக்கிய வலைப்பதிவு & செய்திகள்',
    'blog.subtitle': 'சமீபத்திய ஆரோக்கிய குறிப்புகள் மற்றும் மருத்துவமனை புதுப்பிப்புகளுடன் தகவல் பெறுங்கள்',
    'blog.readmore': 'மேலும் படிக்க',
    'blog.categories': 'வகைகள்',
    'blog.category.health': 'ஆரோக்கிய குறிப்புகள்',
    'blog.category.news': 'மருத்துவமனை செய்திகள்',
    'blog.category.community': 'சமூக ஆரோக்கியம்',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const translate = (key: string): string => {
    if (!translations[language][key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};