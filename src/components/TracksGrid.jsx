import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code, Cpu, Database } from 'lucide-react';

const tracks = [
  {
    title: "Cyber Defence & Security",
    description: "IDS, Threat Detection, Zero Trust architectures, and Security Monitoring Systems.",
    icon: <ShieldCheck size={28} className="text-zinc-200" />
  },
  {
    title: "Secure Software & Web",
    description: "Secure Coding practices, Vulnerability Assessment, Web App Pentesting & Hardening.",
    icon: <Code size={28} className="text-zinc-200" />
  },
  {
    title: "Forensics & Response",
    description: "Digital Forensics, Reverse Engineering, Malware Analysis, and Incident Handling.",
    icon: <Cpu size={28} className="text-zinc-200" />
  },
  {
    title: "Cloud, IoT & Data",
    description: "Cloud Privacy, Access Control, IoT Device Security, and Data Loss Prevention.",
    icon: <Database size={28} className="text-zinc-200" />
  }
];

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const TracksGrid = () => {
  return (
    <section id="tracks" className="px-6 md:px-16 py-28 bg-transparent relative border-t border-white/10 overflow-hidden">
      {/* Background Ambient Metallic Glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-zinc-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>// CHALLENGE DOMAINS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Hackathon Tracks.
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
            Select a problem statement that challenges your technical depth. We value architectural elegance, exploit proof-of-concepts, and robust implementations.
          </p>
        </div>

        {/* 4-Column Grid */}
        <motion.div 
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tracks.map((track, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                borderColor: "rgba(255, 255, 255, 0.35)",
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.08)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-8 rounded-xl bg-zinc-950/70 backdrop-blur-md border border-white/10 flex flex-col justify-between group cursor-pointer transition-colors duration-300"
            >
              <div>
                <div className="p-3 w-fit rounded-lg bg-zinc-900 border border-white/15 mb-6 group-hover:scale-110 group-hover:border-white/30 transition-all duration-300">
                  {track.icon}
                </div>
                
                {/* Monospace Track Titles */}
                <h3 className="font-mono text-lg font-bold tracking-tight text-white mb-3 group-hover:text-zinc-200 transition-colors duration-300">
                  {track.title}
                </h3>
                
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">
                <span>TRACK 0{idx + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform">EXPLORE →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TracksGrid;
