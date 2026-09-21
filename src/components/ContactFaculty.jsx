import React from 'react';
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
  return (
    <section id="faq" className="px-6 md:px-16 py-20 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Compact Location & Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
              <a href="mailto:hello@cybersentinels.com" className="text-zinc-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
                hello@cybersentinels.com
              </a>
              <a href="mailto:support@cybersentinels.com" className="text-zinc-300 hover:text-white transition-colors underline decoration-white/20 underline-offset-4">
                support@cybersentinels.com
              </a>
            </div>
          </div>
        </div>

        {/* Compact & Structured Faculty Section */}
        <div className="pt-10 border-t border-white/10">
          <div className="inline-flex items-center space-x-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-8">
            <Shield size={14} className="text-zinc-300" />
            <span>// FACULTY COORDINATION & LEADERSHIP</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch">
            
            {/* Convener Card (Spans 1 column on large) */}
            <div className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/90 border border-white/20 flex flex-col justify-between shadow-lg relative overflow-hidden group hover:border-white/40 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded bg-zinc-900 border border-white/20 text-white font-semibold inline-block mb-3">
                  {facultyData.convener.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {facultyData.convener.name}
                </h3>
                <p className="text-xs text-zinc-300 font-medium">{facultyData.convener.designation}</p>
              </div>
              <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                {facultyData.convener.department}
              </p>
            </div>

            {/* Co-Convenors Cards (2 items, 2 cols on lg) */}
            {facultyData.coConvenors.map((item, idx) => (
              <div key={idx} className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/70 border border-white/12 hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-white/15 text-zinc-300 inline-block mb-3">
                    {item.role}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-300">{item.designation}</p>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                  {item.department}
                </p>
              </div>
            ))}

            {/* Coordinators Cards (2 items, 2 cols on lg) */}
            {facultyData.coordinators.map((item, idx) => (
              <div key={idx} className="lg:col-span-1 p-5 rounded-xl bg-zinc-950/70 border border-white/12 hover:border-white/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-zinc-900 border border-white/15 text-zinc-300 inline-block mb-3">
                    {item.role}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-300">{item.designation}</p>
                </div>
                <p className="text-[11px] text-zinc-400 font-mono mt-4 pt-3 border-t border-white/10">
                  {item.department}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFaculty;
