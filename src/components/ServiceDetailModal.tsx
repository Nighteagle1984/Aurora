import React from 'react';
import { X, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBook }) => {
  const { lang, t } = useLanguage();
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        className="border border-neutral-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span>AURORA ELECTRIC TECHNICAL SPECIFICATION</span>
          <span aria-hidden="true">·</span>
          <span>{t.services.turnaround}: {service.turnaroundTime}</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {service.title}
        </h3>

        <p className="text-sm text-neutral-300 leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        <div className="space-y-5 text-xs">
          
          {/* Engineering Protocols */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="p-4 rounded-xl border border-neutral-800"
          >
            <h4 className="font-mono text-cyan-400 uppercase tracking-wider mb-2.5">
              {lang === 'sq' ? 'Proceset & Shërbimet e Përfshira' : lang === 'mk' ? 'Процедури & Опфатени Услуги' : 'Laboratory & Diagnostic Deliverables'}
            </h4>
            <ul className="space-y-2 text-neutral-300">
              {service.bulletPoints.map((bp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{bp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Symptoms Diagnosed */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="p-4 rounded-xl border border-neutral-800"
          >
            <div className="flex items-center gap-1.5 font-mono text-amber-400 uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'sq' ? 'Simptomat Kryesore të Zgjidhura' : lang === 'mk' ? 'Симптоми и Дефекти кои ги Решаваме' : 'Target Failure Symptoms Addressed'}</span>
            </div>
            <ul className="space-y-1.5 text-neutral-300">
              {service.commonSymptoms.map((sym, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                  <span>{sym}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing indicator */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 text-xs"
          >
            <div>
              <span className="text-neutral-400 block">{lang === 'sq' ? 'Investimi Fillestar Diagnostikues:' : lang === 'mk' ? 'Почетна Инвестиција за Дијагностика:' : 'Diagnostic Base Investment:'}</span>
              <span className="font-bold text-white text-sm">{service.priceRange}</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.services.warranty}</span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-neutral-800 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white"
          >
            {t.projects.close}
          </button>
          <button
            type="button"
            onClick={() => {
              const title = service.title;
              onClose();
              onBook(title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm"
          >
            <span>{t.services.bookService}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
