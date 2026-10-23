import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { DiagnosticSymptomChecker } from './components/DiagnosticSymptomChecker';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AboutSection } from './components/AboutSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BookingModal } from './components/BookingModal';
import { ServiceItem } from './types';
import { Phone, Calendar } from 'lucide-react';
import { WORKSHOP_INFO } from './data/mockData';
import carGarageBg from './assets/images/car_garage_blurred_windows_1790874981033.jpg';
import { WhatsAppIcon } from './utils/whatsapp';

function MainApp() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [presetBookingService, setPresetBookingService] = useState<string>('');
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const { lang, t } = useLanguage();

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPresetBookingService(serviceName);
    }
    setBookingModalOpen(true);
  };

  const handleScrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setPresetBookingService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300 relative">
      {/* Persistent Full-Time Background: Car in garage with open hood, open doors, and blurred windows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src={carGarageBg}
          alt="Performance car in garage workshop with open hood, open doors, and blurred tinted windows"
          className="w-full h-full object-cover object-center scale-[1.08] filter blur-[10px] brightness-[0.41] contrast-[1.08] saturate-[0.95]"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Subtle Dark Vignette & Gradient Overlays for High-Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/55 to-neutral-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,12,0.55)_100%)]" />
      </div>

      {/* Strict 3-Zone Top Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow relative z-10">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Core Services Section */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceForDetail(service)}
          onBookService={(serviceTitle) => handleScrollToContact(serviceTitle)}
        />

        {/* Diagnostic Triage & DTC Lookup Tool */}
        <DiagnosticSymptomChecker
          onBookWithCode={(codeInfo) => handleScrollToContact(codeInfo)}
        />

        {/* 3. Completed Projects / Gallery Section */}
        <ProjectsGallery
          onBookProjectLikeThis={(projTitle) => handleScrollToContact(`Custom build similar to: ${projTitle}`)}
        />

        {/* 4. About Us Section */}
        <AboutSection />

        {/* 5. Location & Contact Section */}
        <ContactBookingSection initialService={presetBookingService} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Detail Modal for Services */}
      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBook={(title) => handleScrollToContact(title)}
      />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        presetService={presetBookingService}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href={WORKSHOP_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2.5 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs rounded-full shadow-[0_4px_25px_rgba(52,211,153,0.4)] hover:scale-105 active:scale-95 transition-all group border border-emerald-300/40"
      >
        <WhatsAppIcon className="w-5 h-5 fill-current" />
        <span className="hidden md:inline font-sans">
          {lang === 'sq' ? 'Bisedo në WhatsApp' : lang === 'mk' ? 'Пишете на WhatsApp' : 'Chat on WhatsApp'}
        </span>
      </a>

      {/* Mobile Sticky Quick Action Bar (adheres to 15% mobile sticky cap) */}
      <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${WORKSHOP_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-neutral-950 bg-amber-400 active:bg-amber-500 text-center flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>{lang === 'sq' ? 'Telefono Servisin' : lang === 'mk' ? 'Јави се во Сервисот' : 'Call Dispatch'}</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenBooking()}
          className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-neutral-950 bg-cyan-400 active:bg-cyan-300 text-center flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>{lang === 'sq' ? 'Rezervo Kabinë' : lang === 'mk' ? 'Закажи Термин' : 'Book Bay'}</span>
        </button>
      </aside>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
