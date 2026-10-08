'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 scroll-mt-20 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              CAPABILITIES // WHAT WE BUILD
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
              WHAT WE BUILD
            </h2>
            <p className="text-base sm:text-lg text-studio-400 max-w-2xl font-normal leading-relaxed">
              Tailored digital engineering for companies, agencies, and businesses seeking dependable execution.
            </p>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white text-white hover:text-black border border-white/10 font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 self-start md:self-end"
          >
            <span>NEED SOMETHING BUILT?</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-7 rounded-2xl bg-studio-950/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:bg-studio-900/60"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-studio-500 group-hover:text-blue-400 transition-colors">
                    {service.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-studio-400 uppercase">
                    {service.category}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Short Professional Description */}
                <p className="text-xs text-studio-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Bullet Points */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-[11px] text-studio-400">
                    <span className="text-blue-400 mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
