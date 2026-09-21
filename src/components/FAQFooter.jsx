import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate?",
    answer: "The hackathon is EXCLUSIVELY open to undergraduate students currently enrolled at Rajalakshmi Engineering College (REC) only. External college or university students are NOT eligible to participate."
  },
  {
    question: "Is there a selection round before the finals?",
    answer: "Yes, all registered teams must submit their project presentation deck for the PPT Round by 29th Sept. Only qualifying teams selected from the PPT round will proceed to the 5.5 hour campus Finals on 9th Oct."
  },
  {
    question: "Do I need a team?",
    answer: "Yes, teams must consist of 4 members from Rajalakshmi Engineering College. Please note that it is mandatory for every team to have at least one female member."
  },
  {
    question: "Is having a female team member mandatory?",
    answer: "Yes, to promote diversity and collaborative innovation in cybersecurity, every participating team must have at least one female member."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, participation is completely free. We also provide meals, snacks, and a workspace for the entire duration."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and any hardware you plan to use. Sleeping bags are recommended if you plan to rest."
  }
];

const FAQItem = ({ faq, isOpen, onClick, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="py-8 border-b border-white/10 last:border-0"
    >
      <button 
        className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
        onClick={onClick}
      >
        <span className="text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors pr-8">
          {faq.question}
        </span>
        <span className="text-2xl font-light text-zinc-400 group-hover:text-white transition-colors">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQFooter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="px-8 md:px-16 py-32 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16"
          >
            FAQ.
          </motion.h2>

          <div className="max-w-4xl">
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                index={idx}
                faq={faq} 
                isOpen={openIndex === idx} 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col bg-transparent">
        {/* Large Apply Now Metallic Chrome CTA */}
        <motion.a 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          href="https://forms.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-32 md:py-48 px-8 md:px-16 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 text-black flex items-center justify-center transition-all group btn-glare border-y border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.15)]"
        >
          <div className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase flex items-center">
            Apply Now
            <span className="ml-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300">
              →
            </span>
          </div>
        </motion.a>

        {/* Bottom Bar */}
        <div className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400 font-mono tracking-wide max-w-7xl mx-auto w-full">
          <div>&copy; {new Date().getFullYear()} Cyber Sentinels. All rights reserved.</div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.instagram.com/cybersentinels_rec/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/30 transition-all duration-300 shadow-sm group"
            >
              <svg className="w-4 h-4 fill-current text-zinc-300 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-xs font-mono uppercase tracking-wider">Instagram</span>
            </a>

            <a 
              href="https://in.linkedin.com/company/cyber-sentinels" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-white/15 text-zinc-300 hover:text-white hover:border-white/30 transition-all duration-300 shadow-sm group"
            >
              <svg className="w-4 h-4 fill-current text-zinc-300 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="text-xs font-mono uppercase tracking-wider">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FAQFooter;
