import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldAlert, Award } from 'lucide-react';

const rules = [
  {
    tag: "01",
    title: "Eligibility Criteria (Exclusive REC Campus)",
    detail: "Exclusive to students from Rajalakshmi Engineering College (REC) only. External college or university students are NOT eligible to participate."
  },
  {
    tag: "02",
    title: "Team Size & Formation",
    detail: "Teams must consist of 4 members."
  },
  {
    tag: "03",
    title: "Mandatory Team Diversity",
    detail: "Every team must have at least one female member mandatory."
  },
  {
    tag: "04",
    title: "Testing Environment & Compliance",
    detail: "All cybersecurity testing must be conducted strictly within the authorized hackathon environment."
  },
  {
    tag: "05",
    title: "PPT Selection Round & Campus Finals",
    detail: "All registered teams must submit their presentation deck (PPT) by 29th Sept. Only top qualifying teams selected from this PPT round will proceed to the 5.5 hour campus Finals on 9th Oct."
  }
];

const PrizeRules = () => {
  return (
    <section id="prizes" className="px-6 md:px-16 py-32 bg-transparent relative overflow-hidden border-t border-white/10">
      
      {/* Background Ambient Silver Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-zinc-500/10 via-white/5 to-zinc-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>// RECOVERY & REWARDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Prize Pool.
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base">
            Top security solutions receive cash prizes, prestigious certificates of merit, and exclusive institutional recognition.
          </p>
        </div>

        {/* Unified ₹10,000 Prize Pool Showcase Banner */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-[2px] rounded-3xl animate-silver-border shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          >
            <div className="p-10 md:p-14 rounded-[22px] bg-zinc-950/95 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8">
              <div className="flex flex-col items-center md:items-start">
                <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/20 text-zinc-300 font-mono text-xs uppercase tracking-widest mb-4">
                  <Trophy size={14} className="text-white animate-pulse" />
                  <span>TOTAL REWARDS</span>
                </div>
                <h3 className="text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-2">
                  ₹10,000
                </h3>
                <p className="text-zinc-300 font-semibold text-lg md:text-xl tracking-wide">
                  Grand Prize Pool
                </p>
              </div>

              <div className="w-full md:w-auto pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/15 md:pl-10 flex flex-col space-y-4 text-zinc-300 text-sm md:text-base font-light">
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Award size={18} className="text-white shrink-0" />
                  <span>Cash Prizes for Top Performing Teams</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Award size={18} className="text-white shrink-0" />
                  <span>Merit Certificates & Institutional Recognition</span>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Award size={18} className="text-white shrink-0" />
                  <span>Exclusive Hardware Kits & Swag Packs</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Box-Free Sleek Rules & Guidelines Protocol Stream */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-white/10">
          <div className="flex items-center space-x-3 mb-12">
            <div className="p-3 rounded-xl bg-zinc-900 border border-white/20 text-white">
              <ShieldAlert size={28} />
            </div>
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">// OFFICIAL PROTOCOL</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Rules & Guidelines.
              </h2>
            </div>
          </div>
          
          {/* Vertical Sleek Border-Stream Design */}
          <div className="relative pl-6 md:pl-8 border-l border-white/15 space-y-10">
            {rules.map((rule, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Glowing Node Circle on Line */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-black border-2 border-white/60 group-hover:border-white group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                <div className="flex items-center space-x-3 mb-1.5">
                  <span className="font-mono text-xs font-bold text-white tracking-widest uppercase">
                    RULE {rule.tag}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-sm font-semibold text-zinc-300 font-mono tracking-wide group-hover:text-white transition-colors">
                    {rule.title}
                  </span>
                </div>
                
                <p className="text-base md:text-lg font-light leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
                  {rule.detail}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PrizeRules;
