import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950/60 backdrop-blur-md border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden p-0.5 ring-2 ring-red-500/40 shadow-[0_0_12px_rgba(239,68,68,0.25)] shrink-0 bg-neutral-950">
                <img
                  src="/src/assets/images/aurora_brand_logo_1791228348388.jpg"
                  alt="Aurora Auto Electrics Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-mono">
                AURORA ELECTRIC
              </span>
            </div>
            
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t.footer.warranty}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-3">
              {t.footer.capabilitiesTitle}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items[0]?.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items[1]?.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items[2]?.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items[3]?.title}</a></li>
            </ul>
          </div>

          {/* Diagnostic Resources */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-3">
              {t.footer.workshopTitle}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#diagnostics-tool" className="hover:text-cyan-400 transition-colors">{t.nav.dtcLookup}</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">{t.nav.projects}</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Workshop Contact Snapshot */}
          <div>
            <h4 className="font-mono text-white text-xs uppercase tracking-wider mb-3">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2 text-neutral-300">
              <p className="text-white font-medium">{WORKSHOP_INFO.address}</p>
              <p className="text-neutral-400">{WORKSHOP_INFO.cityStateZip}</p>
              <p>
                <a 
                  href={WORKSHOP_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 hover:text-cyan-300 text-[11px] font-mono"
                >
                  Google Maps ↗
                </a>
              </p>
              <p className="pt-1">
                <a href={`tel:${WORKSHOP_INFO.phoneRaw}`} className="text-amber-400 hover:text-amber-300 font-bold">
                  {WORKSHOP_INFO.phone}
                </a>
              </p>
              <p className="text-[11px] text-neutral-400 pt-1">
                Mon - Fri: 7:30 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="mt-12 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          
          <div className="flex items-center gap-6">
            <span>Studeniçan, Shkup (MK)</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
