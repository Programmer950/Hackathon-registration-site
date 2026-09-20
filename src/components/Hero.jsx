import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import SilverHeroAnimation from './SilverHeroAnimation';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 md:px-16 pt-36 pb-20 overflow-hidden z-10 bg-black">
      
      {/* Animated Three.js Metallic Silver Backdrop */}
      <SilverHeroAnimation />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">

        {/* Department Presentation Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full silver-glass text-zinc-200 text-xs font-mono uppercase tracking-[0.25em] mb-6 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.12)]"
        >
          <ShieldCheck size={16} className="text-zinc-200" />
          <span>DEPARTMENT OF CYBERSECURITY PRESENTS</span>
        </motion.div>

        {/* Hero Title with Silver Character Gradient for 'HACK' (No Box/Badge) */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] tracking-tight mb-8 text-white select-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        >
          CYBER<span className="bg-gradient-to-r from-zinc-500 via-slate-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">HACK</span> 2026
        </motion.h1>

        {/* Spatial Subtitles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl flex flex-col items-center"
        >
          <p className="text-xl md:text-2xl text-zinc-200 font-semibold tracking-wide mb-3">
            Registrations Open
          </p>
          
          <p className="text-base md:text-lg text-zinc-400 font-mono italic mb-6">
            "Innovate Today, Secure Tomorrow!"
          </p>

          <p className="text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed mb-8 font-light">
            Hack to Secure — Innovate for a Safer Digital Future. Experience high-end spatial UI problem solving, vulnerability discovery, and cloud defense architecture.
          </p>

          {/* Date & Location Event Meta Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-zinc-950/80 border border-white/15 text-zinc-300 font-mono text-xs sm:text-sm tracking-wide mb-10 shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          >
            <Sparkles size={14} className="animate-pulse text-zinc-200 shrink-0" />
            <span className="text-white font-medium">9th October 2026</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Rajalakshmi Engineering College</span>
          </motion.div>

          {/* Magnetic CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <MagneticButton
              href="#tracks"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-black font-semibold text-sm tracking-wide uppercase shadow-[0_0_30px_rgba(255,255,255,0.25)] border border-white/50 group"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Tracks</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticButton>

            <MagneticButton
              href="#timeline"
              className="px-8 py-4 rounded-full silver-glass text-white font-medium text-sm tracking-wide border border-white/20 hover:border-white/40 transition-colors"
            >
              <span>View Timeline</span>
            </MagneticButton>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
