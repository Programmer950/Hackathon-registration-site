import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import cursorIcon from '../assets/cursor.png';

const CyberCursorGlow = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  // Soft spring physics for the ambient specular background glow halo
  const glowX = useSpring(0, { stiffness: 350, damping: 25 });
  const glowY = useSpring(0, { stiffness: 350, damping: 25 });

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update cursor image position INSTANTLY with ZERO lag & 100% precision
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Update ambient glow halo with soft spring
      glowX.set(x);
      glowY.set(y);

      // Check hover state on interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [glowX, glowY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Specular Metallic Ambient Glow (Soft Spring Follow) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.35 : 0.18,
        }}
        transition={{ duration: 0.2 }}
        className="w-[260px] h-[260px] rounded-full bg-gradient-to-r from-white/10 via-zinc-400/5 to-white/10 blur-3xl pointer-events-none"
      />

      {/* Instant Zero-Lag Custom Image Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none select-none z-[10000] will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        <motion.img 
          src={cursorIcon} 
          alt="Custom Cursor" 
          animate={{
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-6 h-6 object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)] pointer-events-none select-none" 
        />
      </div>
    </div>
  );
};

export default CyberCursorGlow;
