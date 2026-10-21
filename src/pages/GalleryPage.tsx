import React, { useState } from 'react';
import { galleryItems } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Clinic Interior', 'Technology', 'Sterilization', 'Consultation'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-violet/10 text-electric-violet text-xs font-heading font-bold uppercase tracking-wider">
            Visual Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Our Clinic Environment & Technology
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Take a visual tour through our state-of-the-art operatory lounges, hospital-grade sterilization hub, and relaxing patient care spaces.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-navy/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-electric-violet text-white shadow-3d-violet'
                  : 'bg-white text-navy/70 border border-navy/10 hover:border-electric-violet/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-3d !p-3 group overflow-hidden bg-white"
            >
              <div className="relative rounded-2xl overflow-hidden h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-electric-teal">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-heading font-bold mt-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-pearl/80 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-teal">
            Experience It In Person
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold">
            Visit Our Modern Practice
          </h2>
          <p className="text-pearl/70 text-xs sm:text-sm max-w-lg mx-auto">
            Experience dental care in an environment created for your absolute comfort, health, and well-being.
          </p>
          <div className="pt-2">
            <WhatsAppButton variant="teal" size="lg" label="Book Visit via WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};
