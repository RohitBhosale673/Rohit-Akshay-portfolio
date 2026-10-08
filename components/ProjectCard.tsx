'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onPreview, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl bg-studio-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-blue-900/10"
    >
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-studio-900 border-b border-white/[0.06]">
        {/* Subtle grid pattern background in case image loads */}
        <div className="absolute inset-0 studio-grid-bg opacity-30" />

        {/* Thumbnail Image with smooth scale on hover */}
        <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </div>

        {/* Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-studio-950/80 backdrop-blur-md border border-white/10 text-studio-300 uppercase tracking-wider font-semibold">
            {project.category}
          </span>

          {project.featured && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold uppercase tracking-widest">
              FEATURED
            </span>
          )}
        </div>

        {/* Floating Quick Preview Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px] z-20">
          <button
            onClick={() => onPreview(project)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-sans text-xs font-bold uppercase tracking-wider shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-200 hover:bg-blue-400"
          >
            <Eye className="w-4 h-4" />
            <span>QUICK PREVIEW</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Project Title & Year */}
          <div className="flex items-baseline justify-between gap-2 mb-2.5">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <span className="font-mono text-xs text-studio-500">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-studio-400 line-clamp-2 mb-5 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Verified Technologies Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-studio-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Actions Footer */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-studio-300 hover:text-white transition-colors uppercase tracking-wider group/link"
          >
            <span>CASE STUDY</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          <div className="flex items-center gap-2">
            {/* Real Live Project Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white text-studio-200 hover:text-black font-sans text-xs font-semibold transition-all duration-150 border border-white/10"
                title="Open live project in new tab"
              >
                <span>VIEW LIVE</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Real GitHub Link (Only for real repo) */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-900 hover:bg-white/15 text-studio-300 hover:text-white font-mono text-xs transition-colors border border-white/10"
                title="View GitHub repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
