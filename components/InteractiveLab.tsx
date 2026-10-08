'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Cpu, Rotate3d, Layers, Maximize2, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

// Dynamically import AgenticFactory3D without SSR (WebGL requires client-side document & window)
const AgenticFactory3D = dynamic(
  () => import('@/components/ui/agentic-factory-3d'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-studio-950 font-mono text-xs text-studio-400">
        <span className="animate-pulse flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          INITIALIZING 3D WEBGL ENGINE...
        </span>
      </div>
    ),
  }
);

export default function InteractiveLab() {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  return (
    <section id="lab" className="relative py-24 sm:py-32 border-t border-white/[0.08] bg-studio-950/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              INTERACTIVE 3D LAB // SYSTEM ARCHITECTURE
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
              INTERACTIVE PIPELINE MACHINE
            </h2>
            <p className="text-base sm:text-lg text-studio-400 max-w-2xl font-normal leading-relaxed">
              Explore our procedural 3D workflow machine. Built with pure Three.js mathematics without external 3D models or textures. Drag to rotate 360°, inspect station cutaways, and track order journeys.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <Link
              href="/factory"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white text-studio-300 hover:text-black border border-white/10 text-xs font-mono font-medium transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>FULLSCREEN 3D LAB</span>
            </Link>
          </div>
        </div>

        {/* 3D Scene Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-black shadow-2xl overflow-hidden h-[620px] sm:h-[720px] w-full"
        >
          {/* Top Instruction Pill */}
          <div className="absolute top-4 left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-950/90 border border-white/10 text-[11px] font-mono text-studio-400 backdrop-blur-md pointer-events-none">
            <Rotate3d className="w-3.5 h-3.5 text-blue-400" />
            <span>DRAG TO ROTATE • SCROLL TO ZOOM • CLICK STATIONS</span>
          </div>

          {/* Active Station Toast */}
          {activeStation && (
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-full bg-studio-900/90 border border-blue-500/30 text-xs font-mono text-blue-300 backdrop-blur-md shadow-lg pointer-events-none">
              STATION SELECTED: <span className="font-bold uppercase text-white">{activeStation}</span>
            </div>
          )}

          {/* 3D Canvas */}
          <AgenticFactory3D
            height="100%"
            onStation={(id) => setActiveStation(id)}
          />
        </motion.div>

        {/* Architecture Spec Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs font-mono text-studio-500">
          <div className="p-4 rounded-xl bg-studio-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-1">01 / PROCEDURAL 3D</span>
            <span>Zero downloaded GLTF models or external images. 100% generated in real-time.</span>
          </div>
          <div className="p-4 rounded-xl bg-studio-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-1">02 / 5 DOCK STATIONS</span>
            <span>Engine, Admin Console, Storefront, Cabinet, and Automated Checkout.</span>
          </div>
          <div className="p-4 rounded-xl bg-studio-900/40 border border-white/[0.06]">
            <span className="text-white font-semibold block mb-1">03 / MULTI-CAMERA MODES</span>
            <span>Overview, Side, Top, Station focus, and Flight perspectives.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
