import { ShieldCheck, Cpu } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            About Our Practice
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
            Elevating Dental Care with Precision, <span className="text-gradient-teal">Integrity</span> & Empathy
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Founded with the belief that a visit to the dentist should inspire confidence rather than apprehension. We unite advanced digital diagnostics with conservative clinical judgment in an unhurried, pearl-white setting.
          </p>
        </div>
      </div>

      {/* Visual Asymmetry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="card-3d space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-electric-violet">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy">
                Conservative, Patient-Centric Treatment
              </h2>
              <p className="text-navy/75 text-sm sm:text-base leading-relaxed">
                At {clinicConfig.name}, we champion minimally invasive dentistry. Our goal is always to preserve maximum natural tooth structure through early digital detection, remineralization protocols, and precision-engineered restorations.
              </p>
              <p className="text-navy/75 text-sm sm:text-base leading-relaxed">
                Every consultation is conducted with high-definition intraoral cameras. You see exactly what the doctor sees on high-resolution displays, enabling complete understanding and trust before any treatment begins.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-pearl border border-navy/10 shadow-sm">
                <Cpu className="w-8 h-8 text-electric-teal mb-3" />
                <h3 className="font-heading font-bold text-navy text-base mb-1">Digital Workflows</h3>
                <p className="text-xs text-navy/70">
                  3D scanning and computer-guided implant planning replace messy impression trays and guesswork.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-pearl border border-navy/10 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-electric-violet mb-3" />
                <h3 className="font-heading font-bold text-navy text-base mb-1">Hospital Sterility</h3>
                <p className="text-xs text-navy/70">
                  Strict Class-B autoclave cycles, biological spore testing, and individually sealed sterile instrument trays.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Clinic operatory lounge"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-electric-teal">Clinic Environment</p>
                  <p className="text-base font-heading font-bold">Ergonomic Comfort & Natural Light</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Practice Values */}
      <div className="bg-white py-16 border-y border-navy/5 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-electric-teal">
              Our Core Principles
            </span>
            <h2 className="text-3xl font-heading font-extrabold text-navy">
              Standards We Never Compromise On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-pearl border border-navy/5 space-y-3">
              <span className="text-2xl font-heading font-extrabold text-electric-teal">01</span>
              <h3 className="text-lg font-heading font-bold text-navy">Transparency First</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                We believe you deserve straightforward answers. From diagnostic findings to timeline and costs, everything is communicated with absolute clarity.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-pearl border border-navy/5 space-y-3">
              <span className="text-2xl font-heading font-extrabold text-electric-violet">02</span>
              <h3 className="text-lg font-heading font-bold text-navy">Painless Gentle Touch</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                Dentistry has evolved. We leverage ultra-fine topical anesthesia and soothing techniques to make every visit deeply comfortable.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-pearl border border-navy/5 space-y-3">
              <span className="text-2xl font-heading font-extrabold text-electric-coral">03</span>
              <h3 className="text-lg font-heading font-bold text-navy">Long-Term Oral Health</h3>
              <p className="text-xs sm:text-sm text-navy/70 leading-relaxed">
                We design treatments meant to endure. By addressing underlying bite dynamics and hygiene habits, we safeguard your smile for decades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-pearl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Experience the Difference Yourself
            </h3>
            <p className="text-xs sm:text-sm text-pearl/70">
              Schedule your introductory examination and digital consultation with {clinicConfig.doctor.name}.
            </p>
          </div>

          <WhatsAppButton variant="teal" size="lg" label="Book Consultation on WhatsApp" />
        </div>
      </div>
    </div>
  );
};
