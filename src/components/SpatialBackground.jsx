import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SpatialBackground = () => {
  const { scrollYProgress } = useScroll();

  // Multi-layered Parallax Transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black">
      {/* Ambient Metallic Silver Glows */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-400/10 via-slate-300/5 to-white/10 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-white/10 via-zinc-400/5 to-transparent rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-t from-slate-400/10 via-zinc-500/5 to-transparent rounded-full blur-[170px]" />

      {/* Silver Grid Mesh lines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '80px 80px' 
        }} 
      />

      {/* Floating Metallic Primitive 1: Glossy Chrome Sphere */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[12%] right-[10%] w-48 h-48 rounded-full opacity-40 animate-float"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-zinc-400 to-zinc-950 shadow-[0_0_50px_rgba(255,255,255,0.15)] relative">
          <div className="absolute top-3 left-4 w-12 h-12 bg-white/50 rounded-full blur-sm" />
        </div>
      </motion.div>

      {/* Floating Metallic Primitive 2: Rotating Silver Torus Ring */}
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[45%] -left-[4%] w-80 h-80 opacity-30 animate-spin-slow"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          <defs>
            <linearGradient id="torusGradSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#3f3f46" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#torusGradSilver)" strokeWidth="16" strokeDasharray="300 80" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Floating Metallic Primitive 3: Small Translucent Silver Glass Orb */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[75%] right-[18%] w-32 h-32 rounded-full opacity-35 animate-float"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-zinc-300/40 via-zinc-600/30 to-black backdrop-blur-md border border-white/20 shadow-[0_0_35px_rgba(255,255,255,0.15)] relative">
          <div className="absolute top-2 left-3 w-8 h-8 bg-white/60 rounded-full blur-xs" />
        </div>
      </motion.div>

      {/* Floating Metallic Primitive 4: Outer Silver Ring Halo */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[25%] left-[8%] w-64 h-64 opacity-20 animate-spin-slow"
      >
        <div className="w-full h-full rounded-full border-2 border-dashed border-zinc-300/50 shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
      </motion.div>
    </div>
  );
};

export default SpatialBackground;
