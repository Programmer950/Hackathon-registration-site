import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import logo from '../assets/silverlogobgremoved.png';
import recLogo from '../assets/reclogosilver.png';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'tracks', label: 'Tracks' },
  { id: 'template', label: 'PPT Template' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'prizes', label: 'Prizes' },
  { id: 'faq', label: 'FAQ' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      // 1. Top of page check
      if (window.scrollY < 80) {
        setActiveSection('about');
        return;
      }

      // 2. Bottom of page check
      const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 80);
      if (isAtBottom) {
        setActiveSection('faq');
        return;
      }

      // 3. Find section with highest visible overlap in viewport
      const viewportTop = 90; // Below fixed floating header
      const viewportBottom = window.innerHeight;

      let maxVisible = 0;
      let bestSection = 'about';

      for (let i = 0; i < navItems.length; i++) {
        const elements = document.querySelectorAll(`[id="${navItems[i].id}"]`);
        
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, viewportTop);
          const visibleBottom = Math.min(rect.bottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          if (visibleHeight > maxVisible) {
            maxVisible = visibleHeight;
            bestSection = navItems[i].id;
          }
        });
      }

      if (maxVisible > 0) {
        setActiveSection(bestSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -90, duration: 1.2 });
      } else {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-4 md:px-12 flex justify-center pointer-events-none"
    >
      <nav className="pointer-events-auto w-full max-w-6xl silver-glass rounded-full px-6 py-3.5 flex items-center justify-between shadow-[0_15px_35px_rgba(0,0,0,0.9)] border border-white/15 backdrop-blur-xl">
        
        {/* Brand Logos (REC Logo + CyberHack Logo) */}
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="flex items-center space-x-3 group">
          <img 
            src={recLogo} 
            alt="REC Logo" 
            className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-300"
          />
          <span className="h-5 w-[1px] bg-white/20" />
          <img 
            src={logo} 
            alt="CyberHack Logo" 
            className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            CYBER<span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-400 bg-clip-text text-transparent">HACK</span>
          </span>
        </a>

        {/* Animated Links with Accurate Active Section Highlighting */}
        <div className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-1.5 rounded-full transition-colors duration-300 ${
                  isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-zinc-800/90 via-zinc-700/80 to-zinc-800/90 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Magnetic Action CTA */}
        <div>
          <MagneticButton
            href="#tracks"
            onClick={(e) => handleNavClick(e, 'tracks')}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-black font-semibold text-xs tracking-wide uppercase shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all border border-white/40"
          >
            <span>Register Now</span>
          </MagneticButton>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
