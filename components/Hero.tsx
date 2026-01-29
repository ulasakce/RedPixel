import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const projects = [
    { id: "DPDXW9uk-EQ", label: "CGI_PHYSICS_01" },
    { id: "DOLBIkCE-qs", label: "SCENE_ARCH_02" },
    { id: "DNun08e5nqf", label: "HW_LOGIC_03" }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (window.innerWidth / 2 - e.pageX) / 100, 
        y: (window.innerHeight / 2 - e.pageY) / 100 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#F8F9FA] px-6 lg:px-16 pt-24 pb-16">
      
      {/* Soft Background Visuals with Red Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-5 pointer-events-none">
         <div className="w-full h-full bg-gradient-to-l from-[#E31E24]/20 to-transparent blur-[120px]"></div>
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="row g-5 align-items-center">
          
          <div className="col-12 col-xl-7 text-left">
             <div className="flex items-center gap-3 mb-6 overflow-hidden">
                <div className="w-8 h-[1px] bg-[#E31E24]"></div>
                <span className="text-[9px] font-bold tracking-[0.4em] text-[#E31E24] uppercase">Cinematic Intelligence</span>
             </div>
             
             <h1 className="text-[10vw] lg:text-[7.5vw] font-bold uppercase tracking-tighter leading-[0.85] mb-8 text-black">
               CRAFTING<br />
               <span className="text-outline-red hover:text-[#E31E24] transition-colors duration-1000 cursor-default">WORLDS.</span>
             </h1>
             
             <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <p className="text-xl lg:text-2xl font-light text-black/50 max-w-sm leading-snug uppercase tracking-tight">
                  High-fidelity CGI for <span className="text-black font-semibold">luxury brands</span> and cinematic architectures.
                </p>
                <button 
                   onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                   className="group flex items-center gap-4 border-b border-[#E31E24] pb-2 hover:gap-6 transition-all duration-700"
                >
                   <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-[#E31E24]">Explore Work</span>
                   <span className="text-xl font-light text-[#E31E24]">→</span>
                </button>
             </div>
          </div>

          <div className="col-12 col-xl-5 mt-12 xl:mt-0 flex justify-center">
             <div 
               className="relative w-full max-w-md aspect-[4/5] glass-panel p-2 float-element shadow-2xl rounded-[35px] overflow-hidden border-[#E31E24]/10"
               style={{ transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` }}
             >
                <div className="w-full h-full bg-[#050505] rounded-[28px] overflow-hidden relative group">
                   <iframe 
                      src={`https://www.instagram.com/reel/${projects[0].id}/embed/`}
                      className="absolute top-[-15%] left-0 w-full h-[130%] border-0 opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                      scrolling="no"
                   ></iframe>
                   
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>
                   
                   <div className="absolute bottom-8 left-8 flex items-center gap-3 z-20">
                      <div className="w-1.5 h-1.5 bg-[#E31E24] rounded-full shadow-[0_0_10px_#E31E24]"></div>
                      <span className="text-[9px] font-bold text-white tracking-widest uppercase opacity-80">Core_Render_Active</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Refined Info Bar */}
      <div className="absolute bottom-10 left-6 lg:left-16 flex items-end gap-12 text-[8px] font-bold text-black/20 uppercase tracking-[0.4em]">
         <div className="flex flex-col gap-1.5">
            <span className="hover:text-[#E31E24] transition-colors cursor-default">RedPixel_Studio_R4</span>
            <span>Melbourne_Sydney</span>
         </div>
         <div className="h-8 w-[1px] bg-black/10"></div>
         <span className="text-[#E31E24]/30">Precision Is Mandatory</span>
      </div>
    </section>
  );
};

export default Hero;