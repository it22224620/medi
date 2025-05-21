import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import EmployeeCard from '../components/common/EmployeeCard';
import { employees } from '../data/employees';

gsap.registerPlugin(ScrollTrigger);

const EmployeesPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const employeesGridRef = useRef<HTMLDivElement>(null);

  // Extract unique departments
  const uniqueDepartments = ['all', ...Array.from(new Set(employees.map(employee => employee.department)))];

  // Filter employees based on search term and department
  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'all' || 
                             employee.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Employees card animation
    if (employeesGridRef.current) {
      gsap.fromTo(
        employeesGridRef.current.querySelectorAll('.employee-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: employeesGridRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  return (
    <Layout title="Our Team">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Meet the dedicated professionals who work together to provide exceptional healthcare services at New Modern Medicare.
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
                placeholder="Search by name, position, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="relative w-full md:w-64">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 appearance-none"
              >
                {uniqueDepartments.map((department, index) => (
                  <option key={index} value={department === 'all' ? 'all' : department}>
                    {department === 'all' ? 'All Departments' : department}
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

      {/* Employees Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          {filteredEmployees.length > 0 ? (
            <div ref={employeesGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEmployees.map((employee) => (
                <div key={employee.id} className="employee-card">
                  <EmployeeCard employee={employee} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-800 mb-2">No team members found</h3>
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
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                At New Modern Medicare, we're always looking for passionate individuals who share our commitment to providing exceptional healthcare. 
                Join our dedicated team and make a difference in the lives of our patients and the Chavakachcheri community.
              </p>
              <a 
                href="mailto:careers@newmodernmedicare.com" 
                className="btn btn-primary"
              >
                View Career Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EmployeesPage;