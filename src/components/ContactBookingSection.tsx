import React, { useState } from 'react';
import { Phone, MapPin, Clock, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { WORKSHOP_INFO, SERVICES } from '../data/mockData';
import { InteractiveMapPlaceholder } from './InteractiveMapPlaceholder';
import { BookingFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppBookingUrl, WhatsAppIcon } from '../utils/whatsapp';

interface ContactBookingSectionProps {
  initialService?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({ initialService }) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleYear: '2020',
    vehicleMake: '',
    vehicleModel: '',
    serviceCategory: initialService || 'Computer Diagnostics & Error Clearing',
    description: '',
    preferredDate: '',
    preferredTimeSlot: 'Morning (8:00 AM - 11:30 AM)',
    urgency: 'Standard',
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceNumber: string;
    details: BookingFormData;
    whatsappUrl: string;
  } | null>(null);

  const validate = (): boolean => {
    const errors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = t.contact.validation.fullName;
    }

    if (!formData.phone.trim()) {
      errors.phone = t.contact.validation.phone;
    } else if (!/^[0-9+()\- ]{7,20}$/.test(formData.phone.trim())) {
      errors.phone = t.contact.validation.phone;
    }

    if (!formData.email.trim()) {
      errors.email = t.contact.validation.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = t.contact.validation.email;
    }

    if (!formData.vehicleMake.trim()) {
      errors.vehicleMake = t.contact.validation.make;
    }

    if (!formData.vehicleModel.trim()) {
      errors.vehicleModel = t.contact.validation.model;
    }

    if (!formData.description.trim()) {
      errors.description = t.contact.validation.description;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `AE-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const waUrl = buildWhatsAppBookingUrl({
        ref,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        vehicleYear: formData.vehicleYear,
        vehicleMake: formData.vehicleMake,
        vehicleModel: formData.vehicleModel,
        serviceCategory: formData.serviceCategory,
        preferredDate: formData.preferredDate,
        preferredTimeSlot: formData.preferredTimeSlot,
        urgency: formData.urgency,
        description: formData.description,
        lang,
      });

      setSubmittedBooking({
        referenceNumber: ref,
        details: { ...formData },
        whatsappUrl: waUrl,
      });
      setIsSubmitting(false);

      try {
        window.open(waUrl, '_blank');
      } catch {
        // Handled by UI button
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleYear: '2020',
      vehicleMake: '',
      vehicleModel: '',
      serviceCategory: 'Computer Diagnostics & Error Clearing',
      description: '',
      preferredDate: '',
      preferredTimeSlot: 'Morning (8:00 AM - 11:30 AM)',
      urgency: 'Standard',
    });
    setFormErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            {t.contact.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Location, Hours, Phone, Interactive Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact details box window */}
            <div 
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className="border border-neutral-800/90 rounded-xl p-6 space-y-5 shadow-xl"
            >
              
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase">{t.contact.phoneLabel}</span>
                  <a
                    href={`tel:${WORKSHOP_INFO.phoneRaw}`}
                    className="text-lg font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {WORKSHOP_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {t.contact.phoneSub}
                  </p>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-neutral-400 block uppercase">{t.contact.facilityLabel}</span>
                  <p className="text-sm font-semibold text-white">
                    {WORKSHOP_INFO.address}
                  </p>
                  <p className="text-xs text-neutral-300">
                    {WORKSHOP_INFO.cityStateZip}
                  </p>
                  <a
                    href={WORKSHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors mt-1.5"
                  >
                    <span>{lang === 'sq' ? 'Hap në Google Maps ↗' : 'Open in Google Maps ↗'}</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-neutral-800">
                <div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1 w-full">
                  <span className="font-mono text-neutral-400 block uppercase">{t.contact.hoursLabel}</span>
                  <div className="flex justify-between text-neutral-200">
                    <span>{t.contact.monFri.split(':')[0]}:</span>
                    <span className="font-mono font-medium">7:30 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-neutral-200">
                    <span>{t.contact.sat.split(':')[0]}:</span>
                    <span className="font-mono font-medium">8:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>{t.contact.sun.split(':')[0]}:</span>
                    <span className="text-amber-400 font-mono">{lang === 'sq' ? 'Vetëm Rimorkim Emergjent' : 'Emergency Tow-In Only'}</span>
                  </div>
                </div>
              </div>

              {/* Secure Night Key Drop Note */}
              <div className="pt-3 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.contact.keyDrop}</span>
              </div>

            </div>

            {/* Embedded Interactive Map Placeholder */}
            <div>
              <div className="text-xs font-mono text-neutral-400 mb-2 flex items-center justify-between">
                <span>{t.contact.radarKicker}</span>
                <span className="text-cyan-400">{t.contact.radarPin}</span>
              </div>
              <InteractiveMapPlaceholder />
            </div>

          </div>

          {/* Right Column: Functional Contact & Booking Form Window */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="lg:col-span-7 border border-neutral-800/90 rounded-2xl p-6 sm:p-8 relative shadow-2xl"
          >
            
            {submittedBooking ? (
              /* Success Confirmation State */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>

                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    {t.contact.successKicker}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
                    {submittedBooking.referenceNumber}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                </div>

                {/* Summary ticket */}
                <div 
                  style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                  className="border border-neutral-800 rounded-xl p-5 text-left text-xs max-w-md mx-auto space-y-3 font-mono"
                >
                  <div className="flex justify-between border-b border-neutral-850 pb-2">
                    <span className="text-neutral-400">Vehicle:</span>
                    <span className="text-neutral-200">{submittedBooking.details.vehicleYear} {submittedBooking.details.vehicleMake} {submittedBooking.details.vehicleModel}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-850 pb-2">
                    <span className="text-neutral-400">Service:</span>
                    <span className="text-neutral-200">{submittedBooking.details.serviceCategory}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-850 pb-2">
                    <span className="text-neutral-400">Contact:</span>
                    <span className="text-neutral-200">{submittedBooking.details.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Status:</span>
                    <span className="text-amber-400">{submittedBooking.details.urgency}</span>
                  </div>
                </div>

                {/* WhatsApp Action Card */}
                <div className="pt-2 max-w-md mx-auto space-y-3">
                  <a
                    href={submittedBooking.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 shadow-[0_0_24px_rgba(52,211,153,0.35)] transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>{lang === 'sq' ? 'Hap & Dërgo në WhatsApp' : lang === 'mk' ? 'Отвори & Испрати на WhatsApp' : 'Open & Send via WhatsApp'}</span>
                  </a>

                  <p className="text-[11px] text-neutral-400">
                    {lang === 'sq'
                      ? 'Një dritare e WhatsApp u hap automatikisht për ta njoftuar servisin. Nëse dritarja u bllokua, klikoni butonin e gjelbër më lart.'
                      : lang === 'mk'
                      ? 'Прозорецот на WhatsApp се отвори автоматски. Доколку беше блокиран, кликнете на зеленото копче погоре.'
                      : 'A WhatsApp window has been opened to alert our workshop. If it was blocked, click the green button above.'}
                  </p>
                </div>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors"
                  >
                    {t.contact.submitAnother}
                  </button>
                </div>
              </div>
            ) : (
              /* Booking & Inquiry Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                    {t.contact.formKicker}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {t.contact.formTitle}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {t.contact.formSub}
                  </p>
                </div>

                {/* Urgency selector */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-2">
                    {t.contact.vehicleStatus}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { key: 'Standard', label: t.contact.statusStandard },
                      { key: 'Urgent (Vehicle Dead/Non-Drivable)', label: t.contact.statusUrgent },
                      { key: 'Pre-Purchase Check', label: t.contact.statusPrePurchase },
                    ].map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, urgency: item.key as any })}
                        className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                          formData.urgency === item.key
                            ? 'bg-neutral-800 border-cyan-400 text-white shadow-sm'
                            : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Vehicle Year, Make, Model row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.year} *
                    </label>
                    <select
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      style={{ colorScheme: 'dark', backgroundColor: '#0a0a0c', color: '#f3f4f6' }}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                    >
                      {Array.from({ length: 35 }, (_, i) => 2026 - i).map((yr) => (
                        <option 
                          key={yr} 
                          value={yr}
                          className="bg-neutral-900 text-neutral-100 py-1"
                          style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                        >
                          {yr}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.make} *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. BMW, Porsche, Audi"
                      value={formData.vehicleMake}
                      onChange={(e) => {
                        setFormData({ ...formData, vehicleMake: e.target.value });
                        if (formErrors.vehicleMake) setFormErrors({ ...formErrors, vehicleMake: undefined });
                      }}
                      className={`w-full bg-neutral-950 border ${
                        formErrors.vehicleMake ? 'border-rose-500' : 'border-neutral-800'
                      } focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none`}
                    />
                    {formErrors.vehicleMake && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.vehicleMake}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.model} *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. M3, 911, RS6"
                      value={formData.vehicleModel}
                      onChange={(e) => {
                        setFormData({ ...formData, vehicleModel: e.target.value });
                        if (formErrors.vehicleModel) setFormErrors({ ...formErrors, vehicleModel: undefined });
                      }}
                      className={`w-full bg-neutral-950 border ${
                        formErrors.vehicleModel ? 'border-rose-500' : 'border-neutral-800'
                      } focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none`}
                    />
                    {formErrors.vehicleModel && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.vehicleModel}</p>
                    )}
                  </div>
                </div>

                {/* Service Requested */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    {t.contact.serviceCategory} *
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    style={{ colorScheme: 'dark', backgroundColor: '#0a0a0c', color: '#f3f4f6' }}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none"
                  >
                    {t.services.items.map((s) => (
                      <option 
                        key={s.id} 
                        value={s.title}
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {s.title}
                      </option>
                    ))}
                    <option 
                      value="Parasitic Battery Drain Inspection"
                      className="bg-neutral-900 text-neutral-100 py-1"
                      style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                    >
                      {lang === 'sq' ? 'Inspektim i Shkarkimit Parazitar të Baterisë' : lang === 'mk' ? 'Инспекција за Паразитно Празнење на Акумулатор' : 'Parasitic Battery Drain Inspection'}
                    </option>
                    <option 
                      value="ECU Tuning / Module Cloning"
                      className="bg-neutral-900 text-neutral-100 py-1"
                      style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                    >
                      {lang === 'sq' ? 'Klonim Moduli / Riprogramim ECU' : lang === 'mk' ? 'Клонирање Модул / ECU Програмирање' : 'ECU Tuning / Module Cloning'}
                    </option>
                    <option 
                      value="Pre-Purchase Electrical Inspection"
                      className="bg-neutral-900 text-neutral-100 py-1"
                      style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                    >
                      {lang === 'sq' ? 'Kontroll Elektrik para Blerjes' : lang === 'mk' ? 'Електрична Проверка пред Купување' : 'Pre-Purchase Electrical Inspection'}
                    </option>
                    <option 
                      value="Other Electrical Problem"
                      className="bg-neutral-900 text-neutral-100 py-1"
                      style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                    >
                      {lang === 'sq' ? 'Problem Tjetër Elektrik' : lang === 'mk' ? 'Друг Специфичен Електричен Проблем' : 'Other Electrical Problem'}
                    </option>
                  </select>
                </div>

                {/* Issue Description */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    {t.contact.symptoms} *
                  </label>
                  <textarea
                    rows={3}
                    placeholder={lang === 'sq' ? 'Përshkruani problemin (p.sh. bateria bie pas 2 ditësh, drita check engine, kodi P0562, fenerët fiken)...' : 'Describe what happens (e.g. battery dead after 2 days, code P0562, check engine light flashing, headlights flickering)...'}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (formErrors.description) setFormErrors({ ...formErrors, description: undefined });
                    }}
                    className={`w-full bg-neutral-950 border ${
                      formErrors.description ? 'border-rose-500' : 'border-neutral-800'
                    } focus:border-cyan-400 text-white rounded-lg p-3 text-xs focus:outline-none resize-none`}
                  />
                  {formErrors.description && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.description}</p>
                  )}
                </div>

                {/* Contact info: Name, Phone, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.fullName} *
                    </label>
                    <input
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: undefined });
                      }}
                      className={`w-full bg-neutral-950 border ${
                        formErrors.fullName ? 'border-rose-500' : 'border-neutral-800'
                      } focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.phone} *
                    </label>
                    <input
                      type="tel"
                      placeholder="+389 7X XXX XXX"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: undefined });
                      }}
                      className={`w-full bg-neutral-950 border ${
                        formErrors.phone ? 'border-rose-500' : 'border-neutral-800'
                      } focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.email} *
                    </label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      className={`w-full bg-neutral-950 border ${
                        formErrors.email ? 'border-rose-500' : 'border-neutral-800'
                      } focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Preferred Timing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.preferredDate}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      {t.contact.preferredTime}
                    </label>
                    <select
                      value={formData.preferredTimeSlot}
                      onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                      style={{ colorScheme: 'dark', backgroundColor: '#0a0a0c', color: '#f3f4f6' }}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                    >
                      <option 
                        value="Early Bird Drop-Off (7:30 AM - 8:30 AM)"
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {lang === 'sq' ? 'Mëngjes Herët (7:30 AM - 8:30 AM)' : lang === 'mk' ? 'Рано Наутро (7:30 - 8:30)' : 'Early Bird Drop-Off (7:30 AM - 8:30 AM)'}
                      </option>
                      <option 
                        value="Morning (8:30 AM - 11:30 AM)"
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {lang === 'sq' ? 'Paradite (8:30 AM - 11:30 AM)' : lang === 'mk' ? 'Претпладне (8:30 - 11:30)' : 'Morning (8:30 AM - 11:30 AM)'}
                      </option>
                      <option 
                        value="Afternoon (12:30 PM - 3:30 PM)"
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {lang === 'sq' ? 'Pasdite (12:30 PM - 3:30 PM)' : lang === 'mk' ? 'Попладне (12:30 - 15:30)' : 'Afternoon (12:30 PM - 3:30 PM)'}
                      </option>
                      <option 
                        value="Late Afternoon (3:30 PM - 5:30 PM)"
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {lang === 'sq' ? 'Mbrëmje (3:30 PM - 5:30 PM)' : lang === 'mk' ? 'Доцна Попладне (15:30 - 17:30)' : 'Late Afternoon (3:30 PM - 5:30 PM)'}
                      </option>
                      <option 
                        value="After-Hours Key Drop Box"
                        className="bg-neutral-900 text-neutral-100 py-1"
                        style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                      >
                        {lang === 'sq' ? 'Kuti Çelësash Jashtë Orarit' : lang === 'mk' ? 'Сандаче за Клучеви надвор од работно време' : 'After-Hours Key Drop Box'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg text-sm font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">{t.contact.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-neutral-950" />
                        <span>{t.contact.submitBtn}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* WhatsApp Notification Direct Note */}
                <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium">
                  <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                  <span>
                    {lang === 'sq'
                      ? 'Njoftim i menjëhershëm direkt në WhatsApp te stafi ynë (+389 72 554 701)'
                      : lang === 'mk'
                      ? 'Инстантно известување на WhatsApp до нашиот тим (+389 72 554 701)'
                      : 'Instant notification sent directly to our WhatsApp (+389 72 554 701)'}
                  </span>
                </div>

                {/* Privacy / terms notice */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.contact.termsNote}</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
