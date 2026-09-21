import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Award, Shield } from 'lucide-react';

const facultyData = {
  convener: {
    role: "Convener",
    name: "Dr. P. Tamil Selvi",
    designation: "Professor and Head",
    department: "Department of CSE – Cyber Security"
  },
  coConvenors: [
    {
      role: "Co-Convenor",
      name: "Dr. D. Sivakumar",
      designation: "Professor",
      department: "Department of CSE – Cyber Security"
    },
    {
      role: "Co-Convenor",
      name: "Dr. V. Balasubramanian",
      designation: "Professor",
      department: "Department of CSE – Cyber Security"
    }
  ],
  coordinators: [
    {
      role: "Coordinator",
      name: "T. Seethalakshmi",
      designation: "Assistant Professor",
      department: "Department of CSE – Cyber Security"
    },
    {
      role: "Coordinator",
      name: "P. S. Gayathri Priya",
      designation: "Assistant Professor",
      department: "Department of CSE – Cyber Security"
    }
  ]
};

const ContactFaculty = () => {
  const [copiedEmail, setCopiedEmail] = useState(null);

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="faq" className="px-6 md:px-16 py-20 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Compact Location & Contact Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Location.</h2>
            <address className="not-italic text-base md:text-lg font-light leading-relaxed text-zinc-300">
              Rajalakshmi Engineering College<br />
              Rajalakshmi Nagar, Thandalam, Chennai, Tamil Nadu 602105, India
            </address>
          </div>
          
          <div>
            <h3 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-4">// Contact</h3>
            <div className="flex flex-col sm:flex-row gap-4 text-base font-mono">
              {["xxxxxxxxx", "xxxxxxxxx"].map((email) => (
                <button
                  key={email}
                  onClick={() => handleCopyEmail(email)}
                  className="text-left text-zinc-300 hover:text-white transition-all underline decoration-white/20 hover:decoration-white underline-offset-4 relative group cursor-pointer"
                >
                  <span>{email}</span>
                  {copiedEmail === email && (
                    <span className="ml-2 font-mono text-[10px] text-emerald-400 bg-zinc-900 px-2 py-0.5 rounded border border-emerald-500/30">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compact & Structured Faculty Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="pt-10 border-t border-white/10"
        >
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-8">
            <Shield size={14} className="text-zinc-300" />
            <span>// FACULTY COORDINATION & LEADERSHIP</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
            
            {/* Convener Card (Spans 1 column on large) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255, 255, 255, 0.4)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/90 border border-white/20 flex flex-col justify-between shadow-lg relative overflow-hidden group transition-all"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:bg-white/10 transition-colors" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded bg-zinc-900 border border-white/20 text-white font-semibold inline-block mb-3">
                  {facultyData.convener.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                  {facultyData.convener.name}
                </h3>
                <p className="text-xs text-zinc-300 font-medium">{facultyData.convener.designation}</p>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                {facultyData.convener.department}
              </p>
            </motion.div>

            {/* Co-Convenors Cards (2 items, 2 cols on lg) */}
            {facultyData.coConvenors.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255, 255, 255, 0.35)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/70 border border-white/12 flex flex-col justify-between group transition-all"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-white/15 text-zinc-300 inline-block mb-3">
                    {item.role}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-300">{item.designation}</p>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                  {item.department}
                </p>
              </motion.div>
            ))}

            {/* Coordinators Cards (2 items, 2 cols on lg) */}
            {facultyData.coordinators.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.015, borderColor: "rgba(255, 255, 255, 0.35)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + idx * 0.05 }}
                className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/70 border border-white/12 flex flex-col justify-between group transition-all"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-white/15 text-zinc-300 inline-block mb-3">
                    {item.role}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-zinc-100 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-300">{item.designation}</p>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                  {item.department}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFaculty;
