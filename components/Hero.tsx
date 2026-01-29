import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      setMousePos({ x, y });
    };
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    const slideTimer = setInterval(() => setActiveSlide(prev => (prev + 1) % images.length), 3000);
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#EFEFEF] px-8 lg:px-20 pt-20 pb-20">
      
      {/* Background Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none opacity-50"></div>
      
      <div className="container-fluid relative z-10 p-0">
        <div className="row g-0 align-items-center min-h-[75vh]">
          
          {/* Left Side: Branding */}
          <div className="col-12 col-xl-5 text-left flex flex-col justify-between">
             <div className="mb-12">
                <div className="flex items-center gap-4 mb-6 opacity-60">
                   <span className="font-pixel text-[8px] border border-black/20 px-2 py-1 bg-white">REDPXL_SYS_v2.5</span>
                   <span className="font-pixel text-[8px] tracking-[0.2em] uppercase text-red-600 animate-pulse">● LIVE_FEED</span>
                </div>
                
                <h1 className="text-[10vw] xl:text-[8vw] font-black uppercase tracking-tighter leading-[0.8] text-[#0A0A0A] mb-8">
                  CRAFTING<br />
                  <span className="text-[#C02033]">WORLDS.</span>
                </h1>
                
                <p className="text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black/40 max-w-xl leading-none">
                  EXPERIENCES THAT STICK.
                </p>
             </div>

             <div className="hidden xl:flex flex-col gap-8 mt-12">
                <button 
                  onClick={() => scrollTo('work')}
                  className="group w-fit relative flex items-center gap-6 bg-[#C02033] text-white font-pixel text-[10px] py-6 px-12 hover:bg-black transition-all uppercase font-bold shadow-[8px_8px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
                >
                  <span>WATCH_REEL</span>
                  <div className="w-8 h-[2px] bg-white group-hover:w-12 transition-all"></div>
                </button>

                <div className="flex gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-1 bg-black/5 overflow-hidden">
                      <div className={`h-full bg-red-600 transition-all duration-500 ${activeSlide === i-1 ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Center: The RedPixel Gameboy */}
          <div className="col-12 col-xl-7 flex justify-center xl:justify-center relative">
             <div 
               className="relative transition-transform duration-700 ease-out"
               style={{ 
                 perspective: '2000px',
                 transformStyle: 'preserve-3d',
                 transform: `rotateY(${-mousePos.x}deg) rotateX(${mousePos.y}deg)`,
               }}
             >
                {/* Handheld Device Body (Gameboy Style) */}
                <div className="w-[320px] md:w-[400px] h-[520px] md:h-[650px] bg-[#D1D1D1] border-[6px] border-black p-8 rounded-[10px_10px_60px_10px] shadow-[40px_40px_0px_rgba(0,0,0,0.05)] relative overflow-hidden"
                     style={{ transform: 'translateZ(50px)' }}>
                   
                   {/* Top Speaker Grills */}
                   <div className="flex gap-2 mb-6 opacity-30">
                      {[1,2,3].map(i => <div key={i} className="w-12 h-1 bg-black rounded-full"></div>)}
                   </div>

                   {/* Screen Bezel */}
                   <div className="bg-[#2A2A2A] p-6 rounded-[5px] border-4 border-black/10 mb-8 relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-black/20 rounded-full"></div>
                      
                      {/* Main Screen Content */}
                      <div className="aspect-square w-full bg-[#1A1A1A] border-4 border-black overflow-hidden relative">
                         {images.map((img, idx) => (
                           <img 
                             key={idx}
                             src={img} 
                             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeSlide === idx ? 'opacity-100' : 'opacity-0'}`} 
                             alt="CGI_RENDER" 
                           />
                         ))}
                         
                         {/* CRT Screen Overlays */}
                         <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,3px_100%]"></div>
                         <div className="absolute top-4 left-4 font-pixel text-[6px] text-white/50">RENDER_BUF: {activeSlide + 1}/3</div>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center px-1">
                         <span className="font-pixel text-[7px] text-red-600 font-bold">DOT_MATRIX_RED</span>
                         <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
                            <span className="font-pixel text-[5px] text-white/40">PWR</span>
                         </div>
                      </div>
                   </div>

                   {/* Controls Section */}
                   <div className="flex flex-col gap-10">
                      <div className="flex justify-between items-start">
                         {/* D-Pad */}
                         <div className="relative w-24 h-24">
                            <div className="absolute inset-0 flex items-center justify-center">
                               <div className="w-20 h-8 bg-[#1A1A1A] border-2 border-black rounded-sm shadow-inner"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center rotate-90">
                               <div className="w-20 h-8 bg-[#1A1A1A] border-2 border-black rounded-sm shadow-inner"></div>
                            </div>
                         </div>

                         {/* Buttons A & B */}
                         <div className="flex gap-6 -rotate-[25deg] translate-y-4">
                            <div className="flex flex-col items-center gap-2">
                               <div className="w-12 h-12 bg-[#C02033] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none cursor-pointer"></div>
                               <span className="font-pixel text-[7px] opacity-40 font-bold">A</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                               <div className="w-12 h-12 bg-[#C02033] rounded-full border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none cursor-pointer"></div>
                               <span className="font-pixel text-[7px] opacity-40 font-bold">B</span>
                            </div>
                         </div>
                      </div>

                      {/* Select/Start Buttons */}
                      <div className="flex justify-center gap-4 -rotate-[25deg] mb-10">
                         <div className="w-14 h-4 bg-black/20 rounded-full border-2 border-black/10 flex flex-col items-center">
                            <div className="w-10 h-2 bg-black/40 rounded-full mt-1"></div>
                            <span className="font-pixel text-[5px] mt-2 opacity-30 font-bold">SELECT</span>
                         </div>
                         <div className="w-14 h-4 bg-black/20 rounded-full border-2 border-black/10 flex flex-col items-center">
                            <div className="w-10 h-2 bg-black/40 rounded-full mt-1"></div>
                            <span className="font-pixel text-[5px] mt-2 opacity-30 font-bold">START</span>
                         </div>
                      </div>
                   </div>
                   
                   {/* Logo on Device */}
                   <div className="absolute bottom-8 right-12 opacity-20 rotate-[-15deg]">
                      <span className="font-pixel text-[12px] font-black text-black tracking-tight">REDPIXEL</span>
                   </div>
                </div>

                {/* Floating Elements Around Device */}
                <div className="absolute -top-12 -right-12 w-32 h-32 border-2 border-black bg-white p-2 shadow-xl hover:-translate-y-4 transition-transform cursor-pointer" style={{ transform: 'translateZ(120px)' }}>
                   <img src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover grayscale" alt="Float1" />
                   <div className="absolute bottom-1 right-1 font-pixel text-[5px] bg-black text-white px-1">IMG_SRC_01</div>
                </div>

                <div className="absolute bottom-20 -left-20 w-40 h-24 border-2 border-black bg-white p-2 shadow-2xl hover:translate-x-4 transition-transform cursor-pointer" style={{ transform: 'translateZ(80px)' }}>
                   <img src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="Float2" />
                   <div className="absolute -top-2 left-2 font-pixel text-[5px] bg-red-600 text-white px-2 py-1">TEXTURE_SCAN_v1</div>
                </div>

                {/* Growth Metric positioned like a technical label */}
                <div className="absolute -bottom-8 right-20 bg-black text-white p-6 border-t-4 border-red-600 shadow-xl" style={{ transform: 'translateZ(150px)' }}>
                   <div className="flex items-center gap-3">
                      <span className="text-3xl font-black">132%</span>
                      <span className="text-red-500 text-xl font-bold">↗</span>
                   </div>
                   <div className="font-pixel text-[6px] uppercase tracking-widest opacity-60">STRATEGIC_GROWTH</div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Footer Info Bar */}
      <div className="absolute bottom-10 left-8 right-8 lg:left-20 lg:right-20 flex flex-col md:flex-row justify-between items-center border-t border-black/10 pt-8 gap-6">
        <div className="flex gap-12 items-center">
           <div className="flex flex-col">
              <span className="font-pixel text-[6px] opacity-30 uppercase">Time_Index</span>
              <span className="font-pixel text-[10px] font-bold">{time}</span>
           </div>
           <div className="flex flex-col">
              <span className="font-pixel text-[6px] opacity-30 uppercase">Render_Core</span>
              <span className="font-pixel text-[10px] font-bold">CGI_STATION_v9.2</span>
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