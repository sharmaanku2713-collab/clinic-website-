import React, { useState } from 'react';
import { 
  ChevronDown, 
  CheckCircle2 
} from 'lucide-react';
import { WhatsAppButton } from '../components/common/WhatsAppButton';

export const PatientGuidePage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const guideSections = [
    {
      title: "Before Your Appointment",
      tips: [
        "Eat a light, nutritious meal prior to routine visits unless fasting has been explicitly instructed.",
        "Compile a list of any routine medications, allergies, or underlying medical conditions.",
        "Have any previous dental X-rays or digital files ready to send via WhatsApp or bring in person."
      ]
    },
    {
      title: "During Your Visit",
      tips: [
        "Arrive 5–10 minutes early to relax in our pearl-white consultation lounge.",
        "Experience painless digital intraoral photography where you can see every detail on-screen.",
        "Feel free to ask questions about any treatment step. We pride ourselves on unhurried consultations."
      ]
    },
    {
      title: "Aftercare & Recovery Support",
      tips: [
        "Follow your printed or digital post-care instructions carefully.",
        "Avoid chewing on numb areas until local anesthesia wears off completely.",
        "Message our WhatsApp number if any unexpected sensitivity or question arises."
      ]
    }
  ];

  const generalFaqs = [
    {
      category: "Appointments & WhatsApp",
      q: "Why do you use WhatsApp for booking?",
      a: "WhatsApp enables immediate, direct, two-way communication without rigid web forms or delayed emails. You can ask preliminary questions, share past records, and pick convenient time slots with real-time feedback from our clinic staff."
    },
    {
      category: "Appointments & WhatsApp",
      q: "Can I reschedule or cancel via WhatsApp?",
      a: "Yes. Simply send a message to our WhatsApp number (+91 9352089550) at least 24 hours in advance, and our reception will happily adjust your reservation."
    },
    {
      category: "Clinical Safety",
      q: "What sterilization protocols are practiced at the clinic?",
      a: "We adhere strictly to international hospital-grade sterilization protocols. All instruments are cleaned in an ultrasonic cleaner, vacuum sealed in medical pouches, and autoclaved using Class-B sterilization with routine biological spore test monitoring."
    },
    {
      category: "Clinical Safety",
      q: "Are dental X-rays safe during routine exams?",
      a: "Our clinic utilizes digital radiography which reduces radiation exposure by up to 80% compared to traditional dental X-ray films. Lead aprons and thyroid collars are always provided."
    },
    {
      category: "Pain & Anxiety",
      q: "I have severe dental anxiety. How do you help nervous patients?",
      a: "Dental anxiety is very common, and we treat every nervous patient with patience, respect, and zero judgment. We explain every step before doing it, agree on a 'stop hand signal', and use ultra-gentle topical numbing so you are always in control."
    },
    {
      category: "Payment & Pricing",
      q: "How are consultation fees paid?",
      a: "We accept all major standard payment methods including UPI, Google Pay, PhonePe, Paytm, debit cards, credit cards, and cash upon completion of your visit."
    }
  ];

  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-violet/10 text-electric-violet text-xs font-heading font-bold uppercase tracking-wider">
            Patient Companion
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Patient Guide & Clinical FAQs
          </h1>
          <p className="text-base sm:text-lg text-navy/70 leading-relaxed">
            Everything you need to know for a comfortable, seamless visit. We believe educated patients make the most confident oral health decisions.
          </p>
        </div>
      </div>

      {/* 3 Step Visit Guidelines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guideSections.map((sec, idx) => (
            <div key={idx} className="card-3d space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-electric-teal/15 text-electric-teal flex items-center justify-center font-heading font-extrabold text-base">
                0{idx + 1}
              </div>
              <h2 className="text-xl font-heading font-bold text-navy">{sec.title}</h2>
              <ul className="space-y-3 pt-2">
                {sec.tips.map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy/75 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-electric-teal shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Comprehensive FAQs Accordion */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-electric-teal">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-heading font-extrabold text-navy">
            Clear Answers to Your Common Queries
          </h2>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl border border-navy/10 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:px-6 sm:py-4 text-left flex items-center justify-between gap-3 font-heading font-bold text-navy text-sm sm:text-base hover:text-electric-teal transition-colors"
                >
                  <div className="space-y-0.5 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-electric-violet block">
                      {faq.category}
                    </span>
                    <span className="break-words">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-navy/40 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-electric-teal' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-5 text-xs sm:text-sm text-navy/70 border-t border-navy/5 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">Have a Specific Question?</h3>
          <p className="text-pearl/70 text-xs sm:text-sm max-w-lg mx-auto">
            Our clinical team is always ready to answer your inquiries directly on WhatsApp.
          </p>
          <div className="pt-2">
            <WhatsAppButton variant="teal" size="lg" label="Ask a Question on WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};
