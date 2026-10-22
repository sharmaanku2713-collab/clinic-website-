import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { usePageSEO } from '../../hooks/usePageSEO';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Dynamic SEO meta and title management
  usePageSEO();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-pearl text-navy selection:bg-electric-teal selection:text-white overflow-x-clip">
      {/* Primary Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Persistent Floating WhatsApp CTA */}
      <WhatsAppButton variant="floating" />

      {/* Footer */}
      <Footer />
    </div>
  );
};
