import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="card-3d max-w-lg text-center space-y-6 p-8 md:p-12">
        <div className="w-20 h-20 rounded-3xl bg-electric-teal/15 text-electric-teal flex items-center justify-center mx-auto shadow-md">
          <Sparkles className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-electric-violet">
            Page Not Found
          </span>
          <h1 className="text-3xl font-heading font-extrabold text-navy">
            404 — Dental Route Not Found
          </h1>
          <p className="text-sm text-navy/70 leading-relaxed">
            The page you are looking for may have moved or does not exist. Let's guide you back to our primary clinic pages.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Link
            to="/"
            className="btn-3d-teal px-6 py-3 text-sm flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <WhatsAppButton variant="outline" size="sm" label="Enquire on WhatsApp" />
        </div>
      </div>
    </div>
  );
};
