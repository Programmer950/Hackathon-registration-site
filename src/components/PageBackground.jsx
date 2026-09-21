import React from 'react';
import { motion } from 'framer-motion';

const PageBackground = () => {
  // Continuous fluid silver spotlights spaced down non-hero sections
  const spotlightPositions = [
    { top: '4%', left: '-8%', align: 'left' },
    { top: '18%', right: '-8%', align: 'right' },
    { top: '32%', left: '-8%', align: 'left' },
    { top: '48%', right: '-8%', align: 'right' },
    { top: '62%', left: '-8%', align: 'left' },
    { top: '78%', right: '-8%', align: 'right' },
    { top: '90%', left: '-8%', align: 'left' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black">
      
      {/* 1. Animated Organic Liquid Silver SVG Wave Ribbon (NO DOTS) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 1440 3200">
        <defs>
          <linearGradient id="silverWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3f3f46" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="silverWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e4e4e7" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#71717a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Dynamic Curved Wave Paths */}
        <motion.path
          animate={{
            d: [
              "M 0 300 Q 360 150 720 300 T 1440 300 L 1440 3200 L 0 3200 Z",
              "M 0 300 Q 360 450 720 300 T 1440 300 L 1440 3200 L 0 3200 Z",
              "M 0 300 Q 360 150 720 300 T 1440 300 L 1440 3200 L 0 3200 Z"
            ]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#silverWaveGrad1)"
        />

        <motion.path
          animate={{
            d: [
              "M 0 1200 Q 450 1000 900 1200 T 1440 1200 L 1440 3200 L 0 3200 Z",
              "M 0 1200 Q 450 1400 900 1200 T 1440 1200 L 1440 3200 L 0 3200 Z",
              "M 0 1200 Q 450 1000 900 1200 T 1440 1200 L 1440 3200 L 0 3200 Z"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          fill="url(#silverWaveGrad2)"
        />
      </svg>

      {/* 2. Fluid Moving Silver Specular Light Pools */}
      {spotlightPositions.map((spot, idx) => (
        <motion.div 
          key={idx}
          animate={{ 
            x: spot.align === 'left' ? [0, 90, -50, 0] : [0, -90, 50, 0],
            y: [0, -60, 60, 0],
            scale: [1, 1.25, 0.88, 1],
            opacity: [0.22, 0.42, 0.25, 0.22]
          }}
          transition={{ 
            duration: 11 + (idx % 4), 
            repeat: Infinity, 
            delay: idx * 0.6, 
            ease: "easeInOut" 
          }}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left || 'auto',
            right: spot.right || 'auto',
          }}
          className="w-[700px] h-[700px] bg-gradient-to-tr from-zinc-200/30 via-slate-300/18 to-transparent rounded-full blur-3xl pointer-events-none" 
        />
      ))}

      {/* 3. Floating 3D Geometric Wireframe Accents (NO DOTS) */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{ rotate: { duration: 55, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-[10%] right-[7%] w-[350px] h-[350px] rounded-full border border-white/15 pointer-events-none"
      />

      <motion.div
        animate={{ rotate: -360, scale: [1, 1.12, 1] }}
        transition={{ rotate: { duration: 70, repeat: Infinity, ease: "linear" }, scale: { duration: 10, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-[45%] left-[6%] w-[420px] h-[420px] rounded-full border border-white/10 pointer-events-none"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[80%] right-[8%] w-[380px] h-[380px] rounded-full border border-white/15 pointer-events-none"
      />

      {/* 4. Subtle Floating Light Rays */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.25, 0.1],
          y: ['0%', '100%']
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-48 bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none"
      />

    </div>
  );
};

export default PageBackground;
