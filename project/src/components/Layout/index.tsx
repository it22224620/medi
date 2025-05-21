import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  useEffect(() => {
    // Update page title
    const defaultTitle = document.querySelector('title[data-default]')?.textContent || 'New Modern Medicare';
    document.title = title ? `${title} | New Modern Medicare` : defaultTitle;

    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;