import React, { useState } from 'react';
import { Mail, Phone, Briefcase, Copy, Check, Send } from 'lucide-react';
import { useClipboard } from '../../../hooks/useClipboard';
import { PERSONAL_INFO } from '../../../data/personalInfo';
import { contactService } from '../../../services/contactService';
import { ContactFormData } from '../../../types';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const { hasCopied: copiedEmail, copy: copyEmail } = useClipboard();
  const { hasCopied: copiedPhone, copy: copyPhone } = useClipboard();

  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      await contactService.sendMessage(formData);
      setFormStatus({ loading: false, success: true, error: '' });
      onNotify('Thank you! Your message has been sent to Avinash.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: '' }), 5000);
    } catch (err: any) {
      setFormStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Failed to dispatch message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Get In Touch</h2>
        <h3 className="text-3xl font-bold tracking-tight">Let's Connect & Collaborate</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Actively seeking software developer internships, full-time associate roles, and project opportunities.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border space-y-6 flex flex-col justify-between bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold">Contact Channels</h4>
              <p className="text-sm mt-1 text-slate-600 dark:text-slate-400">
                Reach out directly through email, phone, or professional platforms.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Direct Email</p>
                  <button
                    onClick={() => copyEmail(PERSONAL_INFO.email, () => onNotify('Email address copied to clipboard!'))}
                    className="text-sm font-semibold hover:text-indigo-400 transition-colors text-left truncate block max-w-full"
                    title="Click to copy email"
                  >
                    {PERSONAL_INFO.email}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Phone Number</p>
                  <button
                    onClick={() => copyPhone(PERSONAL_INFO.phone, () => onNotify('Phone number copied to clipboard!'))}
                    className="text-sm font-semibold hover:text-cyan-400 transition-colors text-left"
                    title="Click to copy phone"
                  >
                    {PERSONAL_INFO.phone}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Current Status</p>
                  <p className="text-sm font-semibold text-emerald-400">Open to Work (Batch {PERSONAL_INFO.batch})</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-3">
            <button
              onClick={() => copyEmail(PERSONAL_INFO.email, () => onNotify('Email address copied to clipboard!'))}
              className="flex-1 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
            </button>
            <button
              onClick={() => copyPhone(PERSONAL_INFO.phone, () => onNotify('Phone number copied to clipboard!'))}
              className="flex-1 py-2 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center gap-1.5 transition-colors"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied Phone' : 'Copy Phone'}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border bg-white border-slate-200 dark:bg-slate-900/60 dark:border-slate-800">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            {formStatus.error && (
              <div className="p-3 text-xs bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg">
                {formStatus.error}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-indigo-500 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-400">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. hr@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-indigo-500 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Subject / Role Opportunity</label>
              <input
                type="text"
                placeholder="e.g. Software Engineer / SDE Intern Position"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-indigo-500 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400">Message *</label>
              <textarea
                rows={4}
                required
                placeholder="Hello Avinash, we came across your portfolio and would like to discuss..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none bg-slate-50 border-slate-200 focus:border-indigo-500 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:focus:border-indigo-500 dark:text-slate-100"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-transform active:scale-98 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {formStatus.loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Direct Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
