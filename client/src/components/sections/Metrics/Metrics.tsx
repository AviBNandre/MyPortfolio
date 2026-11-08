import React from 'react';

export const Metrics: React.FC = () => {
  const metrics = [
    { value: '400+', label: 'DSA Problems Solved', sub: 'LeetCode & GeeksforGeeks', gradient: 'from-indigo-400 to-cyan-400' },
    { value: '8.55 / 10', label: 'Engineering CGPA', sub: 'SPPU Computer Engineering', gradient: 'from-emerald-400 to-teal-400' },
    { value: 'Full Stack', label: 'MERN & Spring Boot', sub: 'REST APIs & WebRTC P2P', gradient: 'from-cyan-400 to-blue-400' },
    { value: 'Remote', label: 'Internship Experience', sub: 'Techno Hacks EduTech', gradient: 'from-amber-400 to-orange-400' }
  ];

  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl border text-center transition-all hover:scale-105 bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800"
        >
          <p className={`text-3xl font-extrabold bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent`}>{m.value}</p>
          <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{m.label}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">{m.sub}</p>
        </div>
      ))}
    </section>
  );
};
