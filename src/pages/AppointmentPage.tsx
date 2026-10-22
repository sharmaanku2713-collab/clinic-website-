import React, { useState } from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { clinicConfig, buildWhatsAppLink } from '../config/clinicConfig';

export const AppointmentPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('General Dentistry Consultation');
  const [patientName, setPatientName] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('Morning (10:00 AM - 01:00 PM)');

  // Dynamic pre-filled enquiry generator
  const generateEnquiryText = () => {
    let msg = `Hello ${clinicConfig.name}, I would like to schedule a dental appointment.`;
    if (patientName.trim()) {
      msg += `\nName: ${patientName.trim()}`;
    }
    msg += `\nService: ${selectedService}`;
    if (preferredDate) {
      msg += `\nPreferred Date: ${preferredDate}`;
    }
    msg += `\nPreferred Time: ${preferredTime}`;
    msg += `\nPlease let me know available slots.`;
    return msg;
  };

  const dynamicWhatsAppLink = buildWhatsAppLink(undefined, generateEnquiryText());

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            Appointment Protocol
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Schedule Your Visit via WhatsApp
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Our clinic uses direct WhatsApp scheduling. Simply choose your preferred service and time window below to generate a pre-filled enquiry, then tap to connect directly with our front desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Interactive Enquiry Configurator (Client-Side, zero backend needed!) */}
          <div className="lg:col-span-7 card-3d space-y-6">
            <div className="flex items-center justify-between border-b border-navy/10 pb-4">
              <div>
                <h2 className="text-xl font-heading font-bold text-navy">
                  Customize Your Appointment Enquiry
                </h2>
                <p className="text-xs text-navy/60">Optional: specify details to generate your tailored WhatsApp message</p>
              </div>
              <MessageCircle className="w-6 h-6 text-emerald-500" />
            </div>

            <div className="space-y-4">
              {/* Optional Name */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-navy/70 mb-2">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Doe"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full px-4 py-3 min-h-[48px] rounded-2xl bg-pearl border border-navy/10 text-navy text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-electric-teal"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-navy/70 mb-2">
                  Select Dental Treatment
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 min-h-[48px] rounded-2xl bg-pearl border border-navy/10 text-navy text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-electric-teal"
                >
                  <option value="General Dentistry & Consultation">General Dentistry Consultation</option>
                  <option value="Professional Teeth Whitening">Teeth Whitening</option>
                  <option value="Root Canal Treatment">Root Canal Treatment</option>
                  <option value="Dental Implants Consultation">Dental Implants Consultation</option>
                  <option value="Clear Aligners & Orthodontics">Clear Aligners & Braces</option>
                  <option value="Cosmetic Dentistry & Veneers">Cosmetic Dentistry & Smile Makeover</option>
                  <option value="Pediatric Dental Care">Pediatric Dentistry</option>
                </select>
              </div>

              {/* Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-navy/70 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-2xl bg-pearl border border-navy/10 text-navy text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-electric-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-navy/70 mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-2xl bg-pearl border border-navy/10 text-navy text-sm xs:text-base focus:outline-none focus:ring-2 focus:ring-electric-teal"
                  >
                    <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM – 05:00 PM)</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">Evening (05:00 PM – 08:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message Preview Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-navy/10 text-xs text-navy/80 space-y-1.5 font-mono">
                <span className="text-[10px] uppercase font-bold text-navy/40 font-heading block">
                  Generated WhatsApp Message Preview:
                </span>
                <p className="whitespace-pre-line bg-white p-3 rounded-xl border border-navy/5 shadow-sm break-words">
                  {generateEnquiryText()}
                </p>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={dynamicWhatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-teal w-full text-center py-4 px-3 sm:px-6 text-sm xs:text-base font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Send Appointment Enquiry on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: How It Works & Clinical Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-3d bg-white space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-electric-violet">
                How Our Flow Works
              </span>
              <h3 className="text-xl font-heading font-bold text-navy">
                Transparent 4-Step Booking
              </h3>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-electric-teal/15 text-electric-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-xs sm:text-sm text-navy/70">
                    <strong className="text-navy">Tap Book:</strong> Opens WhatsApp directly with the clinic's personal line (+91 9352089550).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-electric-teal/15 text-electric-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-xs sm:text-sm text-navy/70">
                    <strong className="text-navy">Review & Tap Send:</strong> You review the pre-filled text in your WhatsApp app and tap send.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-electric-teal/15 text-electric-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-navy/70">
                    <strong className="text-navy">Clinic Confirmation:</strong> Our desk coordinator verifies doctor availability and confirms your time.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-electric-teal/15 text-electric-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    4
                  </div>
                  <div className="text-xs sm:text-sm text-navy/70">
                    <strong className="text-navy">Relaxed Visit:</strong> Arrive at the clinic with zero wait times and full doctor attention.
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & No-Spam Assurance */}
            <div className="p-6 rounded-3xl bg-pearl border border-navy/10 space-y-2">
              <div className="flex items-center gap-2 text-navy font-heading font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-electric-teal" />
                <span>Zero Database / Direct Privacy</span>
              </div>
              <p className="text-xs text-navy/70 leading-relaxed">
                We respect your personal privacy. We do not store your information in any marketing database or third-party CRM. All messaging occurs directly within your secure WhatsApp environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
