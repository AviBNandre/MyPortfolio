import React from 'react';
import { PERSONAL_INFO } from '../../data/personalInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t py-8 text-center text-xs transition-colors border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-800 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {PERSONAL_INFO.name}. Computer Engineering, SPPU (Batch {PERSONAL_INFO.batch}).</p>
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-indigo-400 transition-colors">Back to top ↑</a>
          <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href={PERSONAL_INFO.socials.leetcode} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};
