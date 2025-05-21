import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout title="Page Not Found">
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 max-w-lg">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              <ArrowLeft size={18} className="mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;