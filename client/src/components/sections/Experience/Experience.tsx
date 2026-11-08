import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-teal-400">Professional Journey</h2>
        <h3 className="text-3xl font-bold tracking-tight">Work Experience</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Practical development experience in collaborative software cycles and web engineering.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl border transition-all bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-700/40">
            <div>
              <h4 className="text-xl font-bold">Web Development Intern</h4>
              <p className="text-sm text-indigo-400 font-medium">Techno Hacks EduTech • Nashik, Maharashtra (Remote)</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Internship
            </span>
          </div>

          <ul className="mt-4 space-y-3">
            <li className="text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Completed comprehensive training and internship gaining hands-on experience in full-cycle software development, project implementation, systematic debugging, and structured problem-solving.
              </span>
            </li>
            <li className="text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Built and deployed MERN stack web applications using <strong>React.js, Node.js, Express.js, and MongoDB</strong> with modular REST API design and endpoint integration.
              </span>
            </li>
            <li className="text-sm flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600 dark:text-slate-300">
                Utilized Git/GitHub for version control, branching strategies, and remote peer collaboration, documenting clear technical notes and sprint status updates.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
