import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Navigation 
} from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const ContactPage: React.FC = () => {
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicConfig.contact.mapQuery || clinicConfig.contact.address)}`;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            Location & Contact
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Connect with Our Clinical Team
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Have questions about a dental condition, consultation timings, or treatment plans? We are here to help. Reach out directly via WhatsApp for fastest response.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: WhatsApp Primary */}
          <div className="card-3d border-2 border-electric-teal bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-teal text-white flex items-center justify-center shadow-3d-teal">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-electric-teal">
                Fastest Response
              </span>
              <h2 className="text-lg font-heading font-bold text-navy mt-1">WhatsApp Chat</h2>
              <p className="text-xs text-navy/60 mt-1">Direct click-to-chat messaging with our reception.</p>
            </div>
            <p className="font-heading font-bold text-navy text-sm">+{clinicConfig.contact.whatsappNumber}</p>
            <WhatsAppButton variant="teal" size="sm" label="Chat Now" className="w-full text-center" />
          </div>

          {/* Card 2: Phone */}
          <div className="card-3d bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-violet/15 text-electric-violet flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/40">
                Direct Line
              </span>
              <h2 className="text-lg font-heading font-bold text-navy mt-1">Phone Call</h2>
              <p className="text-xs text-navy/60 mt-1">Speak with our friendly desk team during hours.</p>
            </div>
            <p className="font-heading font-bold text-navy text-sm">{clinicConfig.contact.phone}</p>
            <a
              href={`tel:${clinicConfig.contact.phone}`}
              className="btn-3d-outline px-4 py-2 text-xs rounded-xl block text-center"
            >
              Call Clinic
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="card-3d bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-electric-coral/15 text-electric-coral flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/40">
                Official Inquiries
              </span>
              <h2 className="text-lg font-heading font-bold text-navy mt-1">Email Desk</h2>
              <p className="text-xs text-navy/60 mt-1">For digital records, formal queries, and referrals.</p>
            </div>
            <p className="font-heading font-bold text-navy text-xs break-all">{clinicConfig.contact.email}</p>
            <a
              href={`mailto:${clinicConfig.contact.email}`}
              className="btn-3d-outline px-4 py-2 text-xs rounded-xl block text-center"
            >
              Send Email
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="card-3d bg-white space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/40">
                Visiting Schedule
              </span>
              <h2 className="text-lg font-heading font-bold text-navy mt-1">Clinic Hours</h2>
              <p className="text-xs text-navy/60 mt-1">Open 6 days a week for scheduled consultations.</p>
            </div>
            <div className="text-[11px] space-y-1 text-navy/70">
              <p className="font-semibold text-navy">{clinicConfig.contact.openingHours.weekdays}</p>
              <p>{clinicConfig.contact.openingHours.saturday}</p>
            </div>
          </div>
        </div>

        {/* Address and Location Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-5 card-3d space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-violet">
                Clinic Location
              </span>
              <h3 className="text-2xl font-heading font-bold text-navy">
                Visiting Our Clinic
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-pearl border border-navy/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-electric-teal shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-sm text-navy">{clinicConfig.name}</p>
                  <p className="text-xs sm:text-sm text-navy/70 mt-1 leading-relaxed">
                    {clinicConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-navy/70">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-teal" />
                Valet & reserved patient parking available nearby
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-electric-violet" />
                Wheelchair and elevator accessible facility
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-outline px-6 py-3.5 text-xs sm:text-sm rounded-2xl inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <Navigation className="w-4 h-4 text-electric-teal shrink-0" />
                <span>Open in Google Maps</span>
              </a>

              <WhatsAppButton variant="teal" size="sm" label="Enquire on WhatsApp" className="w-full sm:w-auto text-center" />
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-96 flex flex-col items-center justify-center p-8 text-center group">
              <div className="w-16 h-16 rounded-full bg-electric-teal/20 text-electric-teal flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-heading font-bold text-navy">
                {clinicConfig.name} Navigation Map
              </h4>
              <p className="text-xs sm:text-sm text-navy/60 max-w-sm mt-1">
                {clinicConfig.contact.address}
              </p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold hover:bg-electric-teal transition-colors shadow-md inline-flex items-center gap-2"
              >
                <span>Navigate via Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
