'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/process';

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.08] bg-studio-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            METHODOLOGY // WORKFLOW
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            HOW WE SHIP
          </h2>
          <p className="text-base sm:text-lg text-studio-400 font-normal leading-relaxed">
            A battle-tested 7-stage engineering methodology designed to deliver resilient products on schedule.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-studio-950 border-2 border-white/20 group-hover:border-blue-400 group-hover:bg-blue-400 transition-colors" />

              <div className="p-6 sm:p-8 rounded-2xl bg-studio-950/60 border border-white/[0.08] hover:border-white/15 transition-all">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-400">
                    STEP {step.number}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-wide">
                    {step.phase}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-studio-200 mb-2">
                  {step.summary}
                </p>

                <p className="text-xs sm:text-sm text-studio-400 leading-relaxed font-normal">
                  {step.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
