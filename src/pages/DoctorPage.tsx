import React from 'react';
import { 
  Award, 
  MapPin, 
  Clock, 
  Stethoscope 
} from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const DoctorPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Editorial Doctor Profile Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait with 3D dimensional framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-electric-teal via-electric-violet to-electric-coral rounded-[36px] blur-sm opacity-60" />
              <div className="relative bg-white rounded-[32px] p-4 shadow-card-hover border border-white">
                <img
                  src={clinicConfig.doctor.portraitUrl}
                  alt={`${clinicConfig.doctor.name} - Professional Portrait`}
                  className="w-full h-[460px] object-cover rounded-[24px] shadow-sm"
                />
                
                {/* Floating credentials tag */}
                <div className="mt-4 p-4 rounded-2xl bg-pearl border border-navy/5 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-electric-teal">
                      Clinical Focus
                    </span>
                    <p className="text-sm font-heading font-extrabold text-navy">
                      {clinicConfig.doctor.specialization}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-electric-violet/10 text-electric-violet flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Info & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-violet/10 text-electric-violet text-xs font-heading font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                Principal Dental Clinician
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
                {clinicConfig.doctor.name}
              </h1>
              <p className="text-base sm:text-lg text-electric-teal font-heading font-bold">
                {clinicConfig.doctor.qualifications}
              </p>
            </div>

            {/* Verified Details Badges (Notice placeholders are clearly marked) */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-xl bg-white border border-navy/10 text-xs font-bold text-navy shadow-sm">
                Specialization: <span className="text-electric-violet">{clinicConfig.doctor.specialization}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-navy/10 text-xs font-bold text-navy shadow-sm">
                Experience: <span className="text-electric-teal">{clinicConfig.doctor.experience}</span>
              </div>
            </div>

            <div className="space-y-4 text-navy/75 text-sm sm:text-base leading-relaxed">
              <p>{clinicConfig.doctor.bio}</p>
              <p className="p-5 rounded-2xl bg-white border border-navy/10 shadow-sm text-navy/80 italic border-l-4 border-l-electric-teal">
                "{clinicConfig.doctor.treatmentApproach}"
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <WhatsAppButton 
                variant="teal" 
                size="lg" 
                label={`Schedule Consultation with ${clinicConfig.doctor.name}`} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect During a Consultation */}
      <div className="bg-white py-16 border-y border-navy/5 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-electric-teal">
              Patient Consultation Protocol
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              What to Expect During Your Appointment
            </h2>
            <p className="text-navy/70 text-sm sm:text-base">
              Every appointment is designed to be comprehensive, unrushed, and completely informative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicConfig.doctor.consultationExpectations.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-pearl border border-navy/5 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-electric-teal/15 text-electric-teal flex items-center justify-center font-heading font-extrabold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-heading font-bold text-navy">{item}</h3>
                <p className="text-xs text-navy/60 leading-relaxed">
                  Conducted using state-of-the-art sterile equipment and instant digital screen feedback.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation & Clinic Location Info Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-3d bg-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-electric-violet">
              Direct Clinical Consultation
            </span>
            <h3 className="text-2xl font-heading font-bold text-navy">
              Schedule with {clinicConfig.doctor.name}
            </h3>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
              Consultations are conducted by prior appointment to ensure dedicated, individualized attention without wait-room crowding.
            </p>
            <div className="pt-2">
              <WhatsAppButton variant="violet" size="md" label="Book via WhatsApp (+91 9352089550)" />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-pearl border border-navy/10 space-y-3 text-xs sm:text-sm text-navy/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-electric-teal shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-navy">Consultation Venue:</p>
                <p className="text-navy/70">{clinicConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-navy/10">
              <Clock className="w-5 h-5 text-electric-teal shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-navy">Consulting Hours:</p>
                <p className="text-navy/70">{clinicConfig.contact.openingHours.weekdays}</p>
                <p className="text-navy/70">{clinicConfig.contact.openingHours.saturday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
