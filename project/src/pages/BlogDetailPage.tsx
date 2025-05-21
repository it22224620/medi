import React, { useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/common/BlogCard';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const post = blogPosts.find(p => p.id === Number(id));
  
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Get related posts (same category, excluding current)
  const relatedPosts = post 
    ? blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 2)
    : [];

  useEffect(() => {
    if (!post) {
      navigate('/blog');
      return;
    }

    // Header animation
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );

    // Content animation
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.3
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
          delay: 0.4
        }
      );
    }
  }, [post, navigate]);

  if (!post) return null;

  const displayTitle = language === 'ta' && post.titleTranslated 
    ? post.titleTranslated 
    : post.title;
  
  const displayContent = language === 'ta' && post.contentTranslated
    ? post.contentTranslated
    : post.content;

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'health':
        return 'Health Tips';
      case 'news':
        return 'Hospital News';
      case 'community':
        return 'Community Health';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'health':
        return 'bg-green-100 text-green-800';
      case 'news':
        return 'bg-blue-100 text-blue-800';
      case 'community':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout title={post.title}>
      {/* Header */}
      <section ref={headerRef} className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <Link to="/blog" className="flex items-center text-primary-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <span className={`${getCategoryColor(post.category)} text-sm font-medium px-3 py-1 rounded-full`}>
                {getCategoryLabel(post.category)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-primary-100">
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={displayTitle} 
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '400px' }}
                />
                <div ref={contentRef} className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {displayContent.split('\n\n').map((paragraph, idx) => {
                      // Check if the paragraph is a heading (starts with #, ##, etc.)
                      if (paragraph.startsWith('#')) {
                        const headingLevel = paragraph.match(/^(#+)/)?.[0].length || 1;
                        const headingText = paragraph.replace(/^#+\s+/, '');
                        
                        const HeadingTag = `h${Math.min(headingLevel, 6)}` as keyof JSX.IntrinsicElements;
                        return <HeadingTag key={idx} className="mt-6 mb-4 font-bold">{headingText}</HeadingTag>;
                      }
                      
                      // Check if paragraph is a list
                      if (paragraph.includes('\n- ')) {
                        const listItems = paragraph.split('\n- ');
                        return (
                          <ul key={idx} className="list-disc pl-6 my-4">
                            {listItems.map((item, itemIdx) => {
                              if (itemIdx === 0 && !paragraph.startsWith('- ')) {
                                return <p key={`p-${itemIdx}`}>{item}</p>;
                              }
                              return <li key={`li-${itemIdx}`}>{item}</li>;
                            })}
                          </ul>
                        );
                      }
                      
                      // Regular paragraph
                      return <p key={idx} className="mb-4">{paragraph}</p>;
                    })}
                  </div>
                  
                  {/* Social Share */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <span className="font-medium mr-4">Share:</span>
                      <div className="flex space-x-2">
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                          <Facebook size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                          <Twitter size={16} />
                        </a>
                        <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div ref={sidebarRef}>
              {/* Author */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sidebar-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  About the Author
                </h3>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <User size={24} className="text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm">
                      Healthcare Professional at New Modern Medicare
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 sidebar-item">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 border-b border-gray-200 pb-2">
                  Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/blog" 
                      className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      <Tag size={16} className="mr-2 text-primary-600" />
                      <span>All Categories</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className={`flex items-center p-2 rounded-md hover:bg-green-50 transition-colors ${
                        post.category === 'health' ? 'bg-green-50 text-green-700' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/blog');
                        // In a real app, you'd set the category filter in the BlogPage component
                      }}
                    >
                      <Tag size={16} className="mr-2 text-green-600" />
                      <span>Health Tips</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className={`flex items-center p-2 rounded-md hover:bg-blue-50 transition-colors ${
                        post.category === 'news' ? 'bg-blue-50 text-blue-700' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/blog');
                        // In a real app, you'd set the category filter in the BlogPage component
                      }}
                    >
                      <Tag size={16} className="mr-2 text-blue-600" />
                      <span>Hospital News</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className={`flex items-center p-2 rounded-md hover:bg-purple-50 transition-colors ${
                        post.category === 'community' ? 'bg-purple-50 text-purple-700' : ''
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/blog');
                        // In a real app, you'd set the category filter in the BlogPage component
                      }}
                    >
                      <Tag size={16} className="mr-2 text-purple-600" />
                      <span>Community Health</span>
                    </Link>
                  </li>
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

export default BlogDetailPage;