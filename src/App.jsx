import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TracksGrid from './components/TracksGrid';
import PPTTemplateSection from './components/PPTTemplateSection';
import Timeline from './components/Timeline';
import PrizeRules from './components/PrizeRules';
import ContactFaculty from './components/ContactFaculty';
import FAQFooter from './components/FAQFooter';
import PageBackground from './components/PageBackground';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Hero with its dedicated Three.js Interactive Background */}
      <Hero />

      {/* Rest of the Page with Subtle Metallic Background */}
      <div className="relative z-10 bg-black">
        <PageBackground />
        <div className="relative z-10">
          <TracksGrid />
          <PPTTemplateSection />
          <Timeline />
          <PrizeRules />
          <ContactFaculty />
          <FAQFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
