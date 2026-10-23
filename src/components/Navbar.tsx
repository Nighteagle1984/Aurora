import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, Globe } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header 
      style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      className="sticky top-0 z-50 border-b border-neutral-800/80 transition-all"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Top Bar 3-Zone Contract */}
        <div className="flex items-center justify-between h-24 sm:h-26 py-2">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3.5 sm:gap-4 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm -ml-2 sm:-ml-4"
          >
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden p-0.5 ring-2 ring-red-500/60 shadow-[0_0_24px_rgba(239,68,68,0.4)] shrink-0 group-hover:ring-cyan-400/80 group-hover:shadow-[0_0_32px_rgba(6,182,212,0.5)] transition-all duration-300 bg-neutral-950">
              <img
                src="/src/assets/images/aurora_brand_logo_1791228348388.jpg"
                alt="Aurora Auto Electrics Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors leading-none">
                AURORA ELECTRIC
              </span>
              <span className="text-xs sm:text-[13px] font-semibold tracking-widest text-neutral-400 uppercase mt-1.5 font-mono">
                {lang === 'sq' ? 'AUTO DIAGNOSTIKIM & ELEKTRIKË' : lang === 'mk' ? 'АВТО ДИЈАГНОСТИКА & ЕЛЕКТРИКА' : 'AUTO DIAGNOSTICS & WIRING'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#services"
              className="hover:text-cyan-400 transition-colors py-1 hover:underline underline-offset-8 decoration-cyan-400/50"
            >
              {t.nav.services}
            </a>
            <a
              href="#diagnostics-tool"
              className="hover:text-cyan-400 transition-colors py-1 hover:underline underline-offset-8 decoration-cyan-400/50"
            >
              {t.nav.dtcLookup}
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors py-1 hover:underline underline-offset-8 decoration-cyan-400/50"
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors py-1 hover:underline underline-offset-8 decoration-cyan-400/50"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-colors py-1 hover:underline underline-offset-8 decoration-cyan-400/50"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions + Language Selector */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher */}
            <div className="flex items-center p-1 bg-neutral-900 border border-neutral-800 rounded-lg text-xs font-mono">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-neutral-800 text-cyan-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-neutral-700 px-0.5">/</span>
              <button
                type="button"
                onClick={() => setLang('sq')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'sq'
                    ? 'bg-neutral-800 text-cyan-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Kalo në Shqip"
              >
                SQ
              </button>
              <span className="text-neutral-700 px-0.5">/</span>
              <button
                type="button"
                onClick={() => setLang('mk')}
                className={`px-2 py-1 rounded transition-colors ${
                  lang === 'mk'
                    ? 'bg-neutral-800 text-cyan-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-label="Префрли на Македонски"
              >
                MK
              </button>
            </div>

            <a
              href={`tel:${WORKSHOP_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-900 border border-neutral-700/80 hover:border-neutral-600 rounded-md transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{WORKSHOP_INFO.phone}</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-400 rounded-md transition-all shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>

          {/* Mobile triggers */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile language button */}
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'sq' : lang === 'sq' ? 'mk' : 'en')}
              className="px-2 py-1 text-xs font-mono bg-neutral-900 border border-neutral-800 text-cyan-400 rounded-md"
            >
              {lang.toUpperCase()}
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-cyan-400 rounded-md"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.bookShort}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          className="md:hidden border-t border-neutral-800 px-4 pt-3 pb-5 space-y-3"
        >
          
          {/* Mobile Language Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-neutral-850 text-xs">
            <span className="text-neutral-400">{lang === 'sq' ? 'Zgjidhni Gjuhën:' : lang === 'mk' ? 'Изберете јазик:' : 'Select Language:'}</span>
            <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-0.5 rounded-lg">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded text-xs font-mono ${lang === 'en' ? 'bg-cyan-500 text-neutral-950 font-bold' : 'text-neutral-300'}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('sq')}
                className={`px-2.5 py-1 rounded text-xs font-mono ${lang === 'sq' ? 'bg-cyan-500 text-neutral-950 font-bold' : 'text-neutral-300'}`}
              >
                SQ
              </button>
              <button
                type="button"
                onClick={() => setLang('mk')}
                className={`px-2.5 py-1 rounded text-xs font-mono ${lang === 'mk' ? 'bg-cyan-500 text-neutral-950 font-bold' : 'text-neutral-300'}`}
              >
                MK
              </button>
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-base font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900 hover:text-cyan-400"
            >
              {t.nav.services}
            </a>
            <a
              href="#diagnostics-tool"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900 hover:text-cyan-400"
            >
              {t.nav.dtcLookup}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900 hover:text-cyan-400"
            >
              {t.nav.projects}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900 hover:text-cyan-400"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-900 hover:text-cyan-400"
            >
              {t.nav.contact}
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <a
              href={`tel:${WORKSHOP_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-neutral-900 border border-neutral-700 rounded-md"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{t.hero.callNow}: {WORKSHOP_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-md shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.hero.getQuote}</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>{WORKSHOP_INFO.warranty}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
