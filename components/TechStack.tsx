'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '@/data/techStack';
import { Terminal, Database, ShieldAlert, Cpu, GitBranch } from 'lucide-react';

export default function TechStack() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'CLIENT-SIDE':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case 'SERVER-SIDE':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'DATABASES':
        return <Database className="w-4 h-4 text-amber-400" />;
      case 'QUALITY ASSURANCE':
        return <ShieldAlert className="w-4 h-4 text-purple-400" />;
      case 'WORKFLOW & DEVOPS':
        return <GitBranch className="w-4 h-4 text-cyan-400" />;
      default:
        return <Terminal className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 border-t border-white/[0.08] bg-studio-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            STACK // VERIFIED CAPABILITIES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
            TECHNOLOGIES WE WORK WITH
          </h2>
          <p className="text-base sm:text-lg text-studio-400 font-normal leading-relaxed">
            Our active core stack for architecting web platforms, backend systems, database schemas, and automated test suites.
          </p>
          <span className="inline-block mt-3 font-mono text-[11px] text-studio-500 uppercase tracking-wider">
            * Selected according to project specifications; not all technologies are used concurrently in every build.
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStackData.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 rounded-2xl bg-studio-900/40 border border-white/[0.08] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center gap-2 font-mono text-xs text-studio-400 tracking-wider">
                    {getCategoryIcon(group.category)}
                    {group.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-studio-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-studio-950 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <span className="font-sans font-semibold text-xs text-white">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[9px] text-studio-500">
                      • {skill.tag}
                    </span>
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
