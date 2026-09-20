import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const schedule = [
  { time: "09:00 AM", event: "Registration & Inauguration", details: "Check-in at the Main Auditorium, badge distribution & keynote address." },
  { time: "09:30 AM", event: "Problem Statement Release", details: "Challenge domain briefs unlocked on portal. Environment access granted." },
  { time: "10:30 AM", event: "Idea Building & Mentoring", details: "Interactive guidance sessions with cybersecurity industry experts." },
  { time: "12:30 PM", event: "Final Presentation & Pitching", details: "Demonstrate working exploits, defense mechanisms, and code architecture." },
  { time: "02:00 PM", event: "Results & Prize Distribution", details: "Announcement of winners, trophy presentation, and closing ceremony." }
];

const TimelineNode = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-16 last:mb-0 w-full group">
      
      {/* Central Node Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-[0_0_15px_rgba(255,255,255,0.9)] z-10" />
      </div>

      {/* Content Container (Alternating Left & Right) */}
      <div className={`w-full flex justify-center md:justify-end ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:flex-row-reverse md:text-left'} pl-10 md:pl-0`}>
        {/* Simple, subtle fade-in card animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full md:w-5/12 p-6 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.9)] hover:border-white/30 transition-colors duration-300"
        >
          {/* Metallic Time Accent */}
          <div className="font-mono text-sm font-bold text-white tracking-wider mb-2 inline-block px-3 py-1 rounded bg-zinc-900 border border-white/20">
            {item.time}
          </div>

          {/* Event Title in Crisp White Sans-Serif */}
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
            {item.event}
          </h3>

          {/* Description */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
            {item.details}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" ref={containerRef} className="px-6 md:px-16 py-32 bg-transparent relative overflow-hidden border-t border-white/10">
      
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>// EVENT SCHEDULE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Event Timeline.
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base">
            From inauguration to code submissions — follow the structured progression of CYBERHACK 2026.
          </p>
        </div>

        <div className="relative">
          {/* Central 2px Wide Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />
          
          {/* Animated Liquid Silver Beam Line */}
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-white via-zinc-300 to-zinc-500 shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 origin-top"
          />

          <div className="relative z-20 flex flex-col items-center">
            {schedule.map((item, idx) => (
              <TimelineNode key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
