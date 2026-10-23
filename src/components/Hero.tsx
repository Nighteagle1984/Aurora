import React from 'react';
import { Phone, Calendar, ShieldCheck, Activity, Clock } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/images/hero_auto_electric_diagnostic_1791307803639.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-neutral-950/50 backdrop-blur-md pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-800/80">
      {/* Background ambient lighting subtle glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheadline, CTAs, Trust Proof */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Unboxed editorial domain lead-in */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white font-semibold">{t.hero.slogan}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>{t.hero.badge}</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">{t.hero.facility}</span>
            </div>

            {/* Bold Headline (Exact prompt requirement) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              {t.hero.headline}
            </h1>

            {/* Subheadline (Exact prompt requirement) */}
            <p className="mt-5 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Prominent CTAs (Exact prompt requirement) */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={`tel:${WORKSHOP_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_28px_rgba(251,191,36,0.45)]"
              >
                <Phone className="w-4 h-4 text-neutral-950 stroke-[2.5]" />
                <span>{t.hero.callNow}: {WORKSHOP_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_22px_rgba(6,182,212,0.25)]"
              >
                <Calendar className="w-4 h-4 text-cyan-400 stroke-[2.5]" />
                <span>{t.hero.getQuote}</span>
              </button>
            </div>



          </div>

          {/* Right Column: Hero Visual Asset with Technical Hud Overlays */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
              
              {/* Generated Image Asset */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-neutral-900">
                <img
                  src={heroImg}
                  alt="Master technician running advanced automotive oscilloscope and OBD-II diagnostics"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Measured Scrim for High-Contrast Text / Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                
                {/* Active Bay Status Ribbon Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <div 
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-700 text-neutral-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.hero.bayLive}</span>
                  </div>
                  <div 
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    className="px-2.5 py-1.5 rounded-md border border-neutral-700 text-cyan-300"
                  >
                    {t.hero.bayTech}
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div 
                  style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                  className="absolute bottom-4 left-4 right-4 p-4 rounded-xl border border-neutral-800 shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
                        <Activity className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.hero.scannersTitle}</div>
                        <div className="text-xs text-neutral-400">{t.hero.scannersSubtitle}</div>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-medium text-amber-400">{t.hero.sameDay}</span>
                      <div className="text-[11px] text-neutral-400">{t.hero.sameDayLabel}</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick feature callouts under image */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/80 px-3 py-2 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{t.hero.certTech}</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/60 border border-neutral-800/80 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.rapidFix}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
