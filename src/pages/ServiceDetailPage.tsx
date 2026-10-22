import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronDown, 
  AlertCircle, 
  Sparkles 
} from 'lucide-react';
import { dentalServices } from '../config/clinicConfig';
import { Dental3DIcon } from '../components/common/Dental3DIcon';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Mini3DViewer } from '../components/canvas/Mini3DViewer';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const service = dentalServices.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // 3D mini viewer type mapping
  const viewerType = service.slug === 'dental-implants' ? 'cylinder' : service.slug === 'orthodontics' ? 'torus' : 'gem';
  const accentHex = service.accentColor === 'teal' ? '#00BFA6' : service.accentColor === 'violet' ? '#7957FF' : '#FF786B';

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold text-navy/70 hover:text-electric-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Dental Treatments</span>
          </Link>
        </div>

        {/* Hero Banner for Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <Dental3DIcon
                iconName={service.iconName}
                color={service.accentColor}
                size="md"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-navy/50 bg-white px-3 py-1.5 rounded-full border border-navy/10">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight break-words">
              {service.name}
            </h1>

            <p className="text-base sm:text-lg text-navy/80 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            {/* Pricing note notice */}
            <div className="p-4 rounded-2xl bg-pearl border border-navy/10 flex items-center gap-3 text-xs sm:text-sm text-navy/80">
              <Sparkles className="w-5 h-5 text-electric-teal shrink-0" />
              <span>{service.pricingNote}</span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                serviceName={service.name}
                variant={service.accentColor}
                size="lg"
                label={`Enquire about ${service.name}`}
                className="w-full sm:w-auto text-center"
              />
            </div>
          </div>

          {/* Right Hero Visual with 3D Object & Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={service.heroImage}
                alt={service.name}
                className="w-full h-60 xs:h-72 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-2 shadow-md">
                <Mini3DViewer type={viewerType} accentColor={accentHex} className="!w-24 !h-24" />
              </div>
              <div className="p-4 bg-white">
                <span className="text-xs font-bold text-navy/50 uppercase tracking-wider">Clinical Guidance</span>
                <p className="text-sm font-heading font-bold text-navy mt-0.5">High-Precision Digital Protocols</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Who May Benefit from a Professional Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6 card-3d space-y-4">
            <div className="flex items-center gap-2 text-electric-teal">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="text-xl font-heading font-bold text-navy">
                Who May Benefit from Assessment
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              If you experience any of the following indications, our clinical team can evaluate whether {service.name.toLowerCase()} is appropriate for your case:
            </p>
            <ul className="space-y-3 pt-2">
              {service.candidates.map((candidate, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-navy/80">
                  <span className="w-5 h-5 rounded-full bg-electric-teal/15 text-electric-teal flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{candidate}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Precautions & Aftercare Information */}
          <div className="lg:col-span-6 card-3d space-y-4 bg-pearl-50">
            <div className="flex items-center gap-2 text-electric-coral">
              <AlertCircle className="w-5 h-5" />
              <h2 className="text-xl font-heading font-bold text-navy">
                Aftercare & Precautions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              General clinical guidance to help ensure optimal recovery and longevity of your treatment results (subject to individualized review by your clinician):
            </p>
            <ul className="space-y-3 pt-2">
              {service.precautions.map((precaution, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-navy/80">
                  <span className="w-5 h-5 rounded-full bg-electric-coral/15 text-electric-coral flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    •
                  </span>
                  <span>{precaution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Treatment Process & Protocol Steps */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-electric-teal">
              Clinical Protocol
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              What the Treatment Involves
            </h2>
            <p className="text-navy/70 text-xs sm:text-sm">
              A general outline of our methodical clinical steps for {service.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.procedureSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-navy/10 shadow-sm space-y-3">
                <span className="text-2xl font-heading font-extrabold text-electric-teal">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-heading font-bold text-navy">{step.title}</h3>
                <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Relevant Q&A */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-electric-violet">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy">
              Frequently Asked About {service.name}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:px-6 sm:py-4 text-left flex items-center justify-between gap-3 font-heading font-bold text-navy text-sm sm:text-base hover:text-electric-teal transition-colors"
                  >
                    <span className="break-words">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-navy/40 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-electric-teal' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 text-xs sm:text-sm text-navy/70 border-t border-navy/5 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated WhatsApp Appointment Section for this Service */}
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center space-y-4 max-w-4xl mx-auto shadow-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-electric-teal">
            Direct WhatsApp Appointment Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Schedule Your {service.name} Consultation
          </h2>
          <p className="text-pearl/70 text-xs sm:text-sm max-w-xl mx-auto">
            Click below to open WhatsApp with a pre-configured enquiry mentioning {service.name}. Our front desk will confirm your appointment date and time promptly.
          </p>
          <div className="pt-2">
            <WhatsAppButton
              serviceName={service.name}
              variant="teal"
              size="lg"
              label={`Book ${service.name} Appointment`}
              className="w-full sm:w-auto text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
