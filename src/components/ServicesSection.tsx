import React from 'react';
import { Cpu, Zap, Cable, Sparkles, Sun, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onBookService }) => {
  const { t } = useLanguage();

  const getIcon = (id: string) => {
    switch (id) {
      case 'computer-diagnostics':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'alternator-starter':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'wiring-lighting-battery':
        return <Cable className="w-6 h-6 text-cyan-400" />;
      case 'ambient-lighting-starlight':
        return <Sparkles className="w-6 h-6 text-amber-300" />;
      case 'headlight-polishing':
        return <Sun className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-amber-300" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {t.services.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.services.title}
            </h2>
            <p className="mt-3 text-base text-neutral-400 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.services.standards}</span>
            <span aria-hidden="true">·</span>
            <span>{t.services.warranty}</span>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className="border border-neutral-800/90 hover:border-cyan-500/50 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.12)] group relative overflow-hidden shadow-xl"
            >
              {/* Subtle accent corner glow */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 group-hover:bg-cyan-500/10 rounded-bl-full transition-colors pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                {/* Top bar of card */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-neutral-950 border border-neutral-700/80 flex items-center justify-center shrink-0 shadow-inner group-hover:border-cyan-400/50 transition-colors">
                    {getIcon(service.id)}
                  </div>
                  
                  <div className="text-right">
                    <span className="text-xs font-mono text-neutral-400 block">
                      {t.services.turnaround}
                    </span>
                    <span className="text-xs font-semibold text-white font-mono">
                      {service.turnaroundTime.split('(')[0]}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Capabilities Checklist */}
                <ul className="mt-5 space-y-2 text-xs text-neutral-300">
                  {service.bulletPoints.slice(0, 3).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Common Symptoms preview */}
                <div className="mt-5 pt-4 border-t border-neutral-800/80 text-xs">
                  <span className="text-neutral-400 font-medium">{t.services.commonSymptoms}: </span>
                  <span className="text-neutral-300">
                    {service.commonSymptoms.slice(0, 2).join(' · ')}
                  </span>
                </div>
              </div>

              {/* Action row at bottom */}
              <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectService({
                    ...service,
                    iconName: service.id === 'computer-diagnostics' ? 'Cpu' : service.id === 'alternator-starter' ? 'Zap' : service.id === 'wiring-lighting-battery' ? 'Cable' : service.id === 'headlight-polishing' ? 'Sun' : 'Sparkles'
                  })}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>{t.services.technicalScope}</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-md transition-all shadow-sm"
                >
                  <span>{t.services.bookService}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner below services */}
        <div 
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          className="mt-12 border border-neutral-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {t.services.guaranteeTitle}
              </h4>
              <p className="text-sm text-neutral-400 mt-0.5">
                {t.services.guaranteeDesc}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onBookService(t.services.guaranteeCta)}
            className="shrink-0 px-5 py-2.5 rounded-lg text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm"
          >
            {t.services.guaranteeCta}
          </button>
        </div>

      </div>
    </section>
  );
};
