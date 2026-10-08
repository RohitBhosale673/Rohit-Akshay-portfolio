'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Monitor, Smartphone, Layers, CheckCircle } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'mobile'>('desktop');
  const [useIframe, setUseIframe] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-studio-950 border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar / Chrome */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-studio-900/90">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-studio-400">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Viewport switch & Close */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Responsive preview mode toggle */}
              <div className="flex items-center p-1 rounded-lg bg-studio-950 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setViewportMode('desktop')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                    viewportMode === 'desktop'
                      ? 'bg-white/10 text-white font-bold'
                      : 'text-studio-400 hover:text-white'
                  }`}
                  title="Desktop View"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-colors ${
                    viewportMode === 'mobile'
                      ? 'bg-white/10 text-white font-bold'
                      : 'text-studio-400 hover:text-white'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-studio-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close preview modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Preview Viewport Canvas */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-studio-900/40 flex items-center justify-center">
            <div
              className={`transition-all duration-300 w-full ${
                viewportMode === 'mobile'
                  ? 'max-w-[390px] rounded-[36px] p-3 bg-black border-4 border-studio-700 shadow-2xl aspect-[9/19]'
                  : 'max-w-4xl rounded-xl overflow-hidden border border-white/10 shadow-2xl'
              }`}
            >
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] bg-studio-950 flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={1200}
                  height={750}
                  className="w-full h-auto object-contain max-h-[65vh]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar: Details & Direct CTAs */}
          <div className="px-5 py-4 border-t border-white/10 bg-studio-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:w-auto">
              <p className="text-xs text-studio-400 max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-studio-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Link
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-studio-800 text-white hover:bg-studio-700 border border-white/10 text-xs font-semibold font-mono tracking-wider transition-colors"
              >
                CASE STUDY
              </Link>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-black hover:bg-blue-400 hover:text-black text-xs font-bold font-sans uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>OPEN FULL PROJECT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.githubUrl && !project.liveUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-studio-800 text-white hover:bg-white hover:text-black text-xs font-bold font-mono tracking-wider transition-colors border border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>VIEW SOURCE ↗</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
