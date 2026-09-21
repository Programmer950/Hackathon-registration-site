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
      {/* Subtle Micro Ambient Glow (Reduced size & opacity, pure neutral monochrome) */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.25 : 1,
          opacity: isHovered ? 0.12 : 0.05,
        }}
        transition={{ duration: 0.2 }}
        className="w-[80px] h-[80px] rounded-full bg-white/20 blur-xl pointer-events-none"
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
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="w-5 h-5 object-contain grayscale filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] drop-shadow-[0_0_2px_rgba(255,255,255,0.2)] pointer-events-none select-none" 
        />
      </div>
    </div>
  );
};

export default CyberCursorGlow;
