import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap size={32} className="text-primary-400 mr-2" />
              <h3 className="text-xl font-bold text-white">{t('site.name')}</h3>
            </div>
            <p className="text-gray-400 mb-6">{t('site.tagline')}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.services')}
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.doctors')}
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.appointment')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('menu.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#emergency" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.emergency')}
                </Link>
              </li>
              <li>
                <Link to="/services#laboratory" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.laboratory')}
                </Link>
              </li>
              <li>
                <Link to="/services#pharmacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.pharmacy')}
                </Link>
              </li>
              <li>
                <Link to="/services#surgery" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.surgery')}
                </Link>
              </li>
              <li>
                <Link to="/services#pediatrics" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.pediatrics')}
                </Link>
              </li>
              <li>
                <Link to="/services#maternity" className="text-gray-400 hover:text-primary-400 transition-colors">
                  {t('service.maternity')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{t('address')}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+94 77 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@newmodernmedicare.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-primary-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">24/7 Emergency Services<br />OPD: 8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} {t('site.name')}. {t('footer.rights')}.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;