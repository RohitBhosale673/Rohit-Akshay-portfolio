import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundMotion from '@/components/BackgroundMotion';
import CustomCursor from '@/components/CustomCursor';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-studio-950 text-white flex flex-col justify-between">
      <BackgroundMotion />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-32 text-center">
        <div className="max-w-md">
          <div className="font-mono text-sm text-blue-400 uppercase tracking-widest mb-4">
            // ERROR 404
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-6 tracking-tight">
            THIS PAGE DOESN&apos;T EXIST.
          </h1>
          <p className="text-sm text-studio-400 mb-8 leading-relaxed">
            The link you followed may be broken or the resource has been relocated. Return to our portfolio to explore our active builds.
          </p>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider hover:bg-blue-400 hover:text-black transition-colors shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO WORK</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
