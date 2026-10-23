import React, { useState, useMemo } from 'react';
import { Search, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_CODES } from '../data/mockData';
import { DiagnosticCode } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface DiagnosticSymptomCheckerProps {
  onBookWithCode: (codeInfo: string) => void;
}

export const DiagnosticSymptomChecker: React.FC<DiagnosticSymptomCheckerProps> = ({ onBookWithCode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCode, setSelectedCode] = useState<DiagnosticCode>(DIAGNOSTIC_CODES[0]);
  const { lang, t } = useLanguage();

  const filteredCodes = useMemo(() => {
    if (!searchTerm.trim()) return DIAGNOSTIC_CODES;
    const term = searchTerm.toLowerCase();
    return DIAGNOSTIC_CODES.filter(
      (c) =>
        c.code.toLowerCase().includes(term) ||
        c.description.toLowerCase().includes(term) ||
        c.system.toLowerCase().includes(term) ||
        c.likelyElectricalCause.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const getSeverityLabel = (severity: string) => {
    if (severity === 'Critical') return t.dtcChecker.severityCritical;
    if (severity === 'Moderate') return t.dtcChecker.severityModerate;
    return t.dtcChecker.severityAdvisory;
  };

  return (
    <section id="diagnostics-tool" className="py-20 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
            {t.dtcChecker.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.dtcChecker.title}
          </h2>
          <p className="mt-3 text-base text-neutral-300">
            {t.dtcChecker.subtitle}
          </p>
        </div>

        {/* Search input bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.dtcChecker.searchPlaceholder}
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className="w-full border border-neutral-700/80 focus:border-cyan-400 text-white rounded-xl pl-12 pr-14 py-3.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white px-2 py-1 rounded"
              >
                {t.dtcChecker.clear}
              </button>
            )}
          </div>
        </div>

        {/* Dual panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left panel: List of Codes / Results */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="lg:col-span-5 border border-neutral-800/90 rounded-xl p-4 divide-y divide-neutral-850 max-h-[480px] overflow-y-auto shadow-xl"
          >
            <div className="text-xs font-mono text-neutral-400 pb-3 flex items-center justify-between">
              <span>{t.dtcChecker.listTitle}</span>
              <span>{filteredCodes.length} {t.dtcChecker.matches}</span>
            </div>

            {filteredCodes.length === 0 ? (
              <div className="py-8 text-center text-sm text-neutral-400">
                <p>{t.dtcChecker.noMatchTitle} "{searchTerm}".</p>
                <p className="text-xs text-neutral-500 mt-1">{t.dtcChecker.noMatchSub}</p>
                <button
                  type="button"
                  onClick={() => onBookWithCode(`Diagnostic query: ${searchTerm}`)}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 rounded-md"
                >
                  {t.dtcChecker.noMatchBtn}
                </button>
              </div>
            ) : (
              filteredCodes.map((item) => {
                const isSelected = selectedCode.code === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => setSelectedCode(item)}
                    className={`w-full text-left py-3.5 px-3 rounded-lg transition-colors flex items-start justify-between gap-3 ${
                      isSelected ? 'bg-neutral-800/80 border-l-4 border-cyan-400 pl-3' : 'hover:bg-neutral-900/60'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-white">{item.code}</span>
                        <span className="text-[11px] text-neutral-400">· {item.system}</span>
                      </div>
                      <div className="text-xs text-neutral-300 mt-1 line-clamp-1">
                        {item.description}
                      </div>
                    </div>
                    
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded text-right shrink-0 ${
                        item.severity === 'Critical'
                          ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40'
                          : item.severity === 'Moderate'
                          ? 'text-amber-400 bg-amber-950/40 border border-amber-800/40'
                          : 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40'
                      }`}
                    >
                      {getSeverityLabel(item.severity)}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Right panel: Detailed Diagnostic Breakdown */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="lg:col-span-7 border border-neutral-800/90 rounded-xl p-6 sm:p-8 relative shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 block">{t.dtcChecker.specSheet}</span>
                <h3 className="text-2xl font-extrabold text-white font-mono mt-0.5">
                  {selectedCode.code}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-neutral-400 block">{t.dtcChecker.targetSystem}</span>
                <span className="text-xs font-medium text-neutral-200">{selectedCode.system}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  {t.dtcChecker.faultDefinition}
                </h4>
                <p className="text-base font-semibold text-white mt-1">
                  {selectedCode.description}
                </p>
              </div>

              <div 
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="border border-neutral-800 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>{t.dtcChecker.likelyCause}</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedCode.likelyElectricalCause}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  {t.dtcChecker.recommendedProtocol}
                </h4>
                <div className="p-3.5 rounded-lg bg-cyan-950/20 border border-cyan-800/30 text-xs text-neutral-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">{selectedCode.recommendedService}</span>
                    <span>
                      {lang === 'sq'
                        ? 'Përfshin kontroll të sinjalit me oshiloskop me 4 kanale, ngarkesë CAN-bus dhe raport dixhital.'
                        : lang === 'mk'
                        ? 'Вклучува испитување на сигнал со 4-канален осцилоскоп, оптоварување на CAN-bus и дигитален извештај.'
                        : 'Includes 4-channel oscilloscope signal interrogation, CAN-bus bus-load check, and digital report.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  {t.dtcChecker.triageCallout}
                </div>
                <button
                  type="button"
                  onClick={() => onBookWithCode(`${t.dtcChecker.bookTriageFor} ${selectedCode.code} (${selectedCode.description})`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 transition-colors shadow-sm whitespace-nowrap"
                >
                  <span>{t.dtcChecker.bookTriageFor} {selectedCode.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
