
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#E5E5E5] px-10 pt-20">
      
      {/* Background Geometric Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none flex items-center justify-center">
        <div className="font-pixel text-[40vw] leading-none">RP</div>
      </div>

      <div className="container-fluid relative z-10 max-w-[1600px]">
        <div className="row g-0 align-items-center">
          
          {/* Left Side: Branding & Headline */}
          <div className="col-12 col-xl-4 text-left">
             <div className="flex items-center gap-4 mb-6">
                <span className="bg-[#C02033] text-white font-pixel text-[10px] px-2 py-1">[0/1]</span>
                <span className="font-pixel text-[10px] text-[#C02033] tracking-widest uppercase">LOC_MELBOURNE</span>
             </div>
             
             <h1 className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A] mb-12">
               CGI &<br />
               <span className="text-[#C02033]">ANIMATION</span><br />
               STUDIO
             </h1>

             <div className="mb-14 max-w-sm">
                <div className="flex items-center gap-2 mb-2">
                   <span className="text-red-500">📍</span>
                   <span className="font-pixel text-[8px] text-black/60 uppercase">Melbourne, Australia.</span>
                </div>
                <p className="font-pixel text-[10px] leading-relaxed text-black/80 uppercase">
                  WE ARCHITECT IMMERSIVE DIGITAL UNIVERSES AND CINEMATIC EXPERIENCES.
                </p>
             </div>

             <div className="flex items-center gap-6">
                <button 
                  onClick={() => scrollTo('work')}
                  className="bg-black text-white font-pixel text-[10px] py-6 px-12 border-2 border-black shadow-[8px_8px_0px_#C02033] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase font-bold"
                >
                  DISCOVER_WORK
                </button>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="bg-white text-black font-pixel text-[10px] py-6 px-12 border-4 border-black hover:bg-black hover:text-white transition-all uppercase font-bold"
                >
                  CONTACT_US
                </button>
                
                {/* Floating Rocket Asset */}
                <div className="relative ml-10 hidden lg:block">
                   <div className="absolute -top-16 left-0 bg-white border-2 border-black px-3 py-1 rounded-sm shadow-sm flex items-center justify-center">
                      <span className="font-pixel text-[6px] text-black font-bold">LVL_UP</span>
                      <div className="absolute -bottom-2 left-2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black"></div>
                   </div>
                   <div className="text-5xl animate-bounce">🚀</div>
                </div>
             </div>
          </div>

          {/* Center: The Gameboy Artifact */}
          <div className="col-12 col-xl-4 flex justify-center py-20 lg:py-0">
             <div 
               className="relative transition-transform duration-300 ease-out"
               style={{ 
                 perspective: '2000px',
                 transformStyle: 'preserve-3d',
                 transform: `rotateY(${-mousePos.x}deg) rotateX(${mousePos.y}deg)`,
               }}
             >
                <div className="w-[320px] aspect-[1/1.6] bg-[#F0F0F0] border-[6px] border-black rounded-[1.5rem] p-6 shadow-[40px_40px_0px_rgba(0,0,0,0.1)] relative"
                     style={{ transform: 'translateZ(100px)' }}>
                   
                   {/* Gameboy Screen */}
                   <div className="w-full aspect-square bg-[#333] border-[6px] border-black rounded-lg mb-10 overflow-hidden relative flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600" 
                           className="w-full h-full object-cover opacity-60 grayscale contrast-125" alt="CGI_VIEW" />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_50%,transparent_50%)] bg-[length:100%_4px]"></div>
                      <div className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                   </div>

                   {/* Controls */}
                   <div className="flex flex-col gap-12 px-2">
                      <div className="flex justify-between items-center">
                        {/* D-Pad */}
                        <div className="relative w-20 h-20">
                           <div className="absolute top-1/2 left-0 right-0 h-6 bg-black -translate-y-1/2 rounded-sm"></div>
                           <div className="absolute left-1/2 top-0 bottom-0 w-6 bg-black -translate-x-1/2 rounded-sm"></div>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full border-2 border-white/10"></div>
                        </div>
                        {/* A/B Buttons */}
                        <div className="flex gap-6 rotate-[-25deg] translate-y-2">
                           <div className="w-12 h-12 rounded-full bg-[#C02033] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"></div>
                           <div className="w-12 h-12 rounded-full bg-[#C02033] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"></div>
                        </div>
                      </div>
                      
                      {/* Speaker Grill */}
                      <div className="flex justify-end pr-4">
                         <div className="flex flex-col gap-2 rotate-[-45deg]">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="w-16 h-2 bg-black/10 rounded-full"></div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* System Labels */}
                   <div className="absolute bottom-6 left-0 right-0 text-center">
                     <span className="font-pixel text-[7px] text-black/20 uppercase tracking-[0.8em]">REDPIXEL_PORTABLE_OS</span>
                   </div>
                </div>

                {/* Floating Pixel Alien */}
                <div className="absolute top-20 -right-24 text-4xl opacity-50 animate-pulse pointer-events-none">👾</div>
             </div>
          </div>

          {/* Right Side: Metrics & Tabs */}
          <div className="col-12 col-xl-4 text-right flex flex-col items-end">
             <div className="mb-20">
                <div className="flex items-center gap-6 justify-end mb-4">
                   <h2 className="text-[120px] font-black leading-none text-[#1A1A1A] tracking-tighter">132%</h2>
                   <div className="w-14 h-14 bg-black rotate-45 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_#C02033]">
                      <div className="-rotate-45 text-white text-2xl font-bold">↗</div>
                   </div>
                </div>
                <div className="font-pixel text-[10px] text-[#C02033] mb-4 uppercase tracking-[0.5em] font-bold">GROWTH_METRICS</div>
                <p className="font-pixel text-[9px] max-w-[240px] leading-relaxed text-black/60 uppercase ml-auto">
                   STRATEGIC VISUAL PARTNERSHIPS FOR GLOBAL DOMINANCE.
                </p>
             </div>

             {/* Functional Tabs/HUD */}
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2 justify-end">
                   <div className="w-3 h-3 border-t-2 border-r-2 border-black"></div>
                   <div className="w-[100px] h-[1px] bg-black/10"></div>
                </div>
                
                <div className="flex gap-2 bg-[#F0F0F0] p-1 border-2 border-black rounded-sm shadow-sm">
                   <div className="relative group">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 border-t-2 border-l-2 border-black rotate-45 bg-[#E5E5E5]"></div>
                      <button className="bg-black text-white font-pixel text-[7px] px-6 py-4 border border-black uppercase">4K_RENDER</button>
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#C02033]"></div>
                   </div>
                   <button className="bg-transparent text-black font-pixel text-[7px] px-6 py-4 border border-transparent hover:border-black uppercase transition-all">CGI</button>
                   <button className="bg-transparent text-black font-pixel text-[7px] px-6 py-4 border border-transparent hover:border-black uppercase transition-all">VFX</button>
                   <button className="bg-transparent text-black font-pixel text-[7px] px-6 py-4 border border-transparent hover:border-black uppercase transition-all">MOTION</button>
                </div>
             </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Interface HUD */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t-2 border-black/5 pt-6 opacity-40">
        <div className="font-pixel text-[6px] uppercase tracking-widest">
           Status: SYSTEM_SYNCED // Core: 7.2_STABLE
        </div>
        <div className="flex gap-10">
           <div className="font-pixel text-[6px] uppercase tracking-widest">FPS: 60</div>
           <div className="font-pixel text-[6px] uppercase tracking-widest">RENDER_QUE: IDLE</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
