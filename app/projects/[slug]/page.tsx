import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Monitor, Smartphone, Layers, ShieldCheck } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundMotion from '@/components/BackgroundMotion';
import CustomCursor from '@/components/CustomCursor';

interface Props {
  params: {
    slug: string;
  };
}

// Generate static params for all 10 projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// Generate project-specific metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: 'Project Not Found | Rohit × Akshay Studio',
    };
  }

  return {
    title: `${project.title} — Case Study | Rohit × Akshay`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Built by Rohit Bhosale & Akshay Shingade`,
      description: project.description,
      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 750,
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-studio-950 text-white selection:bg-blue-600/30 selection:text-white">
      <BackgroundMotion />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-studio-900/80 hover:bg-white text-studio-400 hover:text-black border border-white/10 text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO SELECTED WORK</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-white/[0.08] pb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider font-semibold">
                {project.category}
              </span>
              <span className="font-mono text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-studio-300">
                {project.status}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-studio-300 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-blue-400 hover:text-black transition-colors shadow-lg"
              >
                <span>OPEN LIVE PROJECT</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-studio-900 text-white hover:bg-white hover:text-black border border-white/15 font-mono text-xs font-semibold tracking-wider transition-colors shadow-lg"
              >
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Hero Browser Frame Mockup */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/15 bg-studio-900/60 shadow-2xl p-2 sm:p-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-studio-950/80 rounded-t-xl border-b border-white/[0.08]">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <div className="mx-auto font-mono text-xs text-studio-400">
              {project.liveUrl || project.githubUrl}
            </div>
          </div>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-studio-950 rounded-b-xl overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Two-Column Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div>
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block mb-3">
                // PROJECT ARCHITECTURE &amp; CONTEXT
              </span>
              <h2 className="font-display font-bold text-2xl text-white mb-4">
                Overview &amp; Implementation
              </h2>
              <p className="text-sm sm:text-base text-studio-300 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block mb-3">
                // DELIVERABLE CAPABILITIES
              </span>
              <h2 className="font-display font-bold text-2xl text-white mb-6">
                Key Features &amp; Functionality
              </h2>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-studio-900/40 border border-white/[0.06] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-studio-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Gallery Screenshot */}
            {project.gallery.length > 1 && (
              <div>
                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block mb-3">
                  // SCREENSHOT GALLERY
                </span>
                <h2 className="font-display font-bold text-2xl text-white mb-6">
                  Detailed Views &amp; States
                </h2>
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-studio-900/40 p-2 sm:p-4">
                  <div className="relative w-full aspect-[16/10] bg-studio-950 rounded-xl overflow-hidden">
                    <Image
                      src={project.gallery[1]}
                      alt={`${project.title} detail view`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Meta Spec Sheet */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-studio-900/40 border border-white/10 space-y-6">
              
              <div>
                <span className="font-mono text-xs text-studio-500 uppercase tracking-widest block mb-1">
                  OUR CONTRIBUTION
                </span>
                <p className="font-sans font-bold text-sm text-white">
                  {project.role}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-xs text-studio-500 uppercase tracking-widest block mb-1">
                  YEAR COMPLETED
                </span>
                <p className="font-mono text-sm text-white">
                  {project.year}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-xs text-studio-500 uppercase tracking-widest block mb-3">
                  CONFIRMED TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-studio-950 border border-white/10 text-studio-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <span className="font-mono text-xs text-studio-500 uppercase tracking-widest block mb-1">
                  CORE TEAM LEAD
                </span>
                <p className="font-sans text-xs text-studio-300">
                  Rohit Bhosale &amp; Akshay Shingade
                </p>
              </div>

              {/* Direct Link Action */}
              <div className="pt-4 border-t border-white/[0.08]">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white text-black font-bold font-sans text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-blue-400 hover:text-black transition-colors"
                  >
                    <span>OPEN LIVE PROJECT ↗</span>
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-studio-800 text-white font-bold font-mono text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-white hover:text-black border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE ↗</span>
                  </a>
                ) : null}
              </div>

            </div>

            {/* Inquire on similar project */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20">
              <h4 className="font-display font-bold text-base text-white mb-2">
                Need a similar system?
              </h4>
              <p className="text-xs text-studio-400 mb-4">
                We can architect, build, and test a tailored product for your company.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 hover:text-white transition-colors"
              >
                <span>LET&apos;S DISCUSS YOUR PROJECT →</span>
              </Link>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
