'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-white/[0.08] bg-studio-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-white">R×A</span>
              </div>
              <h3 className="font-display font-bold text-2xl tracking-wider text-white">
                ROHIT × AKSHAY
              </h3>
            </div>
            <p className="font-mono text-xs text-studio-400">
              Digital products, built with purpose.
            </p>
          </div>

          {/* Time & Availability */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="p-3.5 rounded-xl bg-studio-900/60 border border-white/10 font-mono text-xs">
              <span className="text-studio-500 block mb-0.5">LOCAL TIME (IST / INDIA)</span>
              <span className="text-white font-semibold">
                {time ? `${time} IST` : 'INDIA TIME'}
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-xl bg-studio-900/60 hover:bg-white text-studio-400 hover:text-black border border-white/10 transition-colors flex items-center gap-2 font-mono text-xs"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Links Navigation Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-12 border-b border-white/[0.06] text-xs font-mono">
          <div>
            <span className="text-studio-500 uppercase tracking-widest block mb-4">
              // NAVIGATION
            </span>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-studio-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-studio-500 uppercase tracking-widest block mb-4">
              // SERVICES
            </span>
            <ul className="space-y-2.5 text-studio-400">
              <li>Websites &amp; SPAs</li>
              <li>Web Applications</li>
              <li>Business Systems</li>
              <li>CRM &amp; Workflows</li>
              <li>QA &amp; Test Automation</li>
            </ul>
          </div>

          <div>
            <span className="text-studio-500 uppercase tracking-widest block mb-4">
              // VERIFIED LINKS
            </span>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/RohitBhosale673"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub (Rohit)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://reaestate.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>RBAS Estates</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://qa-portfolio-rohits-projects-84cb3046.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>QA Portfolio</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-studio-500 uppercase tracking-widest block mb-4">
              // ENGAGEMENT
            </span>
            <p className="text-studio-400 leading-relaxed font-sans text-xs">
              Direct development contracts, sprint assistance, and outsourced engineering for agencies.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-500">
          <p>
            © {new Date().getFullYear()} Rohit Bhosale &amp; Akshay Shingade. All rights reserved.
          </p>
          <p className="text-studio-400">
            ENGINEERED WITH NEXT.JS &amp; TAILWIND CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
