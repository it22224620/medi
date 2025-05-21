import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import EmployeesPage from './pages/EmployeesPage';
import AppointmentPage from './pages/AppointmentPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  useEffect(() => {
    // Add a class to prevent FOUC (Flash of Unstyled Content)
    document.body.classList.add('no-fouc');
    
    // Remove the class after the page has loaded
    window.addEventListener('load', () => {
      document.body.classList.remove('no-fouc');
    });
    
    // Fallback in case the load event has already fired
    setTimeout(() => {
      document.body.classList.remove('no-fouc');
    }, 200);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/doctors/:id" element={<DoctorDetailPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;