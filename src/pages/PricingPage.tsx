import { Check, Info } from 'lucide-react';
import { pricingPlans } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const PricingPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            Clear & Transparent Care
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Treatment Pricing & Service Packages
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Every clinical procedure is uniquely tailored to anatomical factors and personal objectives. We provide complete itemized transparency with zero hidden extras.
          </p>
        </div>

        {/* Clinical Transparency Notice */}
        <div className="mt-8 p-5 rounded-3xl bg-pearl border border-navy/10 flex items-start gap-3 max-w-3xl">
          <Info className="w-5 h-5 text-electric-violet shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-navy/80 space-y-1">
            <p className="font-bold text-navy">Transparent Pricing Protocol:</p>
            <p>
              In accordance with ethical clinical guidelines, definitive treatment fees are confirmed following your comprehensive intraoral assessment and digital diagnostic imaging. Feel free to enquire on WhatsApp for standard consultation estimates.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const isRec = plan.recommended;
            return (
              <div
                key={index}
                className={`card-3d relative flex flex-col justify-between ${
                  isRec ? 'border-2 border-electric-violet shadow-card-hover -translate-y-2' : ''
                }`}
              >
                {isRec && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric-violet to-electric-teal text-white text-[11px] font-heading font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/50">
                      {plan.category}
                    </span>
                    {!isRec && (
                      <span className="text-[11px] font-semibold text-electric-teal bg-electric-teal/10 px-2.5 py-0.5 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-heading font-extrabold text-navy mb-2">
                    {plan.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-navy/70 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Placeholder Box */}
                  <div className="p-4 rounded-2xl bg-pearl-200/60 border border-navy/5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-navy/50">
                      Investment Estimate
                    </span>
                    <p className="text-base font-heading font-extrabold text-electric-teal mt-0.5">
                      {plan.consultationNotice}
                    </p>
                    <p className="text-[11px] text-navy/50 mt-1">
                      Enquire via WhatsApp for indicative baseline fees
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy/60">
                      What is Included:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-navy/80">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-electric-teal shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Enquiry Button */}
                <div className="pt-4 border-t border-navy/5">
                  <WhatsAppButton
                    serviceName={plan.serviceName}
                    variant={plan.accent}
                    size="md"
                    className="w-full text-center"
                    label="Enquire on WhatsApp"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-electric-violet">
            Comparison Guide
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Service Features & Diagnostic Inclusions
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-navy/10 overflow-hidden shadow-card-elevated">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-pearl-200/80 border-b border-navy/10 text-navy font-heading font-bold">
                  <th className="p-4 sm:p-5">Clinical Service</th>
                  <th className="p-4 sm:p-5">Digital Diagnostics</th>
                  <th className="p-4 sm:p-5">Painless Anesthesia</th>
                  <th className="p-4 sm:p-5">Aftercare Kit</th>
                  <th className="p-4 sm:p-5 text-right">Consultation Booking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5 text-navy/80">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy">General Hygiene & Scaling</td>
                  <td className="p-4 sm:p-5 text-emerald-600">Included (Intraoral)</td>
                  <td className="p-4 sm:p-5">Topical Gel (if needed)</td>
                  <td className="p-4 sm:p-5">Hygiene Chart</td>
                  <td className="p-4 sm:p-5 text-right">
                    <WhatsAppButton serviceName="General Hygiene & Scaling" size="sm" variant="teal" showIcon={false} label="WhatsApp" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy">Teeth Whitening LED</td>
                  <td className="p-4 sm:p-5 text-emerald-600">Digital Shade Match</td>
                  <td className="p-4 sm:p-5">Non-invasive</td>
                  <td className="p-4 sm:p-5">Desensitizing Gel</td>
                  <td className="p-4 sm:p-5 text-right">
                    <WhatsAppButton serviceName="Teeth Whitening" size="sm" variant="violet" showIcon={false} label="WhatsApp" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy">Rotary Root Canal</td>
                  <td className="p-4 sm:p-5 text-emerald-600">Digital Radiograph & Apex Scan</td>
                  <td className="p-4 sm:p-5 text-emerald-600">Profound Local Numbing</td>
                  <td className="p-4 sm:p-5">Post-Op Prescription</td>
                  <td className="p-4 sm:p-5 text-right">
                    <WhatsAppButton serviceName="Root Canal Treatment" size="sm" variant="coral" showIcon={false} label="WhatsApp" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy">Dental Implants</td>
                  <td className="p-4 sm:p-5 text-emerald-600">3D CBCT Volumetric Scan</td>
                  <td className="p-4 sm:p-5 text-emerald-600">Surgical Local Block</td>
                  <td className="p-4 sm:p-5">Complete Healing Pack</td>
                  <td className="p-4 sm:p-5 text-right">
                    <WhatsAppButton serviceName="Dental Implants" size="sm" variant="teal" showIcon={false} label="WhatsApp" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-navy">Clear Aligners / Braces</td>
                  <td className="p-4 sm:p-5 text-emerald-600">3D Simulation Scan</td>
                  <td className="p-4 sm:p-5">Non-invasive</td>
                  <td className="p-4 sm:p-5">Aligner Case & Retainers</td>
                  <td className="p-4 sm:p-5 text-right">
                    <WhatsAppButton serviceName="Clear Aligners" size="sm" variant="violet" showIcon={false} label="WhatsApp" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
