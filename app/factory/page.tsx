import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AgenticFactory3DDemo from '@/components/ui/agentic-factory-demo';

export const metadata = {
  title: 'Agentic Factory 3D — System Architecture Lab | Rohit × Akshay',
  description: 'Interactive procedural 3D workflow machine demonstrating end-to-end digital product architecture.',
};

export default function FactoryPage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Floating Back Navigation */}
      <div className="absolute top-5 left-5 z-30">
        <Link
          href="/#lab"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-studio-950/80 hover:bg-white text-studio-400 hover:text-black border border-white/10 text-xs font-mono backdrop-blur-md transition-colors shadow-2xl"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO MAIN SITE</span>
        </Link>
      </div>

      <AgenticFactory3DDemo />
    </div>
  );
}
