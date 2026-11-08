import React, { useState } from 'react';
import { DollarSign, Video, Sparkles, ChevronRight, X, CheckCircle } from 'lucide-react';
import { PROJECTS_DATA } from '../../../data/projects';
import { Project } from '../../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Featured Builds</h2>
        <h3 className="text-3xl font-bold tracking-tight">Engineered Web & Real-Time Applications</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Explore production-oriented builds with modular REST architectures and real-time streaming capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((proj) => (
          <div
            key={proj.id}
            className="flex flex-col justify-between rounded-2xl border transition-all hover:-translate-y-1 duration-200 overflow-hidden shadow-lg bg-white border-slate-200 hover:border-indigo-500/50 dark:bg-slate-900/70 dark:border-slate-800 dark:hover:border-indigo-500/50"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                    {proj.id === 'wealth-finance' ? (
                      <DollarSign className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Video className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-semibold uppercase text-indigo-400">
                    {proj.category}
                  </span>
                </div>
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5" /> High Performance
                </span>
              </div>

              <h4 className="text-xl font-bold tracking-tight">{proj.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {proj.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {proj.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 border-t flex items-center justify-between text-xs font-medium border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
              <button
                onClick={() => setSelectedProject(proj)}
                className="text-indigo-400 hover:text-indigo-300 font-semibold inline-flex items-center gap-1"
              >
                View System Specs & Flow <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-slate-500 font-mono text-[11px]">Production Ready</span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl relative bg-white border-slate-200 text-slate-800 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">
                System Architecture & Overview
              </span>
              <h3 className="text-2xl font-bold mt-1 flex items-center gap-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
                {selectedProject.summary}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Key Engineering Features</h4>
              <ul className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border text-xs font-mono bg-slate-50 border-slate-200 text-cyan-800 dark:bg-slate-950 dark:border-slate-800 dark:text-cyan-300">
              <strong>Architecture Highlight:</strong> {selectedProject.metrics}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
