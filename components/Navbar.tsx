'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize or navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-studio-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Studio Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
            <span className="font-mono text-xs font-bold text-white tracking-tighter">
              R×A
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-blue-400 transition-colors">
              ROHIT × AKSHAY
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-studio-400">
              DEVELOPMENT STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-studio-900/50 border border-white/[0.07] backdrop-blur-md">
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider text-studio-300 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-studio-950 font-sans text-xs font-bold uppercase tracking-wider hover:bg-blue-400 hover:text-black transition-all duration-200 shadow-md hover:shadow-blue-500/20"
          >
            <span>LET&apos;S WORK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-studio-900/60 border border-white/10 text-studio-300 hover:text-white focus:outline-none"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Fullscreen Mobile Navigation Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden fixed inset-0 top-[57px] bg-studio-950/98 backdrop-blur-2xl z-50 flex flex-col justify-between px-6 py-8 border-t border-white/10 overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <span className="font-mono text-xs text-studio-400 tracking-widest uppercase">
                // NAVIGATION
              </span>
              {siteConfig.navLinks.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-display font-bold text-white hover:text-blue-400 py-2 border-b border-white/[0.05] tracking-wide"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-studio-500">0{idx + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 pb-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABLE FOR NEW PROJECTS</span>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-xl bg-white text-black text-center font-bold font-sans text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <span>LET&apos;S WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
