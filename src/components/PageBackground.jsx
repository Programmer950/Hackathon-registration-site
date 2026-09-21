import React from 'react';
import { motion } from 'framer-motion';

const PageBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black">
      
      {/* Animated Subtle Micro-Dot Matrix Pattern */}
      <motion.div 
        animate={{ 
          opacity: [0.12, 0.22, 0.12],
          backgroundPosition: ['0px 0px', '14px 14px', '0px 0px']
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.35) 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px' 
        }} 
      />

      {/* Subtle Metallic Linear Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.04]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} 
      />

      {/* Slow Moving Metallic Grid Scanning Beam */}
      <motion.div
        animate={{ y: ['-20%', '120%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none"
      />

      {/* Ambient Breathing Liquid Silver Gradient Spotlights */}
      {/* Spotlight 1: Top Left */}
      <motion.div 
        animate={{ 
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.1, 0.2, 0.12, 0.1]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[8%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-zinc-400/20 via-slate-300/10 to-transparent rounded-full blur-[160px]" 
      />

      {/* Spotlight 2: Top Right */}
      <motion.div 
        animate={{ 
          x: [0, -60, 40, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.12, 1],
          opacity: [0.12, 0.22, 0.15, 0.12]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[32%] right-[-10%] w-[750px] h-[750px] bg-gradient-to-bl from-white/15 via-zinc-400/10 to-transparent rounded-full blur-[170px]" 
      />

      {/* Spotlight 3: Mid Left */}
      <motion.div 
        animate={{ 
          x: [0, 60, -40, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.18, 0.12, 0.1]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[58%] left-[-8%] w-[800px] h-[800px] bg-gradient-to-t from-zinc-500/20 via-slate-200/8 to-transparent rounded-full blur-[180px]" 
      />

      {/* Spotlight 4: Bottom Right */}
      <motion.div 
        animate={{ 
          x: [0, -50, 30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 0.95, 1.15, 1],
          opacity: [0.1, 0.2, 0.12, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[82%] right-[-5%] w-[750px] h-[750px] bg-gradient-to-tl from-white/12 via-zinc-400/8 to-transparent rounded-full blur-[160px]" 
      />

      {/* Floating Pin-Point Silver Micro Particles */}
      {[
        { top: '15%', left: '12%', size: 3, delay: 0 },
        { top: '28%', left: '85%', size: 4, delay: 2 },
        { top: '42%', left: '22%', size: 3, delay: 1 },
        { top: '55%', left: '78%', size: 4, delay: 3 },
        { top: '70%', left: '15%', size: 3, delay: 1.5 },
        { top: '85%', left: '88%', size: 4, delay: 0.5 },
      ].map((pt, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 6 + idx,
            repeat: Infinity,
            delay: pt.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: pt.top,
            left: pt.left,
            width: pt.size,
            height: pt.size,
          }}
          className="rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      ))}
    </div>
  );
};

export default PageBackground;
