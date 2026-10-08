'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function BackgroundMotion() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setAnimationsEnabled(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle floating glowing nodes & grid rays
    const nodeCount = Math.min(28, Math.floor(width / 50));
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      pulseSpeed: number;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.35 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle gradient radial glow following slow sine wave
      const glowX = width * 0.5 + Math.sin(tick * 0.005) * (width * 0.2);
      const glowY = height * 0.35 + Math.cos(tick * 0.005) * (height * 0.15);

      const radial = ctx.createRadialGradient(glowX, glowY, 50, glowX, glowY, width * 0.65);
      radial.addColorStop(0, 'rgba(59, 130, 246, 0.07)');
      radial.addColorStop(0.5, 'rgba(99, 102, 241, 0.03)');
      radial.addColorStop(1, 'rgba(9, 10, 14, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Connect nodes within threshold
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw and move nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        const currentOpacity =
          node.opacity + Math.sin(tick * node.pulseSpeed) * 0.1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${Math.max(0.05, currentOpacity)})`;
        ctx.fill();
      }

      tick++;
      if (animationsEnabled) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (animationsEnabled) {
      render();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationsEnabled]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Studio Grid Base */}
      <div className="absolute inset-0 studio-grid-bg opacity-40" />

      {/* Ambient Top Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-radial from-blue-600/10 via-indigo-500/5 to-transparent blur-3xl" />

      {/* Interactive Motion Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />

      {/* Fine Film Grain Noise */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-25" />

      {/* Discrete Animation Toggle (bottom right floating button) */}
      <div className="absolute bottom-5 right-5 pointer-events-auto z-40">
        <button
          onClick={() => setAnimationsEnabled(!animationsEnabled)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-studio-900/80 backdrop-blur-md border border-white/10 text-xs font-mono text-studio-400 hover:text-white hover:border-white/20 transition-all shadow-lg"
          title={animationsEnabled ? 'Pause ambient motion' : 'Resume ambient motion'}
          aria-label="Toggle ambient studio animation"
        >
          {animationsEnabled ? (
            <>
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Motion Active</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3.5 h-3.5 text-studio-500" />
              <span className="hidden sm:inline">Motion Paused</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
