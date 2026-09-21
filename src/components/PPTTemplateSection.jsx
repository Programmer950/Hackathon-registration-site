import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, Shield, FileCheck, Zap, Trophy } from 'lucide-react';
import MagneticButton from './MagneticButton';

const overviewPillars = [
  {
    tag: "01",
    icon: <Shield size={22} className="text-white" />,
    title: "The Vision & Objective",
    description: "An exclusive campus cybersecurity hackathon presented by the Department of Cyber Security at Rajalakshmi Engineering College to foster innovation, vulnerability defense, and system security."
  },
  {
    tag: "02",
    icon: <FileCheck size={22} className="text-white" />,
    title: "Round 1 — PPT Screening",
    description: "All registered REC teams must submit their pitch deck (PPT) by 29th Sept. Expert evaluators screen submissions, and only top qualifying teams proceed to the campus Finals."
  },
  {
    tag: "03",
    icon: <Zap size={22} className="text-white" />,
    title: "Round 2 — Campus Finals",
    description: "Qualifying teams compete in an intensive 5.5 hour live hackathon on 9th Oct at REC campus, building working exploits, security tools, or hardware prototypes."
  },
  {
    tag: "04",
    icon: <Trophy size={22} className="text-white" />,
    title: "₹10,000 Rewards & Honors",
    description: "Top performing security solutions earn a share of the ₹10,000 prize pool, official merit certificates, hardware kits, and institutional recognition."
  }
];

const PPTTemplateSection = () => {
  return (
    <section id="template" className="px-6 md:px-16 py-28 bg-transparent relative overflow-hidden border-t border-white/10">
      
      {/* Ambient Silver Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-zinc-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with PPT Download CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
              <FileText size={14} className="text-zinc-300" />
              <span>// ROUND 1 SELECTION PROTOCOL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              PPT Template & Event Summary.
            </h2>
            <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">
              Download the official presentation template below. All registered teams must prepare and upload their deck by <strong className="text-white font-medium">29th Sept 2026</strong>. Only qualifying teams will proceed to the campus Finals on 9th Oct.
            </p>
          </div>

          {/* Download Action Button */}
          <div className="shrink-0">
            <MagneticButton
              href="#"
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-black font-semibold text-xs tracking-wide uppercase shadow-[0_0_25px_rgba(255,255,255,0.2)] border border-white/50 group"
            >
              <span className="flex items-center space-x-2.5">
                <Download size={16} />
                <span>Download PPT Template (.pptx)</span>
              </span>
            </MagneticButton>
          </div>
        </div>

        {/* Box-Free Multi-Column Event Summary Stream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {overviewPillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 border-l border-white/15 flex flex-col justify-between group hover:border-white/40 transition-colors"
            >
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="font-mono text-xs font-bold text-white bg-zinc-900 px-2.5 py-1 rounded border border-white/20">
                    {pillar.tag}
                  </span>
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/15 text-white">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                PHASE 0{idx + 1} OVERVIEW
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submission Instruction Banner */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={15} className="text-white" />
            <span>DEADLINE: 29th Sept 2026 • 11:59 PM (PPTX or PDF Format)</span>
          </div>
          <span className="text-zinc-500">// SELECTION RESULTS WILL BE ANNOUNCED ON PORTAL</span>
        </div>

      </div>
    </section>
  );
};

export default PPTTemplateSection;
