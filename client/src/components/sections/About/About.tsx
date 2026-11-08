import React from 'react';
import { Code, Layers, BrainCircuit } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Professional Summary</h2>
        <h3 className="text-3xl font-bold tracking-tight">Engineering Scalable & Maintainable Code</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Bridging robust algorithmic fundamentals with production-grade full-stack implementations.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border transition-all bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Code className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold">Core DSA & Java Backend</h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Extensive problem-solving track record with 400+ problems solved across arrays, linked lists, trees, graphs, and dynamic programming. Strong grasp of OOP, Collections, JDBC, and Spring Boot architecture.
          </p>
        </div>

        <div className="p-6 rounded-2xl border transition-all bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
            <Layers className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold">MERN & Real-Time Media</h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Hands-on building end-to-end applications using React.js, Node.js, Express, and MongoDB. Experience integrating WebRTC and Socket.io for low-latency peer-to-peer video streaming and interactive communication.
          </p>
        </div>

        <div className="p-6 rounded-2xl border transition-all bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-semibold">Enterprise & Modern AI</h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Familiar with enterprise platforms including Jira, ServiceNow, SharePoint, and ERP concepts (SAP, Oracle). Self-directed exploration in prompt engineering, automated metrics, and AI-assisted workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
