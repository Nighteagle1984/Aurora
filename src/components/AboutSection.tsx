import React from 'react';
import { Award, Cpu, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story, Credentials, Pillars */}
          <div className="lg:col-span-7">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {t.about.kicker}
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="mt-5 text-base text-neutral-300 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="mt-3 text-base text-neutral-300 leading-relaxed">
              {t.about.p2}
            </p>

            {/* Three Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              <div className="bg-neutral-950/90 p-4 rounded-xl border border-neutral-800">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{t.about.pillar1Title}</h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  {t.about.pillar1Desc}
                </p>
              </div>

              <div className="bg-neutral-950/90 p-4 rounded-xl border border-neutral-800">
                <div className="w-9 h-9 rounded-lg bg-amber-950/60 border border-amber-800/40 flex items-center justify-center text-amber-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{t.about.pillar2Title}</h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  {t.about.pillar2Desc}
                </p>
              </div>

              <div className="bg-neutral-950/90 p-4 rounded-xl border border-neutral-800">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{t.about.pillar3Title}</h4>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  {t.about.pillar3Desc}
                </p>
              </div>

            </div>

            {/* Accreditations list */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">{t.about.accreditations}</span>
              {WORKSHOP_INFO.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Workshop Protocol & Standards Card */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="lg:col-span-5 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>{t.about.protocolKicker}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">
              {t.about.protocolTitle}
            </h3>

            <div className="space-y-4 text-xs text-neutral-300">
              <div 
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800"
              >
                <span className="font-mono font-bold text-cyan-400 text-sm">01</span>
                <div>
                  <strong className="text-white block font-medium">{t.about.step1Title}</strong>
                  <span className="text-neutral-400">{t.about.step1Desc}</span>
                </div>
              </div>

              <div 
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800"
              >
                <span className="font-mono font-bold text-cyan-400 text-sm">02</span>
                <div>
                  <strong className="text-white block font-medium">{t.about.step2Title}</strong>
                  <span className="text-neutral-400">{t.about.step2Desc}</span>
                </div>
              </div>

              <div 
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800"
              >
                <span className="font-mono font-bold text-cyan-400 text-sm">03</span>
                <div>
                  <strong className="text-white block font-medium">{t.about.step3Title}</strong>
                  <span className="text-neutral-400">{t.about.step3Desc}</span>
                </div>
              </div>

              <div 
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="flex items-start gap-3 p-3 rounded-lg border border-neutral-800"
              >
                <span className="font-mono font-bold text-cyan-400 text-sm">04</span>
                <div>
                  <strong className="text-white block font-medium">{t.about.step4Title}</strong>
                  <span className="text-neutral-400">{t.about.step4Desc}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono">
              <span>{t.about.facilityId}</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {t.about.bayStatus}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
