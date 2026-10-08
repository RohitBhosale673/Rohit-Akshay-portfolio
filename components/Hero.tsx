'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code, ShieldCheck, Sparkles, Terminal, Play, Pause } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Attempt auto-playback on client load
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center items-center overflow-hidden bg-studio-950"
    >
      {/* Animated IT Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/videos/hero-it-bg-poster.jpg"
          className="w-full h-full object-cover object-center scale-[1.02] opacity-75 mix-blend-screen transition-opacity duration-1000"
          aria-hidden="true"
        >
          <source src="/videos/hero-it-bg.webm" type="video/webm" />
          <source src="/videos/hero-it-bg.mp4" type="video/mp4" />
        </video>

        {/* Deep Cyber Vignette & Depth Mask for Crystal-Clear Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-studio-950/75 via-studio-950/50 to-studio-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,18,0.80)_75%)]" />

        {/* CRT / Cyber Scanline Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_51%)] bg-[length:100%_4px] opacity-20" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge with Duo Avatars */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-studio-900/90 border border-white/15 backdrop-blur-md mb-6 shadow-xl"
          >
            <div className="flex -space-x-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/40 shadow-sm bg-studio-800">
                <Image src="/team/rohit-bhosale.jpg" alt="Rohit Bhosale" fill className="object-cover" />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/40 shadow-sm bg-studio-800">
                <Image src="/team/akshay-shingade.jpg" alt="Akshay Shingade" fill className="object-cover" />
              </div>
            </div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              ROHIT &amp; AKSHAY • {siteConfig.availabilityStatus}
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

          {/* Founders Duo Hero Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-5xl relative"
          >
            <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 backdrop-blur-2xl shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-studio-950/90 border border-white/[0.08] grid grid-cols-1 md:grid-cols-12 items-stretch">
                
                {/* Founders Photo Column */}
                <div className="md:col-span-5 relative min-h-[380px] sm:min-h-[440px] overflow-hidden bg-studio-900 group">
                  <Image
                    src="/team/founders-team.jpg"
                    alt="Rohit Bhosale & Akshay Shingade — Full Stack Developers & Studio Founders"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-transparent to-transparent opacity-85 md:opacity-50" />
                  
                  {/* Floating Identity Tag on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-studio-950/85 border border-white/15 backdrop-blur-md shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="font-display font-bold text-sm text-white">Rohit Bhosale &amp; Akshay Shingade</p>
                        <p className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mt-0.5">Founders • Full Stack Development Team</p>
                      </div>
                      <span className="flex h-2 w-2 relative ml-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Studio Capabilities & Verification */}
                <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between text-left">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="font-mono text-xs text-studio-400 ml-2">
                        studio-founders // verified-team.env
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-md font-medium">
                      DIRECT ACCESS
                    </span>
                  </div>

                  {/* Studio Core Overview */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 font-mono text-xs text-blue-400 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      TWO DEVELOPERS • ZERO MIDDLEMEN
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      Direct Developer Partnership for Real-World Products
                    </h3>
                    <p className="text-xs sm:text-sm text-studio-300 leading-relaxed">
                      We operate without account managers, bloated agency overhead, or junior handoffs. Rohit specializes in frontend architecture and full-stack product engineering; Akshay specializes in backend logic, enterprise API testing, and test automation.
                    </p>
                  </div>

                  {/* 3 Metric Badges */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-studio-900/70 border border-white/10 text-center">
                      <span className="font-display font-extrabold text-lg sm:text-xl text-white block">10</span>
                      <span className="font-mono text-[10px] text-studio-400 uppercase">Live Projects</span>
                    </div>
                    <div className="p-3 rounded-xl bg-studio-900/70 border border-white/10 text-center">
                      <span className="font-display font-extrabold text-lg sm:text-xl text-emerald-400 block">100%</span>
                      <span className="font-mono text-[10px] text-studio-400 uppercase">Direct Access</span>
                    </div>
                    <div className="p-3 rounded-xl bg-studio-900/70 border border-white/10 text-center">
                      <span className="font-display font-extrabold text-lg sm:text-xl text-blue-400 block">Full Stack</span>
                      <span className="font-mono text-[10px] text-studio-400 uppercase">Web &amp; Software</span>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.08] text-xs font-mono text-studio-400">
                    <span>ROHIT BHOSALE × AKSHAY SHINGADE</span>
                    <Link href="#team" className="text-white hover:text-blue-400 flex items-center gap-1 transition-colors">
                      Full Profiles &amp; Stack →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Video Stream Telemetry Badge with Pause/Play Toggle */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-3">
        <button
          onClick={togglePlayback}
          type="button"
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-studio-900/80 hover:bg-studio-850 border border-white/10 hover:border-cyan-500/40 backdrop-blur-md text-[11px] font-mono text-studio-400 hover:text-white transition-all shadow-lg cursor-pointer"
          title={isPlaying ? "Pause animated IT background video" : "Play animated IT background video"}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full transition-opacity ${
                isPlaying ? 'bg-cyan-400 animate-ping opacity-75' : 'bg-amber-400 opacity-0'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 transition-colors ${
                isPlaying ? 'bg-cyan-500' : 'bg-amber-500'
              }`}
            />
          </span>
          <span className="tracking-wider">
            {isPlaying ? 'IT_STREAM // 30FPS' : 'VIDEO_PAUSED'}
          </span>
          {isPlaying ? (
            <Pause className="w-3 h-3 text-studio-400 group-hover:text-cyan-400 transition-colors" />
          ) : (
            <Play className="w-3 h-3 text-studio-400 group-hover:text-amber-400 transition-colors" />
          )}
        </button>
      </div>
    </section>
  );
}
