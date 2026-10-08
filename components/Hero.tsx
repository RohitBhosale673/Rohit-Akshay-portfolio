'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-studio-900/80 border border-emerald-500/30 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {siteConfig.availabilityStatus}
            </span>
          </motion.div>

          {/* Small Studio Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-studio-400 uppercase">
              {siteConfig.heroLabel}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white max-w-5xl leading-[1.08] mb-6"
          >
            WE BUILD DIGITAL PRODUCTS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">WORK.</span>
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-studio-300 max-w-2xl font-normal leading-relaxed mb-10"
          >
            {siteConfig.heroSupportingText}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-sans font-bold text-sm uppercase tracking-wider hover:bg-studio-200 transition-all duration-200 shadow-xl shadow-white/5 hover:scale-[1.02]"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-4 h-4" />
            </Link>

            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-studio-900/90 text-white border border-white/15 font-sans font-semibold text-sm uppercase tracking-wider hover:bg-studio-800 hover:border-white/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-studio-400" />
            </Link>
          </motion.div>

          {/* Interactive Floating Project Preview Banners */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-5xl relative"
          >
            <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] bg-studio-950 border border-white/[0.08] flex flex-col justify-between p-6 sm:p-8">
                
                {/* Floating Preview Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <span className="font-mono text-xs text-studio-400">
                      rohit-akshay-studio // active-builds.env
                    </span>
                  </div>

                  <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-studio-400">
                    <span className="flex items-center gap-1.5 text-blue-400">
                      <Terminal className="w-3.5 h-3.5" /> 10 Real Projects
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" /> Production Tested
                    </span>
                  </div>
                </div>

                {/* Center Content / Floating Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto py-6">
                  <div className="p-4 rounded-xl bg-studio-900/60 border border-white/10 text-left">
                    <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider block mb-1">
                      FEATURED BUSINESS SITE
                    </span>
                    <h4 className="text-white font-bold text-sm mb-1">Hotel Jagdamba</h4>
                    <p className="text-studio-400 text-xs">Commercial responsive website with verified live deployment</p>
                  </div>

                  <div className="p-4 rounded-xl bg-studio-900/60 border border-white/10 text-left">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider block mb-1">
                      ENTERPRISE QA &amp; AUTOMATION
                    </span>
                    <h4 className="text-white font-bold text-sm mb-1">QA Testing Portfolio</h4>
                    <p className="text-studio-400 text-xs">Selenium WebDriver, TestNG, and Postman API automation</p>
                  </div>

                  <div className="p-4 rounded-xl bg-studio-900/60 border border-white/10 text-left">
                    <span className="font-mono text-[10px] text-purple-400 uppercase tracking-wider block mb-1">
                      SYSTEM APPLICATION
                    </span>
                    <h4 className="text-white font-bold text-sm mb-1">Darbar Seva Flow</h4>
                    <p className="text-studio-400 text-xs">Structured service workflows, queue pipelines &amp; management</p>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono text-studio-400">
                  <span>ROHIT × AKSHAY • FULL STACK DEVELOPMENT</span>
                  <Link
                    href="#work"
                    className="text-white hover:text-blue-400 flex items-center gap-1 transition-colors"
                  >
                    View All Projects →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
