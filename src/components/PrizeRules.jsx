import React from 'react';
import { motion } from 'framer-motion';
import { Award, Crown, Medal, ShieldAlert } from 'lucide-react';

const rules = [
  "Eligibility: Undergraduate students from all Engineering & Technology disciplines across the REC campus.",
  "Team Size: Teams must consist of 3 to 5 students.",
  "Mandatory Rule: All cybersecurity testing must be conducted only within the authorized hackathon environment.",
  "Evaluation Criteria: Problem Relevance (20%), Innovation & Originality (20%), Technical Implementation (20%).",
  "Evaluation Criteria: Presentation & Impact (20%), Teamwork & Feasibility (20%)."
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 14 }
  }
};

const PrizeRules = () => {
  return (
    <section id="prizes" className="px-6 md:px-16 py-32 bg-transparent relative overflow-hidden border-t border-white/10">
      
      {/* Background Ambient Silver Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-zinc-500/10 via-white/5 to-zinc-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>// RECOVERY & REWARDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Tiered Prize Pool.
          </h2>
          <p className="text-zinc-400 font-light text-sm md:text-base">
            Top security solutions receive prestigious trophies, certificates of merit, and exclusive institutional recognition.
          </p>
        </div>

        {/* 3-Column Prize Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-36"
        >
          {/* 2nd Place */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="p-8 md:p-10 rounded-2xl bg-zinc-950/70 backdrop-blur-md border border-white/15 flex flex-col items-center text-center justify-between shadow-xl order-2 md:order-1 self-end min-h-[380px] hover:border-white/35 transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-xl bg-gradient-to-b from-zinc-700/40 to-zinc-900/60 border border-white/20 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Medal size={40} className="text-zinc-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>
              
              <span className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">// RUNNER UP</span>
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-100 mb-2 font-mono">2ND</div>
              <div className="text-zinc-300 font-medium text-lg mb-1">Second Place</div>
            </div>

            <div className="w-full pt-6 border-t border-white/10 text-zinc-400 text-xs font-mono">
              Trophy + Merit Certificate + Swag Pack
            </div>
          </motion.div>

          {/* 1st Place - Animated Metallic Silver Frame */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="p-[2px] rounded-2xl animate-silver-border shadow-[0_0_40px_rgba(255,255,255,0.2)] order-1 md:order-2 md:-translate-y-4 relative z-20"
          >
            <div className="h-full p-10 md:p-14 rounded-[14px] bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center text-center justify-between min-h-[440px]">
              <div className="flex flex-col items-center">
                <div className="p-5 rounded-2xl bg-gradient-to-b from-white/20 to-zinc-900/80 border border-white/40 mb-6 shadow-[0_0_25px_rgba(255,255,255,0.3)] animate-pulse">
                  <Crown size={48} className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]" />
                </div>
                
                <span className="font-mono text-xs tracking-widest uppercase text-zinc-300 font-bold mb-2">// GRAND CHAMPIONS</span>
                <div className="text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-2 font-mono">1ST</div>
                <div className="text-zinc-100 font-bold text-xl mb-1">Grand Winner</div>
              </div>

              <div className="w-full pt-6 border-t border-white/20 text-zinc-200 text-sm font-mono font-medium">
                Grand Winner Trophy + Merit Certificate + Hardware Kit
              </div>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="p-8 md:p-10 rounded-2xl bg-zinc-950/70 backdrop-blur-md border border-white/15 flex flex-col items-center text-center justify-between shadow-xl order-3 md:order-3 self-end min-h-[380px] hover:border-white/35 transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="p-4 rounded-xl bg-gradient-to-b from-zinc-800/40 to-zinc-950/60 border border-white/20 mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <Award size={40} className="text-zinc-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
              </div>
              
              <span className="font-mono text-xs tracking-widest uppercase text-zinc-400 mb-2">// 2ND RUNNER UP</span>
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-100 mb-2 font-mono">3RD</div>
              <div className="text-amber-200/90 font-medium text-lg mb-1">Third Place</div>
            </div>

            <div className="w-full pt-6 border-t border-white/10 text-zinc-400 text-xs font-mono">
              Trophy + Merit Certificate
            </div>
          </motion.div>
        </motion.div>

        {/* Rules & Evaluation Protocol Section */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-white/10">
          <div className="flex items-center space-x-3 mb-10">
            <div className="p-3 rounded-xl bg-zinc-900 border border-white/20 text-white">
              <ShieldAlert size={28} />
            </div>
            <div>
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block">// OFFICIAL PROTOCOL</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Rules & Evaluation Protocol.
              </h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {rules.map((rule, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-zinc-950/70 border border-white/12 flex items-start space-x-5 hover:border-white/30 transition-colors duration-300 shadow-md"
              >
                <span className="font-mono text-white text-xs font-bold bg-zinc-900 px-3 py-1 rounded border border-white/20 shrink-0 mt-0.5">
                  RULE 0{idx + 1}
                </span>
                <p className="text-base md:text-lg font-light leading-relaxed text-zinc-200">
                  {rule}
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
