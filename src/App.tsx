import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DoctorPage } from './pages/DoctorPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PricingPage } from './pages/PricingPage';
import { PatientGuidePage } from './pages/PatientGuidePage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* 1. Home */}
          <Route index element={<HomePage />} />

          {/* 2. About */}
          <Route path="about" element={<AboutPage />} />

          {/* 3. Doctor Profile */}
          <Route path="doctor" element={<DoctorPage />} />

          {/* 4. Services Overview */}
          <Route path="services" element={<ServicesOverviewPage />} />

          {/* 5-11. Individual Dental Services (explicit & dynamic routes) */}
          <Route path="services/:slug" element={<ServiceDetailPage />} />

          {/* 12. Pricing */}
          <Route path="pricing" element={<PricingPage />} />

          {/* 13. Patient Guide & FAQs */}
          <Route path="patient-guide" element={<PatientGuidePage />} />

          {/* 14. Gallery */}
          <Route path="gallery" element={<GalleryPage />} />

          {/* 15. Contact & Location */}
          <Route path="contact" element={<ContactPage />} />

          {/* 16. Appointment Details */}
          <Route path="appointment" element={<AppointmentPage />} />

          {/* 17. Privacy Policy */}
          <Route path="privacy" element={<PrivacyPolicyPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
