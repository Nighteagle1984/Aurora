import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/mockData';

export const ProjectsGallery: React.FC<{ onBookProjectLikeThis: (projectTitle: string) => void }> = ({
  onBookProjectLikeThis,
}) => {
  const [filter, setFilter] = useState<'all' | 'wiring' | 'ecu' | 'infotainment' | 'starter-alternator'>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const { t } = useLanguage();

  const filteredProjects = filter === 'all'
    ? t.projects.items
    : t.projects.items.filter((p) => p.category === filter);

  const selectedProject = selectedProjectId
    ? t.projects.items.find((p) => p.id === selectedProjectId)
    : null;

  const getImageForProject = (id: string) => {
    const found = PROJECTS.find((p) => p.id === id);
    return found ? found.image : PROJECTS[0].image;
  };

  return (
    <section id="projects" className="py-20 bg-neutral-950/50 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {t.projects.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.projects.title}
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Functional interactive filter buttons */}
          <div 
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            className="flex items-center gap-1.5 p-1 border border-neutral-800 rounded-lg overflow-x-auto max-w-full"
          >
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.projects.tabs.all}
            </button>
            <button
              type="button"
              onClick={() => setFilter('wiring')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'wiring'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.projects.tabs.wiring}
            </button>
            <button
              type="button"
              onClick={() => setFilter('ecu')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'ecu'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.projects.tabs.ecu}
            </button>
            <button
              type="button"
              onClick={() => setFilter('infotainment')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'infotainment'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.projects.tabs.infotainment}
            </button>
            <button
              type="button"
              onClick={() => setFilter('starter-alternator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filter === 'starter-alternator'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.projects.tabs.alternator}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const projectImg = getImageForProject(project.id);
            return (
              <div
                key={project.id}
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                className="border border-neutral-800 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
              >
                {/* Image Frame */}
                <div 
                  className="relative aspect-[4/3] bg-neutral-950 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProjectId(project.id)}
                >
                  <img
                    src={projectImg}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Unboxed Metadata in upper corner */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <div className="bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-neutral-300">
                      {project.vehicle}
                    </div>
                    <div className="bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800 text-cyan-400">
                      {project.turnaround}
                    </div>
                  </div>

                  {/* Bottom title preview on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-mono text-cyan-400 mb-1">{t.projects.caseStudy}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Text content under photo */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {project.briefDescription}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-800/80 text-xs text-neutral-400">
                      <span className="font-semibold text-neutral-300">{t.projects.technicalScope}: </span>
                      <span>{project.technicalDetails}</span>
                    </div>
                  </div>

                  {/* Footer action inside card */}
                  <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
                    >
                      <span>{t.projects.viewBreakdown}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookProjectLikeThis(project.title)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors"
                    >
                      {t.projects.requestSimilar}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal / Lightbox for Project Breakdown */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/75 backdrop-blur-md"
            onClick={() => setSelectedProjectId(null)}
          >
            <div 
              style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              className="border border-neutral-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedProjectId(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
                aria-label="Close Project Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-950 mb-6 border border-neutral-800">
                <img
                  src={getImageForProject(selectedProject.id)}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{selectedProject.vehicle}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.turnaround}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <div className="space-y-4 text-sm text-neutral-300">
                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {t.projects.modalSymptoms}
                  </h4>
                  <p 
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    className="p-3.5 rounded-lg border border-neutral-800"
                  >
                    {selectedProject.briefDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {t.projects.modalAnalysis}
                  </h4>
                  <p 
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    className="p-3.5 rounded-lg border border-neutral-800"
                  >
                    {selectedProject.technicalDetails}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    {t.projects.modalSolution}
                  </h4>
                  <p 
                    style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    className="p-3.5 rounded-lg border border-cyan-800/40 text-neutral-200"
                  >
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProjectId(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  {t.projects.close}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProjectId(null);
                    onBookProjectLikeThis(title);
                  }}
                  className="px-5 py-2 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-md"
                >
                  {t.projects.bookConsultation}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
