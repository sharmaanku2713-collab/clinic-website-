import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { clinicConfig, dentalServices } from '../config/clinicConfig';

export function usePageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = `${clinicConfig.name} | Modern Digital Dental Studio`;
    let description = "High-precision dental care, painless treatments, dental implants, clear aligners, and aesthetic smile design in an unhurried pearl-white environment.";

    if (pathname === '/') {
      title = `${clinicConfig.name} | Premium 3D Dental Care & Aesthetic Dentistry`;
      description = "Welcome to our modern dental clinic. Experience high-precision digital dentistry, 3D diagnostics, painless root canals, dental implants, and clear aligners.";
    } else if (pathname === '/about') {
      title = `About Our Practice | ${clinicConfig.name}`;
      description = "Discover our clinical philosophy, strict Class-B autoclave sterilization protocols, low-radiation digital imaging, and patient-first care.";
    } else if (pathname === '/doctor') {
      title = `Meet ${clinicConfig.doctor.name} | ${clinicConfig.name}`;
      description = `Learn more about our principal clinician ${clinicConfig.doctor.name}, qualifications, specializations in ${clinicConfig.doctor.specialization}, and patient consultation protocols.`;
    } else if (pathname === '/services') {
      title = `All Dental Services & Treatments | ${clinicConfig.name}`;
      description = "Explore our complete range of general, cosmetic, restorative, and pediatric dental treatments delivered with modern digital equipment.";
    } else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      const service = dentalServices.find((s) => s.slug === slug);
      if (service) {
        title = `${service.name} | ${clinicConfig.name}`;
        description = service.shortDesc;
      }
    } else if (pathname === '/pricing') {
      title = `Treatment Pricing & Comparison | ${clinicConfig.name}`;
      description = "Transparent dental treatment pricing, service package inclusions, and instant WhatsApp consultation inquiries.";
    } else if (pathname === '/patient-guide') {
      title = `Patient Guide & FAQs | ${clinicConfig.name}`;
      description = "Essential guidelines for your first dental visit, post-care tips, sterilization standards, and answers to common patient questions.";
    } else if (pathname === '/gallery') {
      title = `Clinic Environment & Technology Gallery | ${clinicConfig.name}`;
      description = "Take a visual tour through our modern operatory lounges, digital intraoral scanning suites, and hospital-grade sterilization hub.";
    } else if (pathname === '/contact') {
      title = `Location & Contact | ${clinicConfig.name}`;
      description = `Find clinic hours, location address, Google Maps directions, phone line, and WhatsApp contact for ${clinicConfig.name}.`;
    } else if (pathname === '/appointment') {
      title = `Book Appointment via WhatsApp | ${clinicConfig.name}`;
      description = "Connect directly with our clinic on WhatsApp to schedule an appointment with zero wait times and customized pre-filled inquiries.";
    } else if (pathname === '/privacy') {
      title = `Privacy Policy & WhatsApp Notice | ${clinicConfig.name}`;
      description = "Our commitment to patient confidentiality, zero database tracking, and secure WhatsApp click-to-chat messaging.";
    }

    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [pathname]);
}
