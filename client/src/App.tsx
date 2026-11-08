import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';
import { Hero } from './components/sections/Hero/Hero';
import { Metrics } from './components/sections/Metrics/Metrics';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Experience } from './components/sections/Experience/Experience';
import { Education } from './components/sections/Education/Education';
import { Contact } from './components/sections/Contact/Contact';
import { useToast } from './hooks/useToast';

export const PortfolioApp: React.FC = () => {
  const { toastMessage, showToast } = useToast();

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <Toast message={toastMessage} />
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-24">
        <Hero onNotify={showToast} />
        <Metrics />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact onNotify={showToast} />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
