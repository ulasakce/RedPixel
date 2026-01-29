
import React from 'react';

const Services: React.FC = () => {
  const abilities = [
    { title: "CGI_RENDER", spec: "8K_NATIVE", status: "READY", desc: "PHOTOREALISTIC TEXTURING AND VOLUMETRIC LIGHTING FOR GLOBAL BRANDS." },
    { title: "KINETIC_MOTION", spec: "DYNAMIC", status: "ACTIVE", desc: "FLUID ANIMATIONS THAT TRANSLATE COMPLEX ALGORITHMS INTO VISUALS." },
    { title: "VIRTUAL_PROD", spec: "REALTIME", status: "SYNCED", desc: "UE5 IMMERSIVE ENVIRONMENTS BUILT FOR VIRTUAL CINEMATOGRAPHY." },
    { title: "SIM_ARCH", spec: "VFX_v4", status: "STABLE", desc: "ADVANCED PARTICLE SYSTEMS AND FLUID DYNAMICS FOR HIGH-END CINEMA." }
  ];

  return (
    <section id="services" className="py-48 bg-[#FFFFFF] text-black relative overflow-hidden border-t-8 border-black/5">
      {/* Background large text */}
      <div className="absolute top-20 -right-40 text-[35vw] font-bold text-black opacity-[0.03] pointer-events-none uppercase leading-none select-none">
        CORE
      </div>

      <div className="container relative z-10">
        <div className="row g-5 mb-24 align-items-center">
           <div className="col-12 col-lg-6">
              <div className="flex items-center gap-6 mb-10">
                 <div className="w-20 h-[4px] bg-[#C02033]"></div>
                 <span className="font-pixel text-[10px] text-black/40 tracking-[0.5em] uppercase font-bold">Capabilities_v7.2</span>
              </div>
              <h2 className="text-6xl lg:text-9xl font-bold leading-[0.85] mb-12 uppercase tracking-tighter">
                Engineering <br /><span className="text-[#C02033]">The_Void.</span>
              </h2>
              <p className="text-black/50 text-3xl font-bold uppercase leading-tight max-w-lg mb-14 tracking-tight">
                 We merge Swiss precision with industrial CGI architectures to create visual impact.
              </p>
              
              <div className="p-10 border-4 border-black bg-[#E5E5E5] rounded-[2rem] shadow-[15px_15px_0px_#C02033] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 font-pixel text-[7px] text-black opacity-40">System_Heat: 42°C</div>
                 <div className="font-pixel text-[10px] text-black/40 mb-6 font-bold uppercase tracking-widest">Global_Compute_Load</div>
                 <div className="flex items-center gap-6">
                    <div className="flex-grow h-4 bg-white border-2 border-black rounded-full overflow-hidden">
                       <div className="h-full bg-[#C02033] w-[96%]"></div>
                    </div>
                    <span className="font-pixel text-[16px] text-black font-bold">96%</span>
                 </div>
              </div>
           </div>

           <div className="col-12 col-lg-6">
              <div className="row g-4 lg:g-5">
                 {abilities.map((ability, idx) => (
                   <div key={idx} className="col-12 col-md-6">
                      <div className="group h-full p-12 border-4 border-black bg-white hover:bg-[#C02033] hover:text-white transition-all duration-500 shadow-[8px_8px_0px_rgba(0,0,0,0.05)] hover:shadow-none">
                         <div className="flex justify-between mb-12">
                            <span className="font-pixel text-[9px] group-hover:text-white text-[#C02033] font-bold tracking-widest">[{ability.spec}]</span>
                            <div className="flex items-center gap-2">
                               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                               <span className="font-pixel text-[7px] group-hover:text-white/60 text-black/40">{ability.status}</span>
                            </div>
                         </div>
                         <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter leading-none">0{idx+1}_{ability.title}</h3>
                         <p className="opacity-60 text-lg font-bold uppercase leading-tight tracking-tight">
                           {ability.desc}
                         </p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
