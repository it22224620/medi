import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: t('menu.home'), path: '/' },
    { name: t('menu.about'), path: '/about' },
    { name: t('menu.services'), path: '/services' },
    { name: t('menu.doctors'), path: '/doctors' },
    { name: t('menu.employees'), path: '/employees' },
    { name: t('menu.blog'), path: '/blog' },
    { name: t('menu.contact'), path: '/contact' },
  ];

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="bg-primary-800 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span className="text-sm">24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm font-medium">{t('cta.emergency')}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-sm font-medium hover:text-primary-200 transition-colors"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <Link to="/appointment" className="text-sm font-medium hover:text-primary-200 transition-colors">
              {t('cta.book')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div 
        className={`${
          isScrolled 
            ? 'bg-white shadow-md py-3' 
            : 'bg-white/95 backdrop-blur-sm py-4'
        } transition-all duration-300 w-full`}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <GraduationCap size={36} className="text-primary-600 mr-2" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t('site.name')}</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{t('site.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="ml-3 btn btn-primary"
            >
              {t('cta.book')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button 
              onClick={toggleLanguage}
              className="text-sm font-medium px-3 py-1 rounded border border-primary-600 text-primary-700 hover:bg-primary-50"
            >
              {language === 'en' ? 'தமிழ்' : 'English'}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-xl font-bold text-primary-600" onClick={() => setIsMenuOpen(false)}>
              {t('site.name')}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="px-3 py-2 mt-4 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('cta.book')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;