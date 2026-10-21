import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { dentalServices } from '../config/clinicConfig';
import { Dental3DIcon } from '../components/common/Dental3DIcon';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const ServicesOverviewPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Preventive & Restorative', 'Aesthetic Dentistry', 'Endodontic Therapy', 'Implantology', 'Orthodontics', 'Smile Architecture', "Children's Dental Health"];

  const filteredServices = selectedCategory === 'All'
    ? dentalServices
    : dentalServices.filter(s => s.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory.includes(s.category));

  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            Clinical Services Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Specialized Dental Solutions for Every Generation
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            From routine preventive checkups to surgical implantology and aesthetic smile makeovers. Every treatment is delivered with digital precision, biocompatible materials, and gentle protocols.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-navy/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-electric-teal text-white shadow-3d-teal'
                  : 'bg-white text-navy/70 border border-navy/10 hover:border-electric-teal/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.slug}
              className="card-3d flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Hero preview image with overlay */}
                <div className="relative h-48 -mx-6 -mt-6 md:-mx-8 md:-mt-8 mb-6 overflow-hidden">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-[11px] font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Dental3DIcon
                    iconName={service.iconName}
                    color={service.accentColor}
                    size="md"
                  />
                  <span className="text-xs font-semibold text-navy/40">
                    Evidence-Based
                  </span>
                </div>

                <h2 className="text-xl font-heading font-bold text-navy group-hover:text-electric-teal transition-colors mb-2">
                  {service.name}
                </h2>

                <p className="text-xs sm:text-sm text-navy/70 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Candidate highlights preview */}
                <div className="mb-6 space-y-2 border-t border-navy/5 pt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy/50">
                    Recommended When:
                  </span>
                  <ul className="space-y-1.5 text-xs text-navy/80">
                    {service.candidates.slice(0, 2).map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-electric-teal shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-navy/5 flex items-center justify-between gap-3">
                <Link
                  to={`/services/${service.slug}`}
                  className="btn-3d-outline px-4 py-2 text-xs rounded-xl"
                >
                  Full Procedure Details
                </Link>

                <WhatsAppButton
                  serviceName={service.name}
                  variant="teal"
                  size="sm"
                  label="Enquire"
                  showIcon={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
