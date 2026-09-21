import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const schedule = [
  { time: "22nd Sept", event: "Registrations", details: "Online team registrations open for all undergraduate engineering students of Rajalakshmi Engineering College." },
  { time: "29th Sept", event: "PPT Submission Deadline", details: "Submit project ideas, problem statement choices, and presentation pitch decks on portal." },
  { time: "5th Oct", event: "Finalist Announcement", details: "Official announcement of qualifying finalist teams selected to advance to the campus finals." },
  { time: "9th Oct", event: "Hackathon Finals", details: "5.5 hour intensive live hackathon Finals for top qualifying teams on campus at Rajalakshmi Engineering College." }
];

const TimelineNode = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center mb-16 last:mb-0 w-full group">
      
      {/* Central Node Marker */}
      <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white border-2 border-black shadow-[0_0_15px_rgba(255,255,255,0.9)] group-hover:scale-150 group-hover:shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-300 z-10" />
      </div>

      {/* Content Container (Alternating Left & Right) */}
      <div className={`w-full flex justify-center md:justify-end ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:flex-row-reverse md:text-left'} pl-10 md:pl-0`}>
        {/* Simple, subtle fade-in card animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.015, borderColor: "rgba(255, 255, 255, 0.4)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full md:w-5/12 p-6 rounded-xl bg-zinc-950/80 border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.9)] transition-all duration-300 cursor-pointer"
        >
          {/* Metallic Time Accent */}
          <div className="font-mono text-sm font-bold text-white tracking-wider mb-2 inline-block px-3 py-1 rounded bg-zinc-900 border border-white/20 group-hover:border-white/40 transition-colors">
            {item.time}
          </div>

          {/* Event Title in Crisp White Sans-Serif */}
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-100 transition-colors">
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
            From registration opening to PPT submissions, finalist announcements, and campus finals — follow the progression of CYBERHACK 2026.
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
