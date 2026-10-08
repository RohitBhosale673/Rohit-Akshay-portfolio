import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import WorksWheelDemo from '@/components/ui/demo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Works Wheel Showcase | Rohit × Akshay Studio',
  description: 'Interactive 3D drum portfolio index component demonstration.',
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-studio-950 text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-studio-900 hover:bg-white text-studio-400 hover:text-black border border-white/10 text-xs font-mono transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO MAIN SITE</span>
          </Link>

          <span className="font-mono text-xs text-blue-400">
            // COMPONENT: @/components/ui/works-wheel.tsx
          </span>
        </div>

        <WorksWheelDemo />
      </main>

      <Footer />
    </div>
  );
}
