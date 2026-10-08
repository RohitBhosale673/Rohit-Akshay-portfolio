'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/[0.08] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Statement */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              STUDIO PHILOSOPHY // ABOUT US
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1]">
              {siteConfig.aboutHeadline}
            </h2>

            <p className="text-base sm:text-lg text-studio-300 leading-relaxed font-normal mb-8">
              {siteConfig.aboutText}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] text-xs font-mono text-studio-400">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.aboutLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Globe className="w-4 h-4" />
                <span>Global Remote Delivery</span>
              </div>
            </div>
          </div>

          {/* Technical Studio Spec Sheet */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-studio-950 border border-white/10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs text-studio-400 uppercase tracking-widest">
                // STUDIO SPECIFICATIONS
              </span>
              <span className="font-mono text-xs text-emerald-400 font-bold">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-studio-500">TEAM SIZE</span>
                <span className="text-white font-bold">2 Core Full Stack Engineers</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-studio-500">PRIMARY FOCUS</span>
                <span className="text-white font-bold">Websites, Apps &amp; Custom Software</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-studio-500">DEVELOPMENT MODEL</span>
                <span className="text-white font-bold">Direct Developer Communication</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-studio-500">CODEBASE INTEGRITY</span>
                <span className="text-white font-bold">TypeScript / Modular Architecture</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/[0.04]">
                <span className="text-studio-500">QA DISCIPLINE</span>
                <span className="text-white font-bold">Selenium, TestNG &amp; Postman</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-studio-500">ENGAGEMENT TYPES</span>
                <span className="text-white font-bold">Direct Client / Agency Subcontracts</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300 leading-relaxed font-sans">
              &quot;We don&apos;t build disposable templates. We build stable, responsive digital products that solve operational needs and support your business.&quot;
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
