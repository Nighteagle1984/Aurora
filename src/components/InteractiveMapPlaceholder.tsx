import React, { useState } from 'react';
import { Navigation, Plus, Minus, Car } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const InteractiveMapPlaceholder: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(15);
  const [mapType, setMapType] = useState<'dark-vector' | 'satellite'>('dark-vector');
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const { t } = useLanguage();

  const handleDirections = () => {
    window.open(WORKSHOP_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      className="relative rounded-2xl overflow-hidden border border-neutral-800 h-[380px] sm:h-[450px] shadow-2xl flex flex-col justify-between select-none"
    >
      
      {/* Visual Map Canvas Representation (Google Maps Dark / Satellite Vector Simulation) */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        mapType === 'satellite' 
          ? 'bg-neutral-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]'
          : 'bg-[#0b0f17]'
      }`}>
        {/* Stylized Vector Roads & Grid */}
        <svg className="w-full h-full opacity-60 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.8" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Arterial Highway */}
          <path d="M-50,280 Q200,240 500,260 T1100,220" fill="none" stroke="#334155" strokeWidth="18" />
          <path d="M-50,280 Q200,240 500,260 T1100,220" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 6" />

          {/* Circuit Parkway Access Road */}
          <path d="M280,0 L340,500" fill="none" stroke="#1e293b" strokeWidth="12" />
          <path d="M280,0 L340,500" fill="none" stroke="#0ea5e9" strokeWidth="1.2" strokeDasharray="8 4" opacity="0.6" />

          {/* Secondary Workshop Access Ave */}
          <path d="M120,240 L580,240" fill="none" stroke="#1e293b" strokeWidth="10" />
          
          {/* Industrial Park Perimeter */}
          <rect x="330" y="160" width="160" height="120" fill="#0f172a" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" rx="6" />
        </svg>

        {/* Street labels */}
        <div className="absolute top-[215px] left-8 text-[11px] font-mono font-medium text-neutral-400 rotate-[-4deg] pointer-events-none">
          RRUGA KRYESORE STUDENIÇAN
        </div>
        <div className="absolute top-16 left-[355px] text-[10px] font-mono text-cyan-400/80 rotate-[70deg] pointer-events-none">
          SHKUP - STUDENIÇAN (MK-813)
        </div>
      </div>

      {/* Map Control Bar (Top Left) */}
      <div className="relative z-10 p-3.5 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 rounded-lg p-1 shadow-lg">
          <button
            type="button"
            onClick={() => setMapType('dark-vector')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
              mapType === 'dark-vector' ? 'bg-cyan-500 text-neutral-950' : 'text-neutral-300 hover:text-white'
            }`}
          >
            {t.contact.mapView}
          </button>
          <button
            type="button"
            onClick={() => setMapType('satellite')}
            className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
              mapType === 'satellite' ? 'bg-cyan-500 text-neutral-950' : 'text-neutral-300 hover:text-white'
            }`}
          >
            {t.contact.satelliteView}
          </button>
        </div>

        <button
          type="button"
          onClick={handleDirections}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg transition-transform active:scale-95"
        >
          <Navigation className="w-3.5 h-3.5 fill-current" />
          <span>{t.contact.getDirections}</span>
        </button>
      </div>

      {/* Center Pin & Info Card */}
      <div className="relative z-20 flex flex-col items-center justify-center my-auto pointer-events-auto">
        
        {/* Interactive Pin Bubble */}
        {showTooltip && (
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="border border-cyan-500/50 rounded-xl p-3.5 shadow-2xl text-left max-w-xs mb-3 animate-fade-in"
          >
            <div className="flex items-center justify-between gap-3 mb-1">
              <span className="text-xs font-mono font-bold text-cyan-400">AURORA ELECTRIC WORKSHOP</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                {t.contact.openToday}
              </span>
            </div>
            <p className="text-xs font-medium text-white">
              {WORKSHOP_INFO.address}
            </p>
            <p className="text-[11px] text-neutral-400">
              {WORKSHOP_INFO.cityStateZip}
            </p>
            <div className="mt-2 pt-2 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-300">
              <span className="text-amber-400">{t.contact.driveInLane}</span>
              <span className="text-neutral-400">Bays 1-4</span>
            </div>
          </div>
        )}

        {/* Animated Map Pin */}
        <button
          type="button"
          onClick={() => setShowTooltip(!showTooltip)}
          className="relative group focus:outline-none"
          title="Click to toggle workshop info"
        >
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 animate-ping absolute -top-1 -left-1" />
          <div className="relative w-8 h-8 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_20px_rgba(6,182,212,0.9)] flex items-center justify-center text-neutral-950">
            <Car className="w-4 h-4 stroke-[2.5]" />
          </div>
        </button>
      </div>

      {/* Bottom Controls Bar (Zoom, Scale, Attribution) */}
      <div className="relative z-10 p-3.5 flex items-end justify-between pointer-events-auto bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent">
        <div className="text-[10px] text-neutral-400 font-mono flex items-center gap-2">
          <span>LAT: 41.9211° N</span>
          <span aria-hidden="true">·</span>
          <span>LNG: 21.5398° E</span>
          <span aria-hidden="true">·</span>
          <span>ELEV: 285 M</span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(z + 1, 19))}
            className="p-1 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-mono text-neutral-400 px-1.5">{zoomLevel}x</span>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(z - 1, 10))}
            className="p-1 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
