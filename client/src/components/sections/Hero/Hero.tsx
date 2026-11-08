import React from 'react';
import { Briefcase, Mail, CheckCircle, Copy, Check, Phone, Sparkles } from 'lucide-react';
import { useClipboard } from '../../../hooks/useClipboard';
import { PERSONAL_INFO } from '../../../data/personalInfo';

interface HeroProps {
  onNotify: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const { hasCopied: copiedEmail, copy: copyEmail } = useClipboard();

  return (
    <section id="hero" className="pt-6 sm:pt-14 pb-4 flex flex-col-reverse lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold shadow-inner">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Open to Work | {PERSONAL_INFO.batch} Batch Computer Engineering Student</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
            {PERSONAL_INFO.role}
          </h2>
        </div>

        <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400">
          Computer Engineering student at <strong>SPPU ({PERSONAL_INFO.cgpa} CGPA)</strong> with a strong foundation in <strong>DSA ({PERSONAL_INFO.dsaCount} problems solved)</strong>. Specialized in <strong>MERN stack</strong>, <strong>Java backend (Spring Boot, Hibernate, JDBC)</strong>, <strong>WebRTC</strong>, and <strong>RESTful APIs</strong>. Passionate about engineering scalable, secure, and maintainable systems.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-transform active:scale-95 flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" /> View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all active:scale-95 flex items-center gap-2 border-slate-300 bg-white hover:bg-slate-100 text-slate-800 dark:border-slate-700 dark:bg-slate-900/60 dark:hover:bg-slate-800 dark:text-slate-200"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <button
            onClick={() => copyEmail(PERSONAL_INFO.email, () => onNotify('Email address copied to clipboard!'))}
            className="px-4 py-3 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            title="Copy Email Address"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">Copy Email</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs font-medium text-slate-400">
          <span className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors">
            <Mail className="w-4 h-4 text-indigo-400" /> {PERSONAL_INFO.email}
          </span>
          <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
            <Phone className="w-4 h-4 text-cyan-400" /> {PERSONAL_INFO.phone}
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <CheckCircle className="w-4 h-4" /> {PERSONAL_INFO.location}
          </span>
        </div>
      </div>

      <div className="w-full max-w-md lg:w-96 relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-25 blur-xl animate-pulse" />
        <div className="relative rounded-2xl p-6 border shadow-2xl bg-white border-slate-200 dark:bg-slate-900/90 dark:border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-700/40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <span className="text-xs font-mono text-slate-400">avinash_profile.json</span>
          </div>

          <div className="pt-4 font-mono text-xs leading-relaxed space-y-1.5 text-left">
            <p><span className="text-cyan-400">const</span> engineer = &#123;</p>
            <p className="pl-4">name: <span className="text-emerald-400">'{PERSONAL_INFO.name}'</span>,</p>
            <p className="pl-4">batch: <span className="text-amber-400">{PERSONAL_INFO.batch}</span>,</p>
            <p className="pl-4">university: <span className="text-emerald-400">'SPPU'</span>,</p>
            <p className="pl-4">cgpa: <span className="text-teal-300">8.55</span>,</p>
            <p className="pl-4">dsaSolved: <span className="text-amber-400">'{PERSONAL_INFO.dsaCount} (LeetCode/GFG)'</span>,</p>
            <p className="pl-4">stack: [</p>
            <p className="pl-8 text-indigo-300">'Java (Spring Boot, Hibernate)',</p>
            <p className="pl-8 text-indigo-300">'MERN (React, Node, Express, Mongo)',</p>
            <p className="pl-8 text-indigo-300">'WebRTC & Socket.io'</p>
            <p className="pl-4">],</p>
            <p className="pl-4">openToWork: <span className="text-emerald-400">true</span></p>
            <p>&#125;;</p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-700/40 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" /> Ready for Hiring
            </span>
            <span className="font-mono">{PERSONAL_INFO.certification}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

