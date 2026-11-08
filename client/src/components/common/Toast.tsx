import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-xl shadow-2xl animate-fade-in border border-indigo-400/30">
      <CheckCircle className="w-5 h-5 text-emerald-300" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
