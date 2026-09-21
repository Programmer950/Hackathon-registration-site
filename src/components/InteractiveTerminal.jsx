import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Copy, Check, Play, ShieldAlert } from 'lucide-react';

const COMMAND_OUTPUTS = {
  help: [
    { text: "CYBERHACK 2026 Interactive Command Line", color: "text-white font-bold" },
    { text: "Available commands:", color: "text-zinc-400" },
    { text: "  status   - View live registration & event overview", color: "text-zinc-300" },
    { text: "  rules    - Print official eligibility & team guidelines", color: "text-zinc-300" },
    { text: "  tracks   - List Software & Hardware competition tracks", color: "text-zinc-300" },
    { text: "  timeline - Display key event dates and deadlines", color: "text-zinc-300" },
    { text: "  prizes   - Show rewards & prize pool allocation", color: "text-zinc-300" },
    { text: "  clear    - Clear terminal output buffer", color: "text-zinc-400" }
  ],
  status: [
    { text: "[+] SYSTEM STATUS: ACTIVE", color: "text-emerald-400 font-bold" },
    { text: "  Event: CYBERHACK 2026", color: "text-white" },
    { text: "  Eligibility: Rajalakshmi Engineering College (REC) Students Only", color: "text-zinc-300" },
    { text: "  Team Requirement: Exactly 4 Members (1 Female Member Mandatory)", color: "text-zinc-300" },
    { text: "  Prize Pool: ₹10,000 Grand Rewards", color: "text-zinc-300" },
    { text: "  PPT Submission Deadline: 29th Sept 2026 (11:59 PM)", color: "text-zinc-300" },
    { text: "  Campus Finals: 9th Oct 2026 (5.5 Hours Live Event)", color: "text-zinc-300" }
  ],
  rules: [
    { text: "[!] OFFICIAL RULES PROTOCOL STREAM", color: "text-white font-bold" },
    { text: "  RULE 01: Exclusive to REC undergraduate engineering students.", color: "text-zinc-300" },
    { text: "  RULE 02: Team size must be exactly 4 members.", color: "text-zinc-300" },
    { text: "  RULE 03: Mandatory inclusion of at least one female team member.", color: "text-zinc-300" },
    { text: "  RULE 04: Selection via Round 1 PPT screening prior to campus finals.", color: "text-zinc-300" }
  ],
  tracks: [
    { text: "[#] COMPETITION DOMAIN SLOTS", color: "text-white font-bold" },
    { text: "  [SW-01] Software Track 01 — Web, Cloud & AI Defense", color: "text-zinc-300" },
    { text: "  [SW-02] Software Track 02 — DevSecOps & Malware Analytics", color: "text-zinc-300" },
    { text: "  [HW-01] Hardware Track 01 — Embedded IoT Security & Firmware", color: "text-zinc-300" },
    { text: "  [HW-02] Hardware Track 02 — FPGA & Wireless Attack Defense", color: "text-zinc-300" },
    { text: "  Status: All problem statements releasing on portal before Round 1 PPT deadline.", color: "text-emerald-400" }
  ],
  timeline: [
    { text: "[>] EVENT SCHEDULE MILESTONES", color: "text-white font-bold" },
    { text: "  22nd Sept: Online Registrations Open", color: "text-zinc-300" },
    { text: "  29th Sept: PPT Deck Submission Deadline", color: "text-zinc-300" },
    { text: "  05th Oct: Official Finalist Announcement", color: "text-zinc-300" },
    { text: "  09th Oct: 5.5 Hour On-Campus Hackathon Finals at REC", color: "text-zinc-300" }
  ],
  prizes: [
    { text: "[$] REWARDS & PRIZE POOL ALLOCATION", color: "text-white font-bold" },
    { text: "  Grand Prize Pool: ₹10,000 Total Rewards", color: "text-emerald-400 font-bold" },
    { text: "  Includes: Cash Prizes, Merit Certificates, Hardware Kits & Swag Packs", color: "text-zinc-300" }
  ]
};

const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "CYBERHACK 2026 Interactive Terminal v2.4 initialized." },
    { type: 'system', text: "Type 'help' or tap quick commands below to execute queries." },
    { type: 'output', lines: COMMAND_OUTPUTS.status }
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = COMMAND_OUTPUTS[cleanCmd] || [
      { text: `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`, color: "text-rose-400" }
    ];

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdText },
      { type: 'output', lines: output }
    ]);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  const handleCopyHistory = () => {
    const fullText = history
      .map(item => item.text || item.lines?.map(l => l.text).join('\n'))
      .join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 md:px-16 py-20 bg-transparent border-t border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-white/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Terminal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-2">
              <Sparkles size={14} className="text-zinc-300" />
              <span>// INTERACTIVE EVENT CONSOLE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Cyber Terminal Simulator.
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyHistory}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/15 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Log'}</span>
            </button>
          </div>
        </div>

        {/* Outer Sleek Terminal Box */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-zinc-950/95 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-xl"
        >
          {/* Terminal Window Header Bar */}
          <div className="px-5 py-3.5 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 inline-block" />
              <span className="font-mono text-xs text-zinc-400 font-semibold ml-2 flex items-center space-x-1.5">
                <TerminalIcon size={13} className="text-zinc-300" />
                <span>cyberhack_cli ~ bash</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-300 bg-zinc-950 px-2.5 py-1 rounded border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>LIVE INTERACTIVE</span>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="p-6 font-mono text-xs sm:text-sm min-h-[260px] max-h-[380px] overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-zinc-800">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'system' && (
                  <div className="text-zinc-500 italic">// {item.text}</div>
                )}

                {item.type === 'input' && (
                  <div className="flex items-center space-x-2 text-white font-semibold pt-1">
                    <span className="text-emerald-400">cyberhack@rec:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}

                {item.type === 'output' && (
                  <div className="space-y-1 pl-4 border-l border-white/10 my-1">
                    {item.lines.map((line, lIdx) => (
                      <div key={lIdx} className={line.color || "text-zinc-300"}>
                        {line.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Pills Toolbar */}
          <div className="px-6 py-3 bg-zinc-900/60 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2">Quick Commands:</span>
            {['status', 'rules', 'tracks', 'timeline', 'prizes', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-3 py-1 rounded-md bg-zinc-950 border border-white/15 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/30 transition-all duration-200 flex items-center space-x-1 group"
              >
                <Play size={10} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                <span>{cmd}</span>
              </button>
            ))}
          </div>

          {/* Terminal Prompt Input Form */}
          <form onSubmit={handleFormSubmit} className="px-6 py-3.5 bg-black border-t border-white/10 flex items-center space-x-3">
            <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold shrink-0">
              cyberhack@rec:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'status', 'rules', 'tracks' or 'help'..."
              className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder-zinc-600"
            />
            <button type="submit" className="p-1.5 rounded bg-zinc-900 border border-white/20 text-zinc-300 hover:text-white">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default InteractiveTerminal;
