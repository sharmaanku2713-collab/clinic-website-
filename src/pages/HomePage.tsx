import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  HeartHandshake, 
  Award, 
  Cpu 
} from 'lucide-react';
import { clinicConfig, dentalServices, patientJourneySteps, galleryItems } from '../config/clinicConfig';
import { HeroToothScene } from '../components/canvas/HeroToothScene';
import { Dental3DIcon } from '../components/common/Dental3DIcon';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const HomePage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const homeFaqs = [
    {
      q: "How do I schedule an appointment through WhatsApp?",
      a: "Simply tap any 'Book Appointment' button on the website. This opens WhatsApp directly with our clinic's contact number (+919352089550) and a pre-filled enquiry message. Our front desk team will promptly reply with available time slots."
    },
    {
      q: "What should I bring for my first consultation?",
      a: "Please bring any previous dental X-rays or records if available, along with a list of any current medications or general health conditions you would like the doctor to review."
    },
    {
      q: "Are dental treatments painful?",
      a: "Our practice utilizes advanced topical anesthetics, gentle rotary endodontics, and modern micro-invasive tools designed specifically to minimize discomfort and ensure a relaxing experience."
    },
    {
      q: "Are the treatment costs shared before starting any procedure?",
      a: "Yes, 100%. After the initial clinical examination and digital intraoral scans, the doctor discusses all available options, steps, and exact fees so you can make an informed decision without hidden costs."
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION WITH 3D TOOTH SCULPTURE */}
      <section className="relative pt-6 pb-20 md:pt-12 md:pb-28 overflow-hidden bg-gradient-to-b from-pearl via-white to-pearl">
        {/* Soft atmospheric gradient highlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-electric-teal/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-electric-violet/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-2 rounded-full bg-white border border-navy/10 shadow-sm max-w-full flex-wrap justify-center sm:justify-start">
                <span className="w-2.5 h-2.5 rounded-full bg-electric-teal animate-ping shrink-0" />
                <span className="text-[11px] xs:text-xs font-heading font-semibold text-navy/80 uppercase tracking-wider">
                  Next-Gen Dental Care
                </span>
                <span className="text-navy/30 hidden xs:inline">•</span>
                <span className="text-[11px] xs:text-xs font-bold text-electric-violet">Evidence-Based Dentistry</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.14] break-words">
                Sculpting Confident, <br />
                <span className="text-gradient-teal">Healthy Smiles</span> with <br className="hidden sm:inline" />
                <span className="text-gradient-violet">Digital Precision</span>
              </h1>

              <p className="text-sm xs:text-base sm:text-lg text-navy/70 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Experience high-precision dental treatments in a calming, pearl-white sanctuary. From gentle preventive cleanings to permanent dental implants and clear aligners, every treatment is tailored to your smile.
              </p>

              {/* Dimensional Tactile Hero CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <WhatsAppButton 
                  variant="teal" 
                  size="lg" 
                  label="Book Appointment on WhatsApp" 
                  className="w-full sm:w-auto text-center"
                />

                <Link
                  to="/services"
                  className="btn-3d-outline px-6 py-4 rounded-2xl w-full sm:w-auto text-center"
                >
                  Explore All Treatments
                </Link>
              </div>

              {/* Verified Clinical Highlights */}
              <div className="pt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 border-t border-navy/10">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-electric-teal/10 flex items-center justify-center text-electric-teal shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-navy truncate">Digital Scans</span>
                </div>

                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-electric-violet/10 flex items-center justify-center text-electric-violet shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-navy truncate">Class-B Sterilization</span>
                </div>

                <div className="flex items-center gap-2 col-span-1 xs:col-span-2 sm:col-span-1 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-electric-coral/10 flex items-center justify-center text-electric-coral shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-navy truncate">Gentle Protocols</span>
                </div>
              </div>
            </div>

            {/* Right: 3D Interactive Tooth Canvas */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none">
                <HeroToothScene />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROMINENT DOCTOR INTRODUCTION SECTION */}
      <section className="py-20 bg-white relative border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor Portrait Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* 3D background accent plate */}
                <div className="absolute inset-0 bg-gradient-to-tr from-electric-teal/30 via-electric-violet/30 to-electric-coral/20 rounded-[32px] transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />
                <div className="relative bg-pearl rounded-[28px] overflow-hidden p-3 shadow-card-elevated border border-white">
                  <img
                    src={clinicConfig.doctor.portraitUrl}
                    alt={`${clinicConfig.doctor.name} - Chief Dental Clinician`}
                    className="w-full h-[320px] xs:h-[360px] sm:h-[400px] object-cover rounded-[22px] shadow-sm"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white rounded-2xl mt-3 border border-navy/5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-electric-teal uppercase tracking-wider">
                        Chief Dental Surgeon
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-navy/60 bg-pearl px-2 py-0.5 rounded-full">
                        <Award className="w-3 h-3 text-electric-violet" />
                        Verified
                      </span>
                    </div>
                    <p className="text-lg font-heading font-extrabold text-navy mt-1">
                      {clinicConfig.doctor.name}
                    </p>
                    <p className="text-xs text-navy/60 font-medium">
                      {clinicConfig.doctor.qualifications}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Bio & Approach */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-heading font-bold text-electric-violet uppercase tracking-wider">
                  Meet Your Clinician
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                  Dedicated to Gentle, High-Precision Dental Care
                </h2>
              </div>

              <div className="p-4 rounded-2xl bg-electric-teal/10 border border-electric-teal/20 text-navy text-xs xs:text-sm font-semibold inline-block max-w-full break-words">
                Specialization: {clinicConfig.doctor.specialization} • Experience: {clinicConfig.doctor.experience}
              </div>

              <p className="text-navy/80 text-base leading-relaxed">
                {clinicConfig.doctor.bio}
              </p>

              <div className="p-5 rounded-2xl bg-pearl-200/60 border border-navy/5 space-y-2">
                <h3 className="text-sm font-heading font-bold text-navy flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-electric-teal" />
                  Our Treatment Philosophy
                </h3>
                <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                  {clinicConfig.doctor.treatmentApproach}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WhatsAppButton variant="violet" size="md" label="Book Consultation" />
                <Link
                  to="/doctor"
                  className="inline-flex items-center gap-2 text-sm font-heading font-bold text-navy hover:text-electric-teal transition-colors px-4 py-3"
                >
                  <span>Read Doctor Profile & Credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES SECTION WITH 3D ICONS */}
      <section className="py-20 bg-pearl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-heading font-bold text-electric-teal uppercase tracking-wider">
                Clinical Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Comprehensive Dental Care for Every Smile
              </h2>
              <p className="text-navy/70 text-sm sm:text-base">
                From proactive preventive hygiene to complex full-arch implants and smile makeovers.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-electric-teal hover:text-electric-teal-dark"
            >
              <span>Explore All 7 Treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dentalServices.slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="card-3d flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Dental3DIcon
                      iconName={service.iconName}
                      color={service.accentColor}
                      size="md"
                    />
                    <span className="text-xs font-semibold text-navy/50 bg-pearl-200 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-navy group-hover:text-electric-teal transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-navy/70 text-sm leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-navy/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-heading font-bold text-navy hover:text-electric-teal inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Procedure</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE OUR CLINIC (VERIFIED CLINICAL HIGHLIGHTS) */}
      <section className="py-20 bg-white border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-heading font-bold text-electric-violet uppercase tracking-wider">
              Patient Trust & Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Why Patients Trust Our Practice
            </h2>
            <p className="text-navy/70 text-sm sm:text-base">
              Every protocol in our clinic is designed around comfort, clinical sterility, and total transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-pearl border border-navy/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-electric-teal/15 text-electric-teal flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">Strict Class-B Sterilization</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Every instrument undergoes a rigorous multi-stage ultrasonic wash and vacuum autoclave sterilization for absolute safety.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pearl border border-navy/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-electric-violet/15 text-electric-violet flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">Low-Dose Digital Diagnostics</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Instant high-resolution imaging with up to 80% reduced radiation compared to traditional film dental radiographs.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pearl border border-navy/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-electric-coral/15 text-electric-coral flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">Anxiety-Free Dentistry</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Gentle handling, ergonomic memory foam chairs, and clear explanations at every step to keep you completely at ease.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-pearl border border-navy/5 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy">Zero Surprises Pricing</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Itemized treatment roadmaps explained before care begins. No hidden charges or pressured recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATIENT JOURNEY SECTION */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-heading font-bold text-electric-teal uppercase tracking-wider">
              Seamless Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Your Patient Journey, Simplified
            </h2>
            <p className="text-navy/70 text-sm sm:text-base">
              A smooth 4-step path from your initial enquiry to confident, radiant oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientJourneySteps.map((step) => (
              <div key={step.step} className="card-3d relative bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-heading font-extrabold text-gradient-teal">
                      {step.step}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-electric-teal/10 text-electric-teal flex items-center justify-center text-xs font-bold">
                      ✓
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppButton variant="teal" size="md" label="Start by Scheduling on WhatsApp" />
          </div>
        </div>
      </section>

      {/* 6. CLINIC GALLERY PREVIEW */}
      <section className="py-20 bg-white border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-heading font-bold text-electric-violet uppercase tracking-wider">
                Clinic Environment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
                Designed for Serenity & Precision
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-heading font-bold text-electric-violet hover:underline"
            >
              <span>View Full Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.slice(0, 3).map((item) => (
              <div key={item.id} className="group relative rounded-3xl overflow-hidden shadow-card-elevated border border-navy/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-electric-teal">
                    {item.category}
                  </span>
                  <h3 className="text-base font-heading font-bold mt-1">{item.title}</h3>
                  <p className="text-xs text-pearl/80 line-clamp-1 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMPACT FAQ SECTION */}
      <section className="py-20 bg-pearl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-heading font-bold text-electric-teal uppercase tracking-wider">
              Answers & Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
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

          <div className="mt-8 text-center">
            <Link to="/patient-guide" className="text-xs font-bold text-electric-teal hover:underline inline-flex items-center gap-1">
              <span>View More Questions & Patient Guidelines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. APPOINTMENT CTA & LOCATION BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-navy via-navy to-[#1f2e52] text-white p-6 xs:p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Background glowing orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric-teal/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric-violet/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-electric-teal">
                  Ready to Transform Your Smile?
                </span>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Schedule Your Consultation with {clinicConfig.doctor.name}
                </h2>
                <p className="text-pearl/80 text-sm sm:text-base max-w-xl leading-relaxed">
                  Connect directly with our clinic on WhatsApp. Our friendly team will assist with convenient appointments, preliminary questions, and visiting instructions.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <WhatsAppButton 
                    variant="teal" 
                    size="lg" 
                    label="Book on WhatsApp (+91 9352089550)" 
                    className="w-full sm:w-auto text-center"
                  />
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto text-center px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm transition-all border border-white/20"
                  >
                    View Clinic Address & Map
                  </Link>
                </div>
              </div>

              {/* Quick Hours & Contact box */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 space-y-4">
                <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-electric-teal" />
                  Clinic Timings
                </h3>
                <div className="text-xs space-y-2 text-pearl/80 border-b border-white/10 pb-4">
                  <p>{clinicConfig.contact.openingHours.weekdays}</p>
                  <p>{clinicConfig.contact.openingHours.saturday}</p>
                  <p>{clinicConfig.contact.openingHours.sunday}</p>
                </div>

                <div className="space-y-2 text-xs text-pearl/80">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-electric-teal shrink-0" />
                    <span>{clinicConfig.contact.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-electric-teal shrink-0" />
                    <span>{clinicConfig.contact.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
