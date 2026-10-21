export interface ClinicConfig {
  name: string;
  tagline: string;
  doctor: {
    name: string;
    qualifications: string;
    specialization: string;
    experience: string;
    bio: string;
    treatmentApproach: string;
    consultationExpectations: string[];
    portraitUrl: string;
  };
  contact: {
    address: string;
    mapQuery: string;
    phone: string;
    whatsappNumber: string; // international digits only, e.g. 919352089550
    email: string;
    openingHours: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
  };
  defaultWhatsAppMessage: string;
}

export const clinicConfig: ClinicConfig = {
  name: "[DENTAL CLINIC NAME]", // Update with your official clinic name
  tagline: "Modern Precision Dental Care & Artistry",
  doctor: {
    name: "[DOCTOR'S FULL NAME]", // e.g. Dr. Jane Doe, BDS, MDS
    qualifications: "[VERIFIED QUALIFICATIONS]", // e.g. BDS, MDS (Oral & Maxillofacial Surgery)
    specialization: "[VERIFIED SPECIALIZATION]", // e.g. Advanced Prosthodontics & Implantology
    experience: "[VERIFIED YEARS OF EXPERIENCE]", // e.g. 12+ Years Clinical Practice
    bio: "Welcome to our practice. Our clinical philosophy focuses on conservative, evidence-based dentistry combined with modern digital imaging and comfortable patient-first protocols. Every treatment plan is custom-tailored to restore optimal function, oral health, and natural facial harmony.",
    treatmentApproach: "We believe dentistry should be transparent, gentle, and digitally guided. From non-invasive diagnostics to precision restorations, every decision is made collaboratively with full patient understanding and zero guesswork.",
    consultationExpectations: [
      "Comprehensive digital oral and periodontal screening",
      "High-definition intraoral photographic assessment",
      "Transparent discussion of clinical observations and treatment options",
      "Itemized treatment roadmap with no hidden steps",
      "Personalized preventive oral hygiene counsel"
    ],
    // High-resolution professional doctor portrait placeholder
    portraitUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
  },
  contact: {
    address: "[CLINIC ADDRESS]", // Update with verified clinic street address, city & postal code
    mapQuery: "Dental+Clinic", // Query parameter for Google Maps navigation
    phone: "[CLINIC PHONE]", // Update with clinic landline / desk phone
    whatsappNumber: "919352089550", // Verified WhatsApp number for click-to-chat
    email: "[CLINIC GMAIL ADDRESS]", // e.g. clinic@gmail.com
    openingHours: {
      weekdays: "Monday – Friday: 09:30 AM – 08:00 PM",
      saturday: "Saturday: 10:00 AM – 06:00 PM",
      sunday: "Sunday: By Prior Appointment"
    }
  },
  defaultWhatsAppMessage: "Hello, I would like to book a dental appointment. Please share the available dates and timings."
};

/**
 * Builds a direct WhatsApp click-to-chat link.
 * Does NOT require any API keys, backend, or WhatsApp Business API.
 * Uses standard HTTPS https://wa.me/NUMBER?text=ENCODED_STRING
 */
export function buildWhatsAppLink(serviceName?: string, customMessage?: string): string {
  const number = clinicConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
  
  let text = clinicConfig.defaultWhatsAppMessage;
  if (customMessage) {
    text = customMessage;
  } else if (serviceName) {
    text = `Hello, I would like to enquire about a ${serviceName} appointment. Please share the available dates and pricing.`;
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export interface DentalService {
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'Sparkles' | 'ShieldCheck' | 'Activity' | 'Smile' | 'Layers' | 'Heart' | 'Cpu';
  category: string;
  accentColor: 'teal' | 'violet' | 'coral';
  candidates: string[];
  procedureSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  precautions: string[];
  pricingNote: string;
  heroImage: string;
}

export const dentalServices: DentalService[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDesc: "Comprehensive oral examinations, digital cavity diagnostics, ultrasonic scaling, and proactive preventive care.",
    fullDesc: "General dentistry forms the cornerstone of lifelong oral health. We focus on gentle routine maintenance, painless tooth-colored composite restorations, deep periodontal cleanings, and digital early-detection scans.",
    iconName: "ShieldCheck",
    category: "Preventive & Restorative",
    accentColor: "teal",
    candidates: [
      "Routine 6-month checkup and professional plaque removal",
      "Early cavity detection or tooth sensitivity to hot/cold",
      "Bleeding or swollen gums during brushing",
      "Chipped enamel needing conservative composite bonding"
    ],
    procedureSteps: [
      { title: "Digital Intraoral Scan", desc: "High-magnification visualization to examine every tooth surface and gum pocket." },
      { title: "Ultrasonic Cleaning", desc: "Non-abrasive removal of tartar, plaque, and surface staining." },
      { title: "Preventive Treatment", desc: "Application of mineralizing agent or minimally invasive restoration if needed." },
      { title: "Personalized Care Plan", desc: "Clear recommendations for home maintenance and follow-up intervals." }
    ],
    faqs: [
      { q: "How frequently should I visit for a routine checkup?", a: "For most patients, an evaluation every six months is recommended to intercept plaque buildup and small lesions before they advance." },
      { q: "Does professional ultrasonic cleaning hurt?", a: "Modern ultrasonic tips use gentle micro-vibrations and water cooling, making the procedure very comfortable with minimal or no sensitivity." }
    ],
    precautions: [
      "Avoid intensely hot or ice-cold beverages for 2 hours if sensitive scaling was performed.",
      "Maintain twice-daily brushing with a soft-bristled brush and daily flossing.",
      "Contact the clinic if sensitivity persists beyond 48 hours."
    ],
    pricingNote: "Consultation & checkup pricing confirmed upon clinical examination.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDesc: "In-office LED laser whitening and custom home brightening kits for a noticeably brighter, stain-free smile.",
    fullDesc: "Our medical-grade teeth whitening safely breaks down deep-set enamel discoloration caused by coffee, tea, smoking, or natural aging, brightening teeth several shades while protecting tooth enamel and gum integrity.",
    iconName: "Sparkles",
    category: "Aesthetic Dentistry",
    accentColor: "violet",
    candidates: [
      "Discoloration caused by dietary stains (coffee, tea, wine, spices)",
      "Smiles dulled by natural aging or smoking",
      "Patients preparing for weddings, graduations, or speaking events",
      "Anyone desiring a luminous, healthy-looking smile upgrade"
    ],
    procedureSteps: [
      { title: "Shade Analysis & Polish", desc: "Recording your baseline shade with digital shade guide and gentle surface polish." },
      { title: "Gingival Barrier Protection", desc: "Application of a protective light-cured barrier along your gum line." },
      { title: "Active Gel Activation", desc: "Application of whitening formulation activated by targeted cold LED light." },
      { title: "Fluoride Mineral Glaze", desc: "Desensitizing treatment to soothe teeth and lock in the radiant shade." }
    ],
    faqs: [
      { q: "Will teeth whitening damage my enamel?", a: "No. Professional dental whitening formulas are pH-neutral and specially formulated to lift pigment without thinning or etching healthy enamel." },
      { q: "How long will the whitening result last?", a: "Results typically last 12 to 24 months depending on dietary habits and oral hygiene routines." }
    ],
    precautions: [
      "Follow the 'White Diet' for 48 hours: avoid dark liquids, turmeric, red wine, and berries.",
      "Mild transient sensitivity may occur and usually subsides within 24 hours.",
      "Use sensitive toothpaste if advised by our clinical team."
    ],
    pricingNote: "In-office and custom tray package prices confirmed after shade consultation.",
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    shortDesc: "Painless rotary endodontics to alleviate severe toothache, save infected natural teeth, and prevent extractions.",
    fullDesc: "A root canal eliminates painful infection from deep within the dental pulp chamber. Using micro-endodontic rotary files and apex locators, we cleanse the canals thoroughly, disinfect them, and seal them with biocompatible material to preserve your natural tooth.",
    iconName: "Activity",
    category: "Endodontic Therapy",
    accentColor: "coral",
    candidates: [
      "Persistent, throbbing toothache or radiating jaw pain",
      "Prolonged sensitivity to hot or cold foods",
      "Tenderness when biting down or chewing",
      "Swelling or a small pimple on the gum adjacent to the tooth"
    ],
    procedureSteps: [
      { title: "Deep Local Anesthesia", desc: "Complete numbing ensuring the procedure is completely painless and relaxed." },
      { title: "Canal Shaping & Disinfection", desc: "Precision rotary instrumentation to remove infected pulp tissue." },
      { title: "Hermetic Canal Sealing", desc: "Filling the canal with gutta-percha and antimicrobial sealer." },
      { title: "Crown Restoration", desc: "Reinforcing the treated tooth with a custom ceramic crown for full chewing strength." }
    ],
    faqs: [
      { q: "Is a root canal painful?", a: "With modern local anesthesia and rotary technology, having a root canal feels very similar to receiving a standard dental filling." },
      { q: "Do I always need a crown after a root canal?", a: "Posterior chewing teeth typically require a crown to prevent structural fracture, while selected front teeth may only need bonding." }
    ],
    precautions: [
      "Avoid chewing hard or crunchy foods on the treated side until the permanent crown is placed.",
      "Take prescribed anti-inflammatory medication as instructed.",
      "Attend the follow-up appointment for permanent restoration."
    ],
    pricingNote: "Price varies by tooth complexity (anterior vs. molar); confirmed after digital X-ray.",
    heroImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDesc: "Permanent titanium and zirconia root replacements that look, feel, and function just like natural teeth.",
    fullDesc: "Dental implants are the gold standard for replacing missing teeth. A biocompatible fixture integrates directly into the jawbone, supporting a lifelike zirconia crown that restores 100% chewing efficiency and prevents facial bone loss.",
    iconName: "Cpu",
    category: "Implantology",
    accentColor: "teal",
    candidates: [
      "One or more missing teeth causing chewing difficulty or gaps",
      "Loose, uncomfortable dentures needing permanent stabilization",
      "Desire to preserve adjacent natural teeth without cutting them for bridges",
      "Patients with healthy jawbone and controlled systemic health"
    ],
    procedureSteps: [
      { title: "3D CBCT Bone Scan", desc: "Digital assessment of bone density, volume, and exact nerve mapping." },
      { title: "Guided Fixture Placement", desc: "Minimally invasive placement of medical-grade titanium fixture." },
      { title: "Osseointegration Phase", desc: "Natural biological fusing of implant with bone over 8 to 12 weeks." },
      { title: "Custom Zirconia Crown", desc: "Attachment of custom-milled aesthetic crown matching adjacent teeth." }
    ],
    faqs: [
      { q: "How long do dental implants last?", a: "With proper hygiene and regular checkups, dental implants can last a lifetime, exhibiting a >95% clinical success rate." },
      { q: "What if I have low bone density?", a: "Bone grafting or sinus lift procedures can regenerate sufficient bone foundation prior to or during implant placement." }
    ],
    precautions: [
      "Adhere strictly to a soft-food diet during the initial post-surgical healing phase.",
      "Do not smoke or use straws during the initial healing window.",
      "Maintain meticulous oral hygiene using soft brushes and antimicrobial rinses."
    ],
    pricingNote: "Implant brand and prosthesis pricing confirmed after digital 3D CBCT scan.",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "orthodontics",
    name: "Braces & Clear Aligners",
    shortDesc: "Virtually invisible clear aligners and modern ceramic braces to correct crowding, gaps, and bite alignment.",
    fullDesc: "Whether you prefer discreet removable clear aligners or low-friction ceramic brackets, our orthodontic solutions gently guide teeth into balanced positions, enhancing both smile aesthetics and masticatory function.",
    iconName: "Smile",
    category: "Orthodontics",
    accentColor: "violet",
    candidates: [
      "Crowded, overlapping, or rotated teeth",
      "Noticeable gaps or spacing between teeth",
      "Overbite, underbite, crossbite, or open bite issues",
      "Adults seeking discreet smile realignment without metal braces"
    ],
    procedureSteps: [
      { title: "Digital 3D Smile Simulation", desc: "Full digital intraoral scan previewing your tooth movement stage-by-stage." },
      { title: "Custom Aligner Fabrication", desc: "Precision thermoformed clear aligners designed to apply gentle forces." },
      { title: "Progressive Trays / Brackets", desc: "Trays changed every 1 to 2 weeks with periodic doctor progress reviews." },
      { title: "Retention Phase", desc: "Custom retainers to keep your newly aligned smile permanently in place." }
    ],
    faqs: [
      { q: "How many hours a day must I wear clear aligners?", a: "Aligners should be worn for 20 to 22 hours per day, removing them only for meals, brushing, and flossing." },
      { q: "Can adults get orthodontic treatment?", a: "Absolutely. More than 40% of orthodontic patients today are adults achieving their ideal smiles with discreet aligners." }
    ],
    precautions: [
      "Store aligners safely in their protective case whenever removed.",
      "Clean aligners with lukewarm water and gentle soap; never use hot water.",
      "Wear your post-treatment retainers consistently as instructed."
    ],
    pricingNote: "Custom pricing plan based on treatment duration and aligner tier after 3D scan.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry & Veneers",
    shortDesc: "Porcelain veneers, composite smile design, and gum contouring for celebrity-grade smile symmetry.",
    fullDesc: "Cosmetic dentistry blends dental science with facial aesthetics. We craft ultra-thin porcelain veneers, perform tooth sculpting, and harmonize gum contours to build confident, camera-ready smiles.",
    iconName: "Layers",
    category: "Smile Architecture",
    accentColor: "coral",
    candidates: [
      "Worn, short, or chipped front teeth",
      "Severe fluorosis or intrinsic medication stains",
      "Uneven smile line or irregular tooth proportions",
      "Gummy smile requiring subtle gum recontouring"
    ],
    procedureSteps: [
      { title: "Facial Proportion Analysis", desc: "Photographing facial aesthetics, lip line, and golden ratio smile harmony." },
      { title: "Mockup & Test Drive", desc: "Temporary prototype placed on teeth so you can preview your new smile." },
      { title: "Micro-Preparation", desc: "Conservative enamel preparation preserving maximum natural structure." },
      { title: "Bonding & Polishing", desc: "Permanent resin bonding of hand-crafted ceramic veneers." }
    ],
    faqs: [
      { q: "Do porcelain veneers look natural?", a: "Yes. High-grade dental ceramics mimic natural enamel translucency, light reflection, and subtle color gradations perfectly." },
      { q: "How long do porcelain veneers last?", a: "High-quality porcelain veneers typically last 15 to 20 years with routine dental care." }
    ],
    precautions: [
      "Avoid biting directly into very hard items like ice cubes or opening packaging with teeth.",
      "Wear a protective night guard if you have nocturnal teeth grinding habits.",
      "Visit for regular cosmetic polishing checkups."
    ],
    pricingNote: "Individual veneer and smile makeover fees confirmed after digital mockup.",
    heroImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    shortDesc: "Warm, anxiety-free dental care for children, toddlers, and teens in a playful, supportive environment.",
    fullDesc: "We specialize in making dental visits fun and fear-free for young patients. From fluoride varnish and pit & fissure sealants to baby tooth fillings and habit counseling, we help your child build a lifelong positive relationship with dental care.",
    iconName: "Heart",
    category: "Children's Dental Health",
    accentColor: "teal",
    candidates: [
      "First dental visit by child's first birthday or first tooth eruption",
      "Early childhood cavity prevention and dietary counseling",
      "Pit and fissure sealant protection on erupting permanent molars",
      "Thumb sucking or mouth breathing guidance"
    ],
    procedureSteps: [
      { title: "Friendly Introduction", desc: "Gentle 'Tell-Show-Do' method to make your child feel comfortable and safe." },
      { title: "Gentle Examination", desc: "Checking jaw growth, bite alignment, and primary tooth development." },
      { title: "Protective Sealants", desc: "Application of clear shield on deep molar grooves to prevent cavities." },
      { title: "Reward & Positive Reinforcement", desc: "Fostering pride and confidence in their dental care habits." }
    ],
    faqs: [
      { q: "Why fix cavities in baby teeth if they will fall out?", a: "Baby teeth guide permanent teeth into correct positions and are essential for chewing and speech development. Untreated infections can damage underlying permanent teeth." },
      { q: "How can I prepare my child for their first visit?", a: "Speak positively about dentists, read fun tooth books together, and avoid words like 'pain' or 'needle'." }
    ],
    precautions: [
      "Supervise daily brushing until approximately age 7 to 8.",
      "Limit sticky sugar candies and nighttime bottles containing juice or milk.",
      "Schedule preventive visits every 6 months."
    ],
    pricingNote: "Pediatric preventive checkup pricing confirmed after initial visit.",
    heroImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
  }
];

export interface PricingPlan {
  title: string;
  badge: string;
  category: string;
  accent: 'teal' | 'violet' | 'coral';
  description: string;
  consultationNotice: string;
  serviceName: string;
  features: string[];
  recommended?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    title: "Preventive Care & Hygiene",
    badge: "Essential Foundation",
    category: "General Maintenance",
    accent: "teal",
    description: "Ideal for routine oral health preservation and preventive maintenance.",
    consultationNotice: "Price confirmed after clinical examination",
    serviceName: "General Dentistry & Ultrasonic Cleaning",
    features: [
      "Comprehensive digital oral examination",
      "Ultrasonic tartar & plaque debridement",
      "High-gloss air-flow stain removal",
      "Enamel fluoride remineralization coating",
      "Personalized oral hygiene blueprint"
    ]
  },
  {
    title: "Aesthetic Radiance",
    badge: "Most Popular",
    category: "Smile Enhancement",
    accent: "violet",
    recommended: true,
    description: "Designed for immediate smile brightening and confidence elevation.",
    consultationNotice: "Price confirmed after shade consultation",
    serviceName: "Professional Teeth Whitening",
    features: [
      "Digital tooth shade baseline recording",
      "Medical-grade LED laser activation",
      "Complete gingival gum barrier isolation",
      "Anti-sensitivity post-treatment glaze",
      "Complimentary take-home touchup guidance"
    ]
  },
  {
    title: "Root Canal Therapy",
    badge: "Pain Relief",
    category: "Tooth Preservation",
    accent: "coral",
    description: "Painless micro-rotary procedure to save severely decayed natural teeth.",
    consultationNotice: "Price confirmed after digital X-ray",
    serviceName: "Root Canal Treatment",
    features: [
      "Precision digital intraoral radiograph",
      "Comfort-first profound local anesthesia",
      "Rotary micro-endodontic canal sterilization",
      "Biocompatible hermetic gutta-percha seal",
      "Option for matched ceramic crown restoration"
    ]
  },
  {
    title: "Implant Restorations",
    badge: "Permanent Replacement",
    category: "Implantology",
    accent: "teal",
    description: "Lifetime restoration of missing teeth with surgical grade precision.",
    consultationNotice: "Price confirmed after 3D CBCT scan",
    serviceName: "Dental Implants",
    features: [
      "3D CBCT volumetric bone assessment",
      "Computer-guided surgical fixture placement",
      "Premium medical-grade titanium / zirconia fixture",
      "Custom milled aesthetic abutment",
      "High-strength lifelike porcelain crown"
    ]
  },
  {
    title: "Clear Aligners & Ortho",
    badge: "Discreet Alignment",
    category: "Orthodontics",
    accent: "violet",
    description: "Modern clear aligners to fix crowding, spacing, and bite irregularities.",
    consultationNotice: "Price confirmed after 3D digital simulation",
    serviceName: "Clear Aligners & Braces",
    features: [
      "Full digital 3D intraoral simulation",
      "Custom thermoformed clear aligner series",
      "Discreet, virtually invisible daily wear",
      "Doctor monitoring & milestone reviews",
      "Final custom retention appliances included"
    ]
  },
  {
    title: "Complete Smile Makeover",
    badge: "Cosmetic Artistry",
    category: "Prosthodontics",
    accent: "coral",
    description: "Custom porcelain veneers and smile sculpting tailored to facial symmetry.",
    consultationNotice: "Price confirmed after aesthetic mockup",
    serviceName: "Cosmetic Dentistry & Porcelain Veneers",
    features: [
      "Facial proportion and lip-line digital analysis",
      "Physical 'test-drive' smile preview mockup",
      "Ultra-thin ceramic porcelain veneers",
      "Micro-conservative enamel preparation",
      "High-durability optical resin bonding"
    ]
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Interior' | 'Technology' | 'Sterilization' | 'Consultation';
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Operatory Lounge",
    category: "Clinic Interior",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    description: "Ergonomic treatment chairs with natural light and soothing acoustic ambiance."
  },
  {
    id: "gal-2",
    title: "Digital 3D Diagnostics Suite",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    description: "Low-radiation digital intraoral scanning and real-time visualization displays."
  },
  {
    id: "gal-3",
    title: "Hospital-Grade Sterilization Hub",
    category: "Sterilization",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    description: "Strict multi-stage autoclave sterilization and surgical hygiene protocol."
  },
  {
    id: "gal-4",
    title: "Private Consultation Studio",
    category: "Consultation",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    description: "Comfortable discussion suites designed for unhurried clinical counseling."
  },
  {
    id: "gal-5",
    title: "Precision Dental Artistry",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    description: "High-magnification surgical loupes and micro-restorative instruments."
  },
  {
    id: "gal-6",
    title: "Welcoming Reception & Refreshment",
    category: "Clinic Interior",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    description: "Relaxed, warm pearl-white lounge featuring calm organic botanical accents."
  }
];

export interface PatientJourneyStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export const patientJourneySteps: PatientJourneyStep[] = [
  {
    step: "01",
    title: "Direct WhatsApp Booking",
    desc: "Tap the appointment button to connect instantly with our team via WhatsApp with no forms or delays.",
    icon: "Calendar"
  },
  {
    step: "02",
    title: "Comprehensive Evaluation",
    desc: "Experience digital intraoral scanning, high-resolution imaging, and a friendly review with the doctor.",
    icon: "Search"
  },
  {
    step: "03",
    title: "Transparent Plan & Costs",
    desc: "Receive clear, itemized options tailored to your schedule and goals with complete transparency.",
    icon: "FileText"
  },
  {
    step: "04",
    title: "Gentle Care & Aftercare",
    desc: "Relax in our ergonomic chairs during treatment, followed by dedicated post-care guidance and support.",
    icon: "Smile"
  }
];
