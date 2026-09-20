import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Who can participate?",
    answer: "The hackathon is open to all university students with a passion for cybersecurity and system design. You must be currently enrolled in an undergraduate or postgraduate program."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, participation is completely free. We also provide meals, snacks, and a workspace for the entire 24-hour duration."
  },
  {
    question: "Do I need a team?",
    answer: "Yes, teams must consist of 2 to 4 members. We encourage diverse skill sets spanning frontend, backend, and security domains."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, student ID, and any hardware you plan to use. Sleeping bags are recommended if you plan to rest."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="py-8 border-b border-white/10 last:border-0">
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
    </div>
  );
};

const FAQFooter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="px-8 md:px-16 py-32 bg-transparent border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">FAQ.</h2>
          <div className="max-w-4xl">
            {faqs.map((faq, idx) => (
              <FAQItem 
                key={idx} 
                faq={faq} 
                isOpen={openIndex === idx} 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 flex flex-col bg-transparent">
        {/* Large Apply Now Metallic Chrome CTA */}
        <a 
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
        </a>

        {/* Bottom Bar */}
        <div className="px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400 font-mono tracking-wide max-w-7xl mx-auto w-full">
          <div>&copy; {new Date().getFullYear()} Cyber Sentinels. All rights reserved.</div>
          
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FAQFooter;
