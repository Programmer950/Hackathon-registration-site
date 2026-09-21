import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EventCountdown = () => {
  // Countdown target: 29th September 2026 23:59:59
  const targetDate = new Date('2026-09-29T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <div className="w-full max-w-3xl my-6">
      <div className="text-center mb-3">
        <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-[0.2em] font-medium">
          // PPT SUBMISSION COUNTDOWN
        </span>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:gap-6">
        {timeUnits.map((unit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center p-3 sm:p-5 rounded-2xl bg-zinc-950/80 border border-white/15 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8)] relative group hover:border-white/30 transition-all"
          >
            <span className="font-mono font-black text-2xl sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
              {unit.value}
            </span>
            <span className="font-mono text-[10px] sm:text-xs text-zinc-400 tracking-widest mt-1">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventCountdown;
