import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Team from '@/components/Team';
import Partnership from '@/components/Partnership';
import ProcessTimeline from '@/components/ProcessTimeline';
import InteractiveLab from '@/components/InteractiveLab';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundMotion from '@/components/BackgroundMotion';
import CustomCursor from '@/components/CustomCursor';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-studio-950 text-white overflow-x-hidden">
      {/* 21st.dev Style Ambient Animated Background */}
      <BackgroundMotion />

      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Sticky Studio Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="relative z-10">
        {/* Cinematic Studio Hero */}
        <Hero />

        {/* Selected Work (Projects, Filters, Search, Previews) */}
        <ProjectGrid />

        {/* What We Build (8 Tailored Services) */}
        <Services />

        {/* Technologies We Work With (Verified Stack) */}
        <TechStack />

        {/* Core Team (Rohit Bhosale & Akshay Shingade) */}
        <Team />

        {/* Why Partner With Us & Agency Collaboration */}
        <Partnership />

        {/* Engineering Methodology (7-Step Timeline) */}
        <ProcessTimeline />

        {/* Interactive 3D Pipeline Machine / Architecture Lab */}
        <InteractiveLab />

        {/* About & Technical Specifications */}
        <About />

        {/* Contact & Inquiries */}
        <Contact />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}
