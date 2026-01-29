import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 80;
      const y = (window.innerHeight / 2 - e.pageY) / 80;
      setMousePos({ x, y });
    };
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#EFEFEF] px-8 lg:px-20 pt-20">
      
      {/* Background Subtle Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-50"></div>
      
      <div className="container-fluid relative z-10 p-0">
        <div className="row g-0 align-items-end min-h-[70vh]">
          
          {/* Left Side: Branding & Headline */}
          <div className="col-12 col-xl-6 text-left flex flex-col justify-between">
             <div className="mb-12">
                <div className="flex items-center gap-4 mb-6 opacity-60">
                   <span className="font-pixel text-[8px] border border-black/20 px-2 py-1">COORD_42.36</span>
                   <span className="font-pixel text-[8px] tracking-[0.2em] uppercase">Status: Operating</span>
                </div>
                
                <h1 className="text-[12vw] xl:text-[9vw] font-black uppercase tracking-tighter leading-[0.8] text-[#0A0A0A] mb-8">
                  CRAFTING<br />
                  <span className="text-[#C02033]">WORLDS.</span>
                </h1>
                
                <p className="text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black/40 max-w-xl leading-none">
                  EXPERIENCES THAT STICK.
                </p>
             </div>

             <div className="hidden xl:flex flex-col gap-4 mt-20">
                <div className="flex items-center gap-6">
                   <button 
                     onClick={() => scrollTo('work')}
                     className="group relative flex items-center gap-4 bg-[#C02033] text-white font-pixel text-[10px] py-6 px-12 hover:bg-black transition-all uppercase font-bold"
                   >
                     <span>WATCH_REEL</span>
                     <div className="w-8 h-[2px] bg-white group-hover:w-12 transition-all"></div>
                   </button>
                </div>
             </div>
          </div>

          {/* Center/Right: The Artifact */}
          <div className="col-12 col-xl-6 flex justify-center xl:justify-end relative">
             <div 
               className="relative transition-transform duration-500 ease-out py-20 xl:py-0"
               style={{ 
                 perspective: '2500px',
                 transformStyle: 'preserve-3d',
                 transform: `rotateY(${-mousePos.x}deg) rotateX(${mousePos.y}deg)`,
               }}
             >
                {/* Modern Tech Core Frame */}
                <div className="w-[380px] md:w-[450px] aspect-[4/5] bg-white border-2 border-black/10 p-4 shadow-[30px_30px_0px_rgba(0,0,0,0.02)] relative group"
                     style={{ transform: 'translateZ(100px)' }}>
                   
                   <div className="w-full h-full border border-black/5 bg-[#F5F5F5] overflow-hidden relative">
                      {/* Placeholder for high-end CGI render video/image */}
                      <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1000" 
                           className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-110 transition-transform duration-[2s]" alt="CGI_CORE" />
                      
                      {/* UI Overlays */}
                      <div className="absolute inset-4 border border-white/20 pointer-events-none"></div>
                      <div className="absolute top-6 left-6 font-pixel text-[6px] text-black/40">SYSTEM_DIAGNOSTIC_v9.2</div>
                      <div className="absolute bottom-6 right-6 font-pixel text-[6px] text-red-600 animate-pulse">RECORDING_72.4fps</div>
                   </div>

                   {/* External Floating UI bits */}
                   <div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-black bg-white flex flex-col items-center justify-center shadow-lg" style={{ transform: 'translateZ(50px)' }}>
                      <span className="font-pixel text-[14px] font-bold">8K</span>
                      <span className="font-pixel text-[6px] opacity-40">NATIVE</span>
                   </div>
                </div>

                {/* Growth Metric positioned nearby as a tech label */}
                <div className="absolute -bottom-10 -left-20 bg-black text-white p-8 border-t-4 border-red-600 shadow-xl" style={{ transform: 'translateZ(150px)' }}>
                   <div className="flex items-center gap-4 mb-2">
                      <span className="text-4xl font-black">132%</span>
                      <span className="text-red-500 text-2xl font-bold">↗</span>
                   </div>
                   <div className="font-pixel text-[7px] uppercase tracking-widest opacity-60">STRATEGIC_GROWTH</div>
                </div>
             </div>
          </div>
        </div>

        {/* Mobile Call to Action */}
        <div className="xl:hidden mt-20 flex justify-center">
           <button 
             onClick={() => scrollTo('work')}
             className="bg-[#C02033] text-white font-pixel text-[10px] py-6 px-12 uppercase font-bold w-full max-w-sm"
           >
             WATCH_REEL
           </button>
        </div>
      </div>
      
      {/* Bottom Layout Bar */}
      <div className="absolute bottom-10 left-8 right-8 lg:left-20 lg:right-20 flex flex-col md:flex-row justify-between items-center border-t border-black/10 pt-8 gap-6">
        <div className="flex gap-12 items-center">
           <div className="flex flex-col">
              <span className="font-pixel text-[6px] opacity-30 uppercase">Local_Time</span>
              <span className="font-pixel text-[10px] font-bold">{time}</span>
           </div>
           <div className="flex flex-col">
              <span className="font-pixel text-[6px] opacity-30 uppercase">Engine_Core</span>
              <span className="font-pixel text-[10px] font-bold">UNREAL_5.4</span>
           </div>
        </div>
        
        <div className="flex items-center gap-8">
           <div className="w-32 h-[2px] bg-black/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-red-600 w-1/3 animate-[loading_3s_infinite]"></div>
           </div>
           <span className="font-pixel text-[6px] uppercase tracking-widest opacity-40">System_Synced // RedPixel_RISE</span>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;