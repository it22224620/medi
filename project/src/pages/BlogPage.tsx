import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Tag, Calendar, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import BlogCard from '../components/common/BlogCard';
import { blogPosts } from '../data/blog';

gsap.registerPlugin(ScrollTrigger);

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const headerRef = useRef<HTMLDivElement>(null);
  const blogGridRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Count posts by category
  const categoryCounts = {
    all: blogPosts.length,
    health: blogPosts.filter(post => post.category === 'health').length,
    news: blogPosts.filter(post => post.category === 'news').length,
    community: blogPosts.filter(post => post.category === 'community').length,
  };

  // Get recent posts
  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Blog card animation
    if (blogGridRef.current) {
      gsap.fromTo(
        blogGridRef.current.querySelectorAll('.blog-card'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: blogGridRef.current,
            start: 'top 75%',
          },
        }
      );
    }

    // Sidebar animation
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current.querySelectorAll('.sidebar-item'),
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3
        }
      );
    }
  }, []);

  return (
    <Layout title="Blog">
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div ref={blogGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                      <BlogCard post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">Please try a different search term or category.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="btn btn-outline"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div ref={sidebarRef}>
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sidebar-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  {t('blog.categories')}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`flex items-center justify-between w-full p-2 rounded-md transition-colors ${
                        selectedCategory === 'all' ? 'bg-primary-50 text-primary-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center">
                        <Tag size={16} className="mr-2" />
                        All Categories
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {categoryCounts.all}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedCategory('health')}
                      className={`flex items-center justify-between w-full p-2 rounded-md transition-colors ${
                        selectedCategory === 'health' ? 'bg-green-50 text-green-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center">
                        <Tag size={16} className="mr-2" />
                        {t('blog.category.health')}
                      </span>
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {categoryCounts.health}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedCategory('news')}
                      className={`flex items-center justify-between w-full p-2 rounded-md transition-colors ${
                        selectedCategory === 'news' ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center">
                        <Tag size={16} className="mr-2" />
                        {t('blog.category.news')}
                      </span>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                        {categoryCounts.news}
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectedCategory('community')}
                      className={`flex items-center justify-between w-full p-2 rounded-md transition-colors ${
                        selectedCategory === 'community' ? 'bg-purple-50 text-purple-700' : 'hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center">
                        <Tag size={16} className="mr-2" />
                        {t('blog.category.community')}
                      </span>
                      <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {categoryCounts.community}
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sidebar-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <Link to={`/blog/${post.id}`} className="group">
                        <h4 className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-50 rounded-lg shadow-md p-6 sidebar-item">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest health tips and hospital news.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;