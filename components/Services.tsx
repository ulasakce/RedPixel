import React from 'react';

const Services: React.FC = () => {
  const abilities = [
    { title: "CGI_RENDER", spec: "8K_NATIVE", status: "READY", desc: "PHOTOREAL TEXTURING AND VOLUMETRIC LIGHTING FOR GLOBAL BRANDS." },
    { title: "KINETIC_MOTION", spec: "DYNAMIC", status: "ACTIVE", desc: "FLUID ANIMATIONS THAT TRANSLATE COMPLEX ALGORITHMS INTO VISUALS." },
    { title: "VIRTUAL_PROD", spec: "REALTIME", status: "SYNCED", desc: "UE5 IMMERSIVE ENVIRONMENTS BUILT FOR VIRTUAL CINEMA." },
    { title: "SIM_ARCH", spec: "VFX_v4", status: "STABLE", desc: "ADVANCED PARTICLE SYSTEMS AND FLUID DYNAMICS FOR FILM." }
  ];

  return (
    <section id="services" className="py-40 bg-white relative overflow-hidden">
      <div className="container px-6 lg:px-16">
        <div className="row g-5 align-items-center">
           <div className="col-12 col-lg-6 mb-12 lg:mb-0">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-[1px] bg-[#E31E24]"></div>
                 <span className="text-[9px] font-bold text-[#E31E24] tracking-[0.5em] uppercase">Capabilities_v8</span>
              </div>
              <h2 className="text-5xl lg:text-[6vw] font-bold leading-[0.9] mb-10 uppercase tracking-tighter">
                Engineering <br /><span className="text-outline-red">The_Void.</span>
              </h2>
              <p className="text-black/40 text-xl lg:text-2xl font-light uppercase leading-snug max-w-sm mb-12 tracking-tight">
                 We merge <span className="text-black">Swiss precision</span> with industrial CGI architectures to create visual impact.
              </p>
           </div>

           <div className="col-12 col-lg-6">
              <div className="row g-3 bg-black/5 p-3 rounded-[35px] border border-black/5">
                 {abilities.map((ability, idx) => (
                   <div key={idx} className="col-6">
                     <div className="bg-white p-8 hover:bg-black hover:text-white transition-all duration-700 flex flex-col justify-between aspect-square group rounded-[25px] border border-black/5 shadow-sm">
                        <div className="flex justify-between mb-4">
                           <span className="text-[9px] font-bold text-[#E31E24] group-hover:text-red-400 tracking-widest">[{ability.spec}]</span>
                           <span className="text-[7px] font-bold opacity-30 uppercase group-hover:text-white/40">{ability.status}</span>
                        </div>
                        <div>
                           <h3 className="text-2xl lg:text-3xl font-bold mb-4 uppercase tracking-tighter leading-none">
                              <span className="text-[#E31E24] group-hover:text-white">0{idx+1}_</span><br/>{ability.title}
                           </h3>
                           <p className="opacity-40 group-hover:opacity-60 text-[10px] font-medium uppercase leading-relaxed">
                             {ability.desc}
                           </p>
                        </div>
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