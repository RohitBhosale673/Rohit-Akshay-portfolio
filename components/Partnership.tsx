'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, CheckCircle2, Handshake } from 'lucide-react';
import { partnerReasons } from '@/data/process';
import { siteConfig } from '@/data/siteConfig';

export default function Partnership() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* WHY PARTNER WITH US Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            COLLABORATION // VALUE PROPOSITION
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            WHY PARTNER WITH US?
          </h2>
          <p className="text-base sm:text-lg text-studio-400 font-normal leading-relaxed">
            We provide structured, dependable software development without the bloat, delays, or communication hurdles of traditional outsourcing.
          </p>
        </div>

        {/* 8 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {partnerReasons.map((reason, idx) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-studio-950/60 border border-white/[0.08] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-blue-400 block mb-4">
                  {reason.number}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-xs text-studio-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NEED A DEVELOPMENT PARTNER? Dedicated Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-studio-900/90 via-studio-950 to-studio-950 border border-white/15 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider mb-6">
              <Handshake className="w-3.5 h-3.5" />
              <span>AGENCY &amp; CLIENT COLLABORATION</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-5 tracking-tight leading-tight">
              {siteConfig.partnershipHeadline}
            </h2>

            <p className="text-base sm:text-lg text-studio-300 leading-relaxed mb-8 font-normal">
              {siteConfig.partnershipText}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-studio-200 transition-all shadow-xl"
              >
                <span>DISCUSS A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-studio-900 text-white border border-white/15 font-sans font-semibold text-xs uppercase tracking-wider hover:bg-studio-800 transition-all"
              >
                <span>VIEW OUR WORK</span>
                <ArrowDown className="w-4 h-4 text-studio-400" />
              </Link>
            </div>

            <p className="font-mono text-xs text-studio-500">
              {siteConfig.partnershipSubtext}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
