import React, { useState } from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../../../data/skills';
import { SkillCategory } from '../../../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Technical Competencies</h2>
        <h3 className="text-3xl font-bold tracking-tight">Categorized Skills Matrix</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Select a domain below to filter through languages, backend frameworks, databases, and enterprise toolchains.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {SKILL_CATEGORIES.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border transition-all hover:scale-[1.02] flex flex-col justify-between bg-white border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <h4 className="font-semibold text-sm">{skill.name}</h4>
                  <p className="text-xs text-indigo-400 font-mono mt-0.5">{skill.highlight}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/40 flex items-center justify-between text-xs">
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  skill.level === 'Advanced'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                }`}
              >
                {skill.level}
              </span>
              <span className="text-slate-400 capitalize text-[11px]">{skill.category.replace('-', ' ')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
