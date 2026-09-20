import React from 'react';

const PageBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none bg-black">
      {/* Sleek Metallic Silver Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{ 
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1.2px, transparent 1.2px)`,
          backgroundSize: '28px 28px' 
        }} 
      />

      {/* Subtle Metallic Linear Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} 
      />

      {/* Soft Ambient Liquid Silver Gradient Spotlights */}
      <div className="absolute top-[5%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-zinc-400/15 via-slate-300/8 to-transparent rounded-full blur-[160px]" />
      <div className="absolute top-[30%] right-[-10%] w-[750px] h-[750px] bg-gradient-to-bl from-white/12 via-zinc-400/8 to-transparent rounded-full blur-[170px]" />
      <div className="absolute top-[55%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-t from-zinc-500/15 via-slate-200/6 to-transparent rounded-full blur-[180px]" />
      <div className="absolute top-[80%] right-[-5%] w-[750px] h-[750px] bg-gradient-to-tl from-white/10 via-zinc-400/6 to-transparent rounded-full blur-[160px]" />
    </div>
  );
};

export default PageBackground;
