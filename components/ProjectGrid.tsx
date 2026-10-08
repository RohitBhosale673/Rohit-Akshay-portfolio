'use client';

import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Filter, LayoutGrid, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, filterTabs, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';
import ProjectPreviewModal from './ProjectPreviewModal';
import { WorksWheel, type WorksWheelItem } from '@/components/ui/works-wheel';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPreviewProject, setSelectedPreviewProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'wheel'>('grid');

  // Map studio projects into WorksWheel items
  const wheelItems: WorksWheelItem[] = useMemo(() => {
    return projectsData.map((project) => ({
      title: project.title,
      image: project.thumbnail,
      href: `/projects/${project.slug}`,
    }));
  }, []);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category match
      const matchesCategory =
        activeFilter === 'ALL' ||
        project.filterCategories.includes(activeFilter);

      // Search match (title, category, tech, description)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="work" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-blue-400 tracking-[0.2em] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              PORTFOLIO // SELECTED WORK
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white mb-4">
              SELECTED WORK
            </h2>
            <p className="text-base sm:text-lg text-studio-400 max-w-2xl font-normal leading-relaxed">
              A collection of websites, applications and digital products we&apos;ve designed and developed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-start md:self-end">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-studio-900/80 border border-white/10 font-mono text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-studio-400 hover:text-white'
                }`}
                title="Grid & Filter View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setViewMode('wheel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'wheel'
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-studio-400 hover:text-white'
                }`}
                title="3D Drum Wheel View"
              >
                <Disc className="w-3.5 h-3.5" />
                <span>3D Works Wheel</span>
              </button>
            </div>

            <div className="font-mono text-xs text-studio-500">
              SHOWING {filteredProjects.length} OF {projectsData.length} DELIVERABLES
            </div>
          </div>
        </div>

        {/* Dynamic Display: 3D Works Wheel vs Filter Grid */}
        {viewMode === 'wheel' ? (
          /* 3D Works Wheel Mode */
          <div className="relative rounded-3xl border border-white/10 bg-studio-950/80 p-2 sm:p-4 shadow-2xl overflow-hidden h-[680px] sm:h-[760px]">
            {/* Floating Instructional Banner */}
            <div className="absolute top-4 left-4 sm:left-6 z-20 flex items-center gap-2 font-mono text-xs text-studio-300 bg-studio-900/90 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>SCROLL OR DRAG VERTICALLY TO TURN 3D DRUM</span>
            </div>

            <WorksWheel
              items={wheelItems}
              label="ROHIT × AKSHAY"
              action="View Case Study"
              className="h-full rounded-2xl bg-transparent"
            />
          </div>
        ) : (
          /* Standard Grid Mode */
          <>
            {/* Filter Controls & Search Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
              
              {/* Scrollable Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none no-scrollbar">
                {filterTabs.map((tab) => {
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wider whitespace-nowrap transition-all duration-200 ${
                        isActive
                          ? 'bg-white text-black font-bold shadow-lg'
                          : 'bg-studio-900/60 text-studio-400 hover:text-white hover:bg-studio-800/80 border border-white/[0.06]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search Input */}
              <div className="relative min-w-[260px] lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-studio-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search our work..."
                  className="w-full pl-10 pr-9 py-2 rounded-xl bg-studio-900/80 border border-white/10 text-xs text-white placeholder-studio-500 focus:outline-none focus:border-blue-500/60 transition-colors font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-studio-500 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Projects Grid Container */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onPreview={(p) => setSelectedPreviewProject(p)}
                    index={idx}
                  />
                ))}
              </div>
            ) : (
              /* Empty Search State */
              <div className="text-center py-20 px-4 rounded-2xl bg-studio-950/40 border border-white/[0.08]">
                <p className="font-display font-bold text-xl text-white mb-2">
                  No projects match your search.
                </p>
                <p className="text-sm text-studio-400 max-w-md mx-auto mb-6">
                  Try adjusting your search terms or selecting another category filter above.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('ALL');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-semibold tracking-wider transition-colors border border-white/10"
                >
                  RESET FILTERS
                </button>
              </div>
            )}
          </>
        )}

      </div>

      {/* Interactive Quick Preview Modal */}
      <ProjectPreviewModal
        project={selectedPreviewProject}
        onClose={() => setSelectedPreviewProject(null)}
      />
    </section>
  );
}
