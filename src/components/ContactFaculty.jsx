import React from 'react';

const facultyList = [
  {
    name: "Dr. P. Tamil Selvi",
    title: "CONVENOR | Professor and Head, Department of CSE – Cyber Security"
  },
  {
    name: "Dr. D. Sivakumar",
    title: "CO-CONVENOR | Professor, Department of CSE – Cyber Security"
  },
  {
    name: "Dr. V. Balasubramanian",
    title: "CO-CONVENOR |Professor, Department of CSE – Cyber Security"
  },
  {
    name: "T. Seethalakshmi",
    title: "COORDINATOR | Assistant Professor, Department of CSE – Cyber Security"
  },
  {
    name: "P. S. Gayathri Priya",
    title: "COORDINATOR | Assistant Professor, Department of CSE – Cyber Security"
  }
];

const ContactFaculty = () => {
  return (
    <section className="px-8 md:px-16 py-32 bg-transparent border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
        
        {/* Left Side: Venue & Contact */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">Location.</h2>
            <address className="not-italic text-lg md:text-xl font-light leading-relaxed text-zinc-300 mb-16">
              Rajalakshmi Engineering College<br />
              Rajalakshmi Nagar, Thandalam<br />
              Chennai, Tamil Nadu 602105<br />
              India
            </address>
          </div>
          
          <div>
            <h3 className="text-sm font-mono tracking-widest uppercase text-zinc-400 mb-6">Contact</h3>
            <div className="flex flex-col space-y-4 text-xl">
              <a href="mailto:hello@cybersentinels.com" className="text-zinc-300 hover:text-white transition-colors inline-block w-fit hover:translate-x-1 duration-200">
                hello@cybersentinels.com
              </a>
              <a href="mailto:support@cybersentinels.com" className="text-zinc-300 hover:text-white transition-colors inline-block w-fit hover:translate-x-1 duration-200">
                support@cybersentinels.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Faculty Coordinators */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-10">Faculty.</h2>
          
          <div className="flex flex-col">
            {facultyList.map((faculty, idx) => (
              <div 
                key={idx} 
                className="py-8 border-b border-white/10 last:border-0 hover:pl-2 transition-all duration-300"
              >
                <div className="text-2xl font-semibold tracking-tight text-white mb-2">
                  {faculty.name}
                </div>
                <div className="text-zinc-400 font-mono text-sm tracking-wide">
                  {faculty.title}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFaculty;
