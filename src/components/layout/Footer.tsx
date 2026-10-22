import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { clinicConfig, dentalServices } from '../../config/clinicConfig';
import { ClinicLogo } from '../common/ClinicLogo';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-pearl pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Clinic Identity & Doctor info */}
          <div className="lg:col-span-2 space-y-4">
            <ClinicLogo isFooter size="lg" />
            <p className="text-pearl/70 text-sm leading-relaxed max-w-sm mt-3">
              Delivering elevated dental care through modern digital workflows, conservative treatment protocols, and gentle precision dentistry.
            </p>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm">
              <p className="text-xs font-heading font-semibold text-electric-teal uppercase tracking-wider">
                Attending Clinician
              </p>
              <p className="text-sm font-bold text-white mt-1">{clinicConfig.doctor.name}</p>
              <p className="text-xs text-pearl/60">{clinicConfig.doctor.qualifications}</p>
              <p className="text-xs text-electric-teal mt-0.5">{clinicConfig.doctor.specialization}</p>
            </div>

            <div className="pt-2">
              <WhatsAppButton variant="teal" size="md" label="Book via WhatsApp" className="w-full sm:w-auto text-center" />
            </div>
          </div>

          {/* Col 2: Services List */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-sm text-pearl/70">
              {dentalServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-electric-teal transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-pearl/70">
              <li>
                <Link to="/" className="hover:text-electric-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-electric-teal transition-colors">About Our Practice</Link>
              </li>
              <li>
                <Link to="/doctor" className="hover:text-electric-teal transition-colors">Meet the Doctor</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-electric-teal transition-colors">Treatment Pricing</Link>
              </li>
              <li>
                <Link to="/patient-guide" className="hover:text-electric-teal transition-colors">Patient Guide & FAQs</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-electric-teal transition-colors">Clinic Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-electric-teal transition-colors">Location & Contact</Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-electric-teal transition-colors">Appointment Details</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-electric-teal transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white">
              Clinic Contact
            </h4>
            <ul className="space-y-3 text-sm text-pearl/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-electric-teal shrink-0 mt-0.5" />
                <span className="break-words">{clinicConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-electric-teal shrink-0" />
                <a href={`tel:${clinicConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {clinicConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-electric-teal shrink-0" />
                <a href={`mailto:${clinicConfig.contact.email}`} className="hover:text-white transition-colors break-all">
                  {clinicConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-white/10">
                <Clock className="w-4 h-4 text-electric-teal shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>{clinicConfig.contact.openingHours.weekdays}</p>
                  <p>{clinicConfig.contact.openingHours.saturday}</p>
                  <p>{clinicConfig.contact.openingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-pearl/50 text-center md:text-left">
          <p>
            © {new Date().getFullYear()} {clinicConfig.name}. All clinical content is provided for informational purposes and does not replace a professional dental examination.
          </p>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-electric-teal transition-colors">
              Privacy & WhatsApp Policy
            </Link>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-pearl/60">
              <ShieldCheck className="w-3.5 h-3.5 text-electric-teal" />
              Verified Clinic Demo Setup
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
