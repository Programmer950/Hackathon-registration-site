import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Layers, Sparkles, ArrowUpRight, Terminal, ShieldAlert } from 'lucide-react';

const categoriesData = [
  {
    id: "software",
    categoryTitle: "Software Category",
    icon: <Code2 size={22} className="text-white" />,
    badge: "SOFTWARE DOMAIN",
    description: "Web Security, AI Cyber Defense, Cryptographic Tools, Cloud & Endpoint Protection.",
    tracks: [
      {
        id: "soft-01",
        code: "SW-01",
        title: "Software Track 01",
        subtitle: "Software Track 01 — Placeholder",
        status: "Release Pending",
        statusType: "active",
        tags: ["Web & Cloud Security", "AI Threat Intelligence", "Cryptographic Apps"],
        description: "Placeholder Track. Detailed software challenge brief, specifications, sample datasets, and evaluation criteria will be released on the portal before Round 1 PPT submission."
      },
      {
        id: "soft-02",
        code: "SW-02",
        title: "Software Track 02",
        subtitle: "Software Track 02 — Placeholder",
        status: "Release Pending",
        statusType: "active",
        tags: ["Network Auditing", "DevSecOps Automation", "Malware Analytics"],
        description: "Placeholder Track. Detailed software challenge brief, specifications, sample datasets, and evaluation criteria will be released on the portal before Round 1 PPT submission."
      }
    ]
  },
  {
    id: "hardware",
    categoryTitle: "Hardware Category",
    icon: <Cpu size={22} className="text-white" />,
    badge: "HARDWARE DOMAIN",
    description: "IoT Security, Embedded Systems, Hardware Hacking, Firmware Verification & Circuits.",
    tracks: [
      {
        id: "hw-01",
        code: "HW-01",
        title: "Hardware Track 01",
        subtitle: "Hardware Track 01 — Placeholder",
        status: "Release Pending",
        statusType: "active",
        tags: ["Embedded IoT Security", "Microcontroller Hacking", "Firmware Defense"],
        description: "Placeholder Track. Detailed hardware challenge brief, pinouts, required component specifications, and physical prototype requirements will be released on the portal."
      },
      {
        id: "hw-02",
        code: "HW-02",
        title: "Hardware Track 02",
        subtitle: "Hardware Track 02 — Placeholder",
        status: "Release Pending",
        statusType: "active",
        tags: ["FPGA & Cryptography", "Wireless Security", "Physical Attack Vectors"],
        description: "Placeholder Track. Detailed hardware challenge brief, pinouts, required component specifications, and physical prototype requirements will be released on the portal."
      }
    ]
  }
];

const TracksGrid = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filterCategories = activeTab === 'all' 
    ? categoriesData 
    : categoriesData.filter(cat => cat.id === activeTab);

  return (
    <section id="tracks" className="px-6 md:px-16 py-32 bg-transparent relative overflow-hidden">
      {/* Background Ambient Decorative Light Spotlights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-zinc-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Description */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
              <Sparkles size={14} className="text-zinc-300" />
              <span>// COMPETITION DOMAINS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Tracks & Categories.
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              CYBERHACK 2026 features two primary competition tracks: <strong className="text-white font-medium">Software Category</strong> and <strong className="text-white font-medium">Hardware Category</strong>. Teams will build and present proposals based on the released problem statements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 p-1.5 rounded-full bg-zinc-950 border border-white/15 backdrop-blur-xl self-start lg:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide uppercase transition-colors duration-300 ${
                activeTab === 'all' ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'all' && (
                <motion.span
                  layoutId="activeTrackTab"
                  className="absolute inset-0 bg-zinc-800 rounded-full border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)] -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="flex items-center space-x-1.5">
                <Layers size={14} />
                <span>All Tracks</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('software')}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide uppercase transition-colors duration-300 ${
                activeTab === 'software' ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'software' && (
                <motion.span
                  layoutId="activeTrackTab"
                  className="absolute inset-0 bg-zinc-800 rounded-full border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)] -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="flex items-center space-x-1.5">
                <Code2 size={14} />
                <span>Software</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('hardware')}
              className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide uppercase transition-colors duration-300 ${
                activeTab === 'hardware' ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {activeTab === 'hardware' && (
                <motion.span
                  layoutId="activeTrackTab"
                  className="absolute inset-0 bg-zinc-800 rounded-full border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)] -z-10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="flex items-center space-x-1.5">
                <Cpu size={14} />
                <span>Hardware</span>
              </span>
            </button>
          </div>
        </div>

        {/* Tracks Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="space-y-14"
          >
            {filterCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                
                {/* Category Header Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/20 text-white shadow-md">
                      {category.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">{category.badge}</span>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{category.categoryTitle}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    {category.description}
                  </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.tracks.map((track) => (
                    <motion.div
                      key={track.id}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="p-7 rounded-2xl bg-zinc-950/80 border border-white/15 backdrop-blur-xl flex flex-col justify-between group hover:border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.06)] transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Subdued Subtle Specular Shimmer */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors pointer-events-none" />

                      <div>
                        {/* Header Badges */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-xs font-bold text-white bg-zinc-900 px-3 py-1 rounded-md border border-white/20 shadow-inner">
                              {track.code}
                            </span>
                            <span className="font-mono text-[11px] text-zinc-300 font-medium">
                              {track.title}
                            </span>
                          </div>

                          {/* Live Pulsing Status Dot */}
                          <div className="inline-flex items-center space-x-2 bg-zinc-900/90 px-3 py-1 rounded-full border border-white/15 text-[11px] font-mono text-zinc-300">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>{track.status}</span>
                          </div>
                        </div>

                        {/* Title & Subtitle */}
                        <h4 className="font-sans text-xl font-bold tracking-tight text-white mb-3 group-hover:text-zinc-100 transition-colors flex items-center justify-between">
                          <span>{track.subtitle}</span>
                        </h4>

                        {/* Description */}
                        <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light mb-6">
                          {track.description}
                        </p>

                        {/* Domain Tech Scope Pills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {track.tags.map((tag, idx) => (
                            <span key={idx} className="font-mono text-[10px] text-zinc-300 px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/10">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Info */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="flex items-center space-x-1">
                          <Terminal size={12} className="text-zinc-500" />
                          <span>DOMAIN: {category.badge}</span>
                        </span>
                        <span className="text-white font-medium flex items-center space-x-1 group-hover:translate-x-0.5 transition-transform">
                          <span>READY FOR RELEASE</span>
                          <ArrowUpRight size={13} />
                        </span>
                      </div>

                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default TracksGrid;
