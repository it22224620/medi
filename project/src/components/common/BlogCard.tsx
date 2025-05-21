import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import type { BlogPost } from '../../data/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const { language, t } = useLanguage();
  
  const displayTitle = language === 'ta' && post.titleTranslated 
    ? post.titleTranslated 
    : post.title;
  
  const displayExcerpt = language === 'ta' && post.excerptTranslated
    ? post.excerptTranslated
    : post.excerpt;

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'health':
        return t('blog.category.health');
      case 'news':
        return t('blog.category.news');
      case 'community':
        return t('blog.category.community');
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 card-hover">
      <div className="relative">
        <img 
          src={post.image} 
          alt={displayTitle} 
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-3 left-3 ${getCategoryColor(post.category)} text-xs font-medium px-2 py-1 rounded-md`}>
          {getCategoryLabel(post.category)}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{displayTitle}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{displayExcerpt}</p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
        >
          {t('blog.readmore')}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;