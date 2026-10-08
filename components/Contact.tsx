'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please share a brief summary of your project or requirements.');
      return;
    }

    setStatus('loading');

    // Simulate reliable submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'Website',
        message: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or reach out via direct link.');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/[0.08] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                GET IN TOUCH // INQUIRIES
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-tight">
                LET&apos;S BUILD SOMETHING.
              </h2>

              <p className="text-base text-studio-300 leading-relaxed font-normal mb-8">
                Have a new project, an existing product that needs active development, or need an engineering team to partner with your agency? Send us a message and we&apos;ll respond with technical clarity.
              </p>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-studio-950/80 border border-white/10 mb-8 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="text-xs">
                  <span className="font-mono text-emerald-400 font-semibold block uppercase">
                    CURRENT AVAILABILITY
                  </span>
                  <span className="text-studio-400">
                    Accepting new client builds and development partnerships
                  </span>
                </div>
              </div>
            </div>

            {/* Social / Direct Connect */}
            <div className="pt-8 border-t border-white/[0.08] space-y-3">
              <span className="font-mono text-xs text-studio-500 uppercase tracking-widest block">
                // DIRECT PROFILES
              </span>
              <div className="flex flex-wrap gap-3">
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-studio-900 hover:bg-white text-studio-400 hover:text-black border border-white/10 text-xs font-mono transition-colors"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-studio-950/80 border border-white/10 shadow-2xl backdrop-blur-xl">
              
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Message Received!
                  </h3>
                  <p className="text-sm text-studio-300 max-w-md mx-auto mb-8">
                    Thank you for reaching out. We will review your project details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-studio-200 transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block font-mono text-xs text-studio-400 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-studio-900/90 border border-white/10 text-white placeholder-studio-600 text-sm focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block font-mono text-xs text-studio-400 mb-2 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-studio-900/90 border border-white/10 text-white placeholder-studio-600 text-sm focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company / Organization */}
                    <div>
                      <label className="block font-mono text-xs text-studio-400 mb-2 uppercase tracking-wider">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Studio Name"
                        className="w-full px-4 py-3 rounded-xl bg-studio-900/90 border border-white/10 text-white placeholder-studio-600 text-sm focus:outline-none focus:border-blue-500/60 transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block font-mono text-xs text-studio-400 mb-2 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-studio-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/60 transition-colors cursor-pointer"
                      >
                        {siteConfig.contactTypes.map((type) => (
                          <option key={type} value={type} className="bg-studio-950 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs text-studio-400 mb-2 uppercase tracking-wider">
                      Project Overview &amp; Goals *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the project goals, timeline, or technologies you have in mind..."
                      className="w-full px-4 py-3 rounded-xl bg-studio-900/90 border border-white/10 text-white placeholder-studio-600 text-sm focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-blue-400 hover:text-black transition-all duration-200 shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span className="font-mono">TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>START A CONVERSATION</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
