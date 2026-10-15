import React, { useState } from 'react';
import { X, Phone, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, presetService }) => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleYear: '2021',
    vehicleMake: '',
    vehicleModel: '',
    serviceCategory: presetService || t.services.items[0]?.title || 'Computer Diagnostics',
    preferredDate: '',
    issueSummary: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.vehicleMake.trim()) {
      setErrorMsg(lang === 'sq' ? 'Ju lutem plotësoni emrin, numrin e telefonit dhe markën e automjetit.' : 'Please complete your name, phone number, and vehicle make.');
      return;
    }

    const ref = `AE-BOOK-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(ref);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        className="border border-neutral-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          aria-label="Close Booking Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="py-6 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center mx-auto text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {t.bookingModal.successKicker}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {t.bookingModal.successTitle}: <span className="font-mono text-cyan-300">{submittedRef}</span>
              </h3>
              <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto">
                {t.bookingModal.successDesc}
              </p>
            </div>

            <div 
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className="border border-neutral-800 rounded-xl p-4 text-xs text-left font-mono space-y-1.5 text-neutral-300"
            >
              <div><span className="text-neutral-500">Vehicle:</span> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</div>
              <div><span className="text-neutral-500">Service:</span> {formData.serviceCategory}</div>
              <div><span className="text-neutral-500">Workshop:</span> {WORKSHOP_INFO.address}, {WORKSHOP_INFO.cityStateZip}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`tel:${WORKSHOP_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.bookingModal.callDispatch}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg"
              >
                {t.bookingModal.done}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                {t.bookingModal.kicker}
              </span>
              <h3 className="text-2xl font-bold text-white mt-0.5">
                {t.bookingModal.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {t.bookingModal.subtitle}
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {t.contact.fullName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Taylor Reed"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {t.contact.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+389 7X XXX XXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {t.contact.year}
                </label>
                <select
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                  style={{ colorScheme: 'dark', backgroundColor: '#0a0a0c', color: '#f3f4f6' }}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-2.5 py-2 text-xs focus:outline-none"
                >
                  {Array.from({ length: 30 }, (_, i) => 2026 - i).map((y) => (
                    <option 
                      key={y} 
                      value={y}
                      className="bg-neutral-900 text-neutral-100 py-1"
                      style={{ backgroundColor: '#171717', color: '#f3f4f6' }}
                    >
                      {y}
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
                  required
                  placeholder="e.g. Audi"
                  value={formData.vehicleMake}
                  onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  {t.contact.model}
                </label>
                <input
                  type="text"
                  placeholder="e.g. RS6"
                  value={formData.vehicleModel}
                  onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {t.contact.serviceCategory}
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                style={{ colorScheme: 'dark', backgroundColor: '#0a0a0c', color: '#f3f4f6' }}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg px-3 py-2 text-xs focus:outline-none"
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
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-neutral-300 mb-1">
                {t.contact.symptoms}
              </label>
              <textarea
                rows={2}
                placeholder={lang === 'sq' ? 'P.sh. nuk ndizet në mëngjes, drita check engine, zhurmë alternatori...' : 'e.g. Won\'t crank in morning, check engine code, alternator noise...'}
                value={formData.issueSummary}
                onChange={(e) => setFormData({ ...formData, issueSummary: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-400 text-white rounded-lg p-2.5 text-xs focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                <span>{t.bookingModal.submitBtn}</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.contact.termsNote}</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
