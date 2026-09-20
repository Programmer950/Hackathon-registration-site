import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.12)", ...props }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default SpotlightCard;
