import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, Shield, FileCheck, Zap, Trophy, Calendar, FileType, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';

const overviewPillars = [
  {
    tag: "01",
    phase: "PHASE 01",
    icon: <Shield size={22} className="text-white" />,
    title: "The Vision & Objective",
    description: "An exclusive campus cybersecurity hackathon presented by the Department of Cyber Security at Rajalakshmi Engineering College to foster innovation, vulnerability defense, and secure system engineering."
  },
  {
    tag: "02",
    phase: "PHASE 02",
    icon: <FileCheck size={22} className="text-white" />,
    title: "Round 1 — PPT Screening",
    description: "All registered REC teams must submit their pitch deck (PPT) by 29th Sept. Expert evaluators screen submissions, and only top qualifying teams proceed to the campus Finals."
  },
  {
    tag: "03",
    phase: "PHASE 03",
    icon: <Zap size={22} className="text-white" />,
    title: "Round 2 — Campus Finals",
    description: "Qualifying teams compete in an intensive 5.5 hour live hackathon on 9th Oct at REC campus, building working exploits, security tools, or hardware prototypes."
  },
  {
    tag: "04",
    phase: "PHASE 04",
    icon: <Trophy size={22} className="text-white" />,
    title: "₹10,000 Rewards & Honors",
    description: "Top performing security solutions earn a share of the ₹10,000 grand prize pool, official merit certificates, hardware kits, and institutional recognition."
  }
];

const templateRequirements = [
  { label: "File Format", val: "PPTX or PDF" },
  { label: "Submission Deadline", val: "29th Sept 2026 (11:59 PM)" },
  { label: "Eligibility", val: "Registered REC Teams (4 Members)" },
  { label: "Mandatory Diversity", val: "At least 1 Female Team Member" }
];

const PPTTemplateSection = () => {
  return (
    <section id="template" className="px-6 md:px-16 py-32 bg-transparent relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 max-w-3xl"
        >
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <FileText size={14} className="text-zinc-300" />
            <span>// ROUND 1 SELECTION PROTOCOL & EVENT OVERVIEW</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            PPT Template & Event Summary.
          </h2>
          <p className="text-zinc-300 font-light leading-relaxed text-sm md:text-base">
            Download the official presentation deck template. All registered teams must submit their pitch deck by <strong className="text-white font-semibold">29th Sept 2026</strong>. Only qualifying teams selected from the PPT screening will advance to the campus Finals on 9th Oct.
          </p>
        </motion.div>

        {/* Clean & Highly Readable 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column (Spans 5 cols): PPT Download Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 p-8 md:p-10 rounded-2xl bg-zinc-950/90 border border-white/20 backdrop-blur-xl flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.85)] group hover:border-white/40 transition-all duration-300"
          >
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-zinc-900 border border-white/20 text-white font-mono text-xs uppercase tracking-wider mb-6">
                <FileType size={14} />
                <span>OFFICIAL DECK TEMPLATE</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Download Presentation Deck
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed mb-8 font-light">
                Use our standardized pitch deck template to present your project proposal, technical stack, problem statement choice, and system architecture.
              </p>

              {/* Requirement Bullet Checklist */}
              <div className="space-y-3 mb-8 pt-6 border-t border-white/10">
                {templateRequirements.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between text-xs font-mono">
                    <span className="text-zinc-400 flex items-center space-x-2">
                      <Check size={13} className="text-white shrink-0" />
                      <span>{item.label}:</span>
                    </span>
                    <span className="text-white font-semibold text-right">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Download Button */}
            <div className="pt-6 border-t border-white/10">
              <MagneticButton
                href="#"
                className="w-full py-4 rounded-full bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-black font-semibold text-xs tracking-wide uppercase shadow-[0_0_25px_rgba(255,255,255,0.25)] border border-white/50 group"
              >
                <span className="flex items-center justify-center space-x-2.5">
                  <Download size={16} />
                  <span>Download PPT Template (.pptx)</span>
                </span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Column (Spans 7 cols): 4 Clear & Readable Event Summary Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {overviewPillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.4)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-zinc-950/85 border border-white/15 backdrop-blur-xl flex flex-col justify-between group shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/20 text-white">
                      {pillar.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-white bg-zinc-900 px-2.5 py-1 rounded border border-white/20">
                      {pillar.phase}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-zinc-100 transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  // {pillar.tag} OVERVIEW PROTOCOL
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Clean Footer Notice */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={15} className="text-white" />
            <span>PPT SUBMISSION DEADLINE: 29th Sept 2026 (11:59 PM)</span>
          </div>
          <span className="text-zinc-300 font-medium">// QUALIFYING TEAMS PROCEED TO CAMPUS FINALS</span>
        </motion.div>

      </div>
    </section>
  );
};

export default PPTTemplateSection;
