import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Clock, 
  Phone, 
  Sparkles,
  ShieldCheck,
  Activity,
  Smile,
  Layers,
  Heart,
  Cpu
} from 'lucide-react';
import { clinicConfig, dentalServices } from '../../config/clinicConfig';
import { ClinicLogo } from '../common/ClinicLogo';
import { WhatsAppButton } from '../common/WhatsAppButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceIcons = {
    ShieldCheck,
    Sparkles,
    Activity,
    Cpu,
    Smile,
    Layers,
    Heart,
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Doctor', path: '/doctor' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Patient Guide', path: '/patient-guide' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Clinic Announcement Strip */}
      <div className="bg-navy text-pearl px-4 py-2 text-xs md:text-sm font-medium border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-electric-teal font-semibold">
              <span className="w-2 h-2 rounded-full bg-electric-teal animate-pulse" />
              Direct Clinic Scheduling
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-pearl/80">
              <Clock className="w-3.5 h-3.5 text-electric-teal" />
              {clinicConfig.contact.openingHours.weekdays}
            </span>
          </div>

          <div className="flex items-center gap-4 text-pearl/80 text-xs">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-electric-teal" />
              <span>Tel: {clinicConfig.contact.phone}</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="text-electric-teal font-medium">
              WhatsApp: +{clinicConfig.contact.whatsappNumber}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-pearl/95 backdrop-blur-md shadow-card-elevated border-b border-navy/5 py-3'
            : 'bg-pearl/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <ClinicLogo />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              About
            </Link>

            <Link
              to="/doctor"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/doctor' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Doctor
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  location.pathname.startsWith('/services') ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-electric-teal' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-3xl shadow-card-hover border border-navy/10 p-3 mt-1 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-navy/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/50">All Dental Services</span>
                    <Link to="/services" className="text-xs font-bold text-electric-teal hover:underline">View All</Link>
                  </div>
                  {dentalServices.map((service) => {
                    const IconComp = serviceIcons[service.iconName as keyof typeof serviceIcons] || Sparkles;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-pearl-200/60 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-electric-teal/10 text-electric-teal group-hover:bg-electric-teal group-hover:text-white flex items-center justify-center transition-colors">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-heading font-semibold text-navy group-hover:text-electric-teal transition-colors">
                            {service.name}
                          </span>
                          <span className="text-[11px] text-navy/60 line-clamp-1">{service.category}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/pricing' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/patient-guide"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/patient-guide' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Patient Guide
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/gallery' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-electric-teal bg-electric-teal/10' : 'text-navy hover:text-electric-teal'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right CTA: Dimensional Book Appointment WhatsApp Button */}
          <div className="hidden lg:flex items-center gap-3">
            <WhatsAppButton variant="teal" size="sm" label="Book Appointment" />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppButton variant="teal" size="sm" label="Book" showIcon={false} className="py-2 px-3 text-xs" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-2xl bg-white border border-navy/10 text-navy hover:text-electric-teal hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-teal"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-navy/10 bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 mt-2 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2.5 rounded-2xl text-base font-heading font-semibold transition-colors ${
                    location.pathname === link.path
                      ? 'bg-electric-teal/15 text-electric-teal'
                      : 'text-navy hover:bg-pearl-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Services Submenu */}
              <div className="pt-2">
                <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy/50">
                  Dental Services
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  <Link
                    to="/services"
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-bold text-electric-teal hover:bg-electric-teal/10"
                  >
                    <span>All Services Overview</span>
                  </Link>
                  {dentalServices.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-navy/80 hover:text-navy hover:bg-pearl-200 font-medium"
                    >
                      <span>{service.name}</span>
                      <span className="text-xs text-navy/40">›</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Extra Links */}
              <div className="pt-3 border-t border-navy/10 flex flex-col gap-2">
                <Link
                  to="/appointment"
                  className="px-4 py-2.5 rounded-2xl text-sm font-semibold text-navy hover:bg-pearl-200"
                >
                  Appointment Information
                </Link>
                <Link
                  to="/privacy"
                  className="px-4 py-2 rounded-2xl text-xs text-navy/60 hover:text-navy"
                >
                  Privacy Policy
                </Link>
              </div>

              {/* Prominent Mobile WhatsApp Button */}
              <div className="pt-4">
                <WhatsAppButton variant="teal" size="md" className="w-full text-center" label="Book on WhatsApp" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
