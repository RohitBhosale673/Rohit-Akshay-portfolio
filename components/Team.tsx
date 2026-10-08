'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ShieldCheck, Terminal, Award } from 'lucide-react';
import { teamData, foundersInfo } from '@/data/team';

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 border-t border-white/[0.08] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              FOUNDERS // CORE TEAM
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
              {foundersInfo.tagline}
            </h2>
            <p className="text-base sm:text-lg text-studio-400 max-w-2xl font-normal leading-relaxed">
              {foundersInfo.experienceStatement}
            </p>
          </div>

          <div className="font-mono text-xs text-studio-400 self-start md:self-end flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            DIRECT DEVELOPER ENGAGEMENT
          </div>
        </div>

        {/* Duo Founders Showcase Banner */}
        <div className="mb-16 rounded-3xl bg-studio-950/80 border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Founders Photo */}
            <div className="lg:col-span-5 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] w-full overflow-hidden bg-studio-900">
              <Image
                src={foundersInfo.duoImage}
                alt="Rohit Bhosale & Akshay Shingade — Full Stack Development Team"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-950 via-transparent to-transparent opacity-60 lg:opacity-30" />
            </div>

            {/* Founders Studio Statement */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-xs text-blue-400 uppercase tracking-widest block mb-3">
                  // CO-FOUNDERS &amp; PARTNERS
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                  Rohit Bhosale &amp; Akshay Shingade
                </h3>
                <p className="text-sm sm:text-base text-studio-300 leading-relaxed mb-6">
                  We operate as a focused engineering duo without agency overhead or disconnected project layers. When you partner with us, you work directly with the developers writing, testing, and shipping your code.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                  <div className="p-4 rounded-xl bg-studio-900/60 border border-white/[0.08]">
                    <div className="font-mono text-xs text-emerald-400 uppercase font-semibold mb-1">
                      FULL STACK &amp; QA
                    </div>
                    <p className="text-xs text-studio-400">
                      End-to-end architecture from interactive frontends to verified backend APIs and automated Selenium test matrices.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-studio-900/60 border border-white/[0.08]">
                    <div className="font-mono text-xs text-blue-400 uppercase font-semibold mb-1">
                      RELIABLE PARTNERSHIP
                    </div>
                    <p className="text-xs text-studio-400">
                      Ideal for tech agencies, growth companies, and clients seeking an outsourced, highly responsive development arm.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-studio-500">
                <span>BASED IN INDIA • REMOTE WORLDWIDE</span>
                <span className="text-emerald-400 font-semibold">100% COLLABORATIVE</span>
              </div>
            </div>

          </div>
        </div>

        {/* Individual Team Member Cards (Equal Stature) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-studio-950/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Member Header with Portrait */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/15 bg-studio-900 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase font-semibold block w-fit mb-1.5">
                      {member.badge}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {member.name}
                    </h3>
                    <p className="font-mono text-xs text-studio-400 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-studio-300 leading-relaxed mb-6 font-normal">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-studio-400 uppercase tracking-widest block mb-2">
                    CORE SPECIALTIES
                  </span>
                  <div className="space-y-1">
                    {member.specialties.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs text-studio-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-studio-400 uppercase tracking-widest block mb-2">
                    TECHNICAL COMPETENCIES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-studio-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Links Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-studio-500">
                  DEVELOPMENT PARTNER
                </span>
                
                <div className="flex items-center gap-3">
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-studio-900 hover:bg-white text-studio-400 hover:text-black border border-white/10 transition-colors"
                      aria-label={`${member.name} GitHub profile`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white text-studio-300 hover:text-black border border-white/10 text-xs font-mono font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>CONNECT</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
