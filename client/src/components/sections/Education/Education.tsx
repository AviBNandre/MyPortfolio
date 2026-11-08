import React from 'react';
import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../../data/personalInfo';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400">Credentials & Background</h2>
        <h3 className="text-3xl font-bold tracking-tight">Education, Certifications & Profiles</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Academic trajectory, formal training certifications, and verified competitive programming profiles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" /> Academic Records
          </h4>

          <div className="p-5 rounded-2xl border space-y-2 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-base">B.E. in Computer Engineering</h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                CGPA: {PERSONAL_INFO.cgpa}
              </span>
            </div>
            <p className="text-xs text-indigo-400 font-medium">{PERSONAL_INFO.university}</p>
            <p className="text-xs text-slate-400">2023 – Present (Graduation Batch: {PERSONAL_INFO.batch})</p>
            <p className="text-xs pt-1 leading-relaxed text-slate-600 dark:text-slate-400">
              Focusing on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and System Design principles.
            </p>
          </div>

          <div className="p-5 rounded-2xl border space-y-2 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-sm">Higher Secondary Certificate (HSC) - Science</h5>
              <span className="text-xs font-mono font-semibold text-slate-400">76.45%</span>
            </div>
            <p className="text-xs text-slate-400">Gujarat Board • 2022 – 2023</p>
          </div>

          <div className="p-5 rounded-2xl border space-y-2 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-sm">Secondary School Certificate (SSC)</h5>
              <span className="text-xs font-mono font-semibold text-slate-400">72.65%</span>
            </div>
            <p className="text-xs text-slate-400">Gujarat Board • 2021 – 2022</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
            <Award className="w-4 h-4" /> Certification & Problem Solving
          </h4>

          <div className="p-5 rounded-2xl border space-y-3 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-base">Full-Stack Web Development & DSA</h5>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                Apna College
              </span>
            </div>
            <p className="text-xs text-cyan-400 font-medium">SIGMA 7 Batch</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              Rigorous specialization in Data Structures and Algorithms with Java alongside complete MERN Stack application engineering and deployment workflows.
            </p>
          </div>

          <div className="p-5 rounded-2xl border space-y-4 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
            <h5 className="font-bold text-sm">Online Coding & Development Profiles</h5>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href={PERSONAL_INFO.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border flex items-center justify-between group transition-all bg-slate-50 border-slate-200 hover:border-amber-500 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-amber-400"
              >
                <div>
                  <p className="font-bold group-hover:text-amber-400 transition-colors">LeetCode</p>
                  <p className="text-[11px] text-slate-400">DSA Problem Solving</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.geeksforgeeks}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border flex items-center justify-between group transition-all bg-slate-50 border-slate-200 hover:border-emerald-500 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-emerald-400"
              >
                <div>
                  <p className="font-bold group-hover:text-emerald-400 transition-colors">GeeksforGeeks</p>
                  <p className="text-[11px] text-slate-400">Practice & Concepts</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border flex items-center justify-between group transition-all bg-slate-50 border-slate-200 hover:border-indigo-500 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-indigo-400"
              >
                <div>
                  <p className="font-bold group-hover:text-indigo-400 transition-colors">GitHub</p>
                  <p className="text-[11px] text-slate-400">Code Repositories</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl border flex items-center justify-between group transition-all bg-slate-50 border-slate-200 hover:border-cyan-500 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-cyan-400"
              >
                <div>
                  <p className="font-bold group-hover:text-cyan-400 transition-colors">LinkedIn</p>
                  <p className="text-[11px] text-slate-400">Professional Network</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
