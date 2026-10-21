import { ShieldCheck, Lock, MessageCircle } from 'lucide-react';
import { clinicConfig } from '../config/clinicConfig';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-teal/10 text-electric-teal text-xs font-heading font-bold uppercase tracking-wider">
            Patient Confidentiality
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Privacy Policy & WhatsApp Communication Notice
          </h1>
          <p className="text-xs sm:text-sm text-navy/60 font-medium">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content Card */}
        <div className="card-3d space-y-8 text-navy/80 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-navy flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-electric-teal" />
              1. Our Privacy Philosophy
            </h2>
            <p>
              At {clinicConfig.name}, we believe in clinical minimalism and data privacy. We do not collect unnecessary personal information, track invasive identifiers, or sell patient data to advertisers.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-navy/10">
            <h2 className="text-xl font-heading font-bold text-navy flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-electric-violet" />
              2. WhatsApp Click-to-Chat Notice
            </h2>
            <p>
              When you click any “Book Appointment” or “Enquire on WhatsApp” button on this website, you are redirected from this website to WhatsApp (owned by Meta Platforms, Inc.).
            </p>
            <div className="p-4 rounded-2xl bg-pearl border border-navy/10 space-y-2 text-xs sm:text-sm">
              <p className="font-bold text-navy">Important to Note:</p>
              <ul className="space-y-1.5 text-navy/70">
                <li className="flex items-start gap-2">
                  <span className="text-electric-teal font-bold">•</span>
                  <span>This website does not transmit your personal data via background servers or databases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric-teal font-bold">•</span>
                  <span>The website simply provides an HTTPS click-to-chat link with a pre-filled enquiry message template.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric-teal font-bold">•</span>
                  <span>No message is ever sent automatically. You retain full control to review or edit the text and manually press send.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-electric-teal font-bold">•</span>
                  <span>WhatsApp communications are protected by WhatsApp's end-to-end encryption according to their terms of service.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-navy/10">
            <h2 className="text-xl font-heading font-bold text-navy flex items-center gap-2">
              <Lock className="w-5 h-5 text-electric-coral" />
              3. Clinical Record Confidentiality
            </h2>
            <p>
              Any clinical records, X-rays, or diagnostic impressions shared during your visit or consultation are safeguarded in strict compliance with medical confidentiality standards. Clinical records are utilized solely for diagnostic and therapeutic treatment planning by {clinicConfig.doctor.name} and authorized clinic staff.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-navy/10">
            <h2 className="text-xl font-heading font-bold text-navy">
              4. Cookies & Web Analytics
            </h2>
            <p>
              Our website uses minimal, non-tracking technical cookies necessary for responsive rendering and user interface state. We do not engage in cross-site tracking or third-party advertising profiling.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-navy/10">
            <h2 className="text-xl font-heading font-bold text-navy">
              5. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding this policy or how our clinic handles communications, please contact our administrative desk:
            </p>
            <div className="text-xs sm:text-sm text-navy/70 space-y-1">
              <p><strong>Clinic:</strong> {clinicConfig.name}</p>
              <p><strong>Email:</strong> {clinicConfig.contact.email}</p>
              <p><strong>WhatsApp / Phone:</strong> +{clinicConfig.contact.whatsappNumber}</p>
            </div>
          </section>

          {/* CTA */}
          <div className="pt-6 border-t border-navy/10 text-center">
            <WhatsAppButton variant="teal" size="md" label="Contact Privacy Desk on WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};
