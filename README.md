# ApexDental Studio — Premium 3D Dental Clinic Website

A modern, high-end, fully responsive multi-page digital experience for a modern dental clinic, featuring real-time 3D procedural graphics (Three.js), dimensional tactile UI elements, vivid accent palettes, and a zero-cost WhatsApp appointment system (no paid API required).

---

## 🌟 Key Highlights

- **Interactive 3D Visuals (Three.js)**:
  - Procedurally generated high-gloss enamel 3D tooth sculpture with realistic crown cusps, dual roots, transmission, clearcoat reflections, and electric teal & vivid violet translucent orbital rings.
  - Desktop pointer-responsive mouse tilt and gentle floating animation.
  - Interactive mini 3D viewers for clinical service pages.
  - Automatic WebGL detection with luxury 2.5D fallback for older devices.
  - Honors reduced-motion accessibility preferences (`prefers-reduced-motion`).

- **Unique Pearl-White & Vivid Accent Identity**:
  - Predominantly pearl-white backdrop (`#FAF9F6`) with deep navy (`#17233F`), electric teal (`#00BFA6`), vivid violet (`#7957FF`), and coral (`#FF786B`).
  - Google Fonts typography: **Sora** & **Space Grotesk** for display headlines, **Manrope** & **Inter** for body text.
  - Tactile 3D dimensional buttons with layered shadows, hover lift, press-down active states, and keyboard focus rings.

- **17 Dedicated Multi-Page Routes (React Router)**:
  1. `/` — Homepage with 3D Tooth Hero, Doctor Introduction, Featured Services, Why Choose Us, Patient Journey, Gallery Preview, FAQ, and Hours.
  2. `/about` — About the Clinic, Core Values, Digital Workflows, and Hospital-Grade Sterilization Protocols.
  3. `/doctor` — Meet the Principal Clinician, verified qualifications, clinical focus, and consultation expectations.
  4. `/services` — All Dental Services Directory with category filters.
  5. `/services/general-dentistry` — General Dentistry, Scaling & Cavity Prevention.
  6. `/services/teeth-whitening` — In-Office LED Laser Teeth Whitening.
  7. `/services/root-canal` — Painless Rotary Endodontics & Tooth Preservation.
  8. `/services/dental-implants` — Permanent Titanium/Zirconia Dental Implants.
  9. `/services/orthodontics` — Braces & Clear Aligners.
  10. `/services/cosmetic-dentistry` — Cosmetic Dentistry & Porcelain Veneers.
  11. `/services/pediatric-dentistry` — Pediatric Dentistry for Children.
  12. `/pricing` — Treatment Pricing Plans, Diagnostic Inclusions, and Service Comparison Table.
  13. `/patient-guide` — First-Time Patient Guide, Preparation Tips, and Comprehensive FAQs.
  14. `/gallery` — Clinic Photo Gallery with Category Filters (Interior, Tech, Sterilization, Consultation).
  15. `/contact` — Clinic Location, Hours, Phone, Email, Google Maps Navigation, and WhatsApp CTA.
  16. `/appointment` — Interactive WhatsApp Appointment Configurator & 4-Step Patient Flow.
  17. `/privacy` — Privacy Policy & WhatsApp Click-to-Chat Disclosure.

- **Zero-Cost WhatsApp Appointment System (No Paid API)**:
  - Connects visitors directly to the clinic's WhatsApp line: `+91 9352089550`.
  - Automatically encodes pre-filled messages mentioning the specific service.
  - Uses standard HTTPS `https://wa.me/919352089550?text=...`.
  - Zero database, zero API subscription costs, zero third-party vendor lock-in.

- **SEO & Performance Ready**:
  - Dynamic page titles and meta descriptions per route (`usePageSEO.ts`).
  - `robots.txt` and `sitemap.xml` listing all 17 routes.
  - High performance, lightweight bundle (<255 kB gzip total including Three.js).

---

## 🛠️ How to Customize Clinic Details

All clinic information, credentials, contact numbers, and pricing placeholders are centralized in a single configuration file:

👉 `src/config/clinicConfig.ts`

### 1. Update Clinic Name & Contact Info
Open `src/config/clinicConfig.ts`:
```typescript
export const clinicConfig = {
  name: "ApexDental Studio", // Replace with your clinic name
  tagline: "Modern Precision Dental Care & Artistry",
  contact: {
    address: "123 Healthcare Boulevard, Medical District, City - 400001",
    mapQuery: "Apex+Dental+Clinic+City", // For Google Maps link
    phone: "+91 98765 43210",
    whatsappNumber: "919352089550", // Digits only with country code (no '+' or spaces)
    email: "appointments@apexdental.com",
    openingHours: {
      weekdays: "Monday – Friday: 09:30 AM – 08:00 PM",
      saturday: "Saturday: 10:00 AM – 06:00 PM",
      sunday: "Sunday: By Prior Appointment"
    }
  }
};
```

### 2. Update Doctor Profile & Portrait
In `src/config/clinicConfig.ts`:
```typescript
doctor: {
  name: "Dr. Ananya Sharma",
  qualifications: "BDS, MDS (Prosthodontics & Implantology)",
  specialization: "Aesthetic Dentistry & Dental Implants",
  experience: "14+ Years Clinical Practice",
  bio: "Your custom bio text here...",
  treatmentApproach: "Your clinical approach...",
  portraitUrl: "/path/to/doctor-portrait.jpg" // Or an external image URL
}
```

### 3. Update Treatment Pricing & Services
In `src/config/clinicConfig.ts`, modify `dentalServices` and `pricingPlans` to adjust treatment descriptions, precautions, FAQs, or fees.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Privacy & Safety Guarantee

No patient data is stored or logged. Appointment enquiries are dispatched directly to WhatsApp through client-side click-to-chat hyperlinks.
