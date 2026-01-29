
import React from 'react';

const About: React.FC = () => {
  const specs = [
    { label: "FOUNDED", value: "2018_AD" },
    { label: "LOCATION", value: "MELBOURNE_AU" },
    { label: "OS_CORE", value: "CREATIVE_V12" },
    { label: "STATUS", value: "OPERATIONAL" }
  ];

  return (
    <section id="about" className="py-40 bg-[#E5E5E5] relative overflow-hidden border-t-8 border-black/5">
      <div className="absolute top-0 right-0 font-pixel text-[12vw] opacity-[0.05] rotate-12 pointer-events-none uppercase">
        CONFIDENTIAL
      </div>

      <div className="container relative z-10">
        <div className="row g-5">
          
          <div className="col-12 col-lg-5">
             <div className="bg-white border-8 border-black p-10 shadow-[20px_20px_0px_#C02033] relative">
                <div className="absolute -top-10 left-8 h-12 bg-black text-white px-6 flex items-center">
                   <span className="font-pixel text-[8px] uppercase tracking-widest">FILE_ID: RED_STU_01</span>
                </div>

                <div className="border-b-4 border-black pb-8 mb-8">
                   <h2 className="text-5xl font-bold uppercase leading-none mb-3 tracking-tighter">
                     STUDIO <br /><span className="text-[#C02033]">PROFILE</span>
                   </h2>
                </div>

                <div className="space-y-6">
                   <p className="text-2xl uppercase font-bold text-black leading-tight tracking-tight">
                     REDPIXEL IS A HIGH-FIDELITY VISUAL LABORATORY WHERE PHYSICS AND ART COLLIDE.
                   </p>
                   <p className="text-xl uppercase text-black/40 font-bold leading-tight">
                     WE ARCHITECT EXPERIENCES THAT TRANSCEND TRADITIONAL MEDIA FROM OUR AUSTRALIAN HUB.
                   </p>
                </div>

                <div className="row g-4 mt-12">
                   {specs.map((spec) => (
                     <div key={spec.label} className="col-6">
                        <div className="p-4 border-4 border-black/5 bg-black/5">
                           <div className="font-pixel text-[6px] opacity-40 mb-2 uppercase">{spec.label}</div>
                           <div className="font-pixel text-[8px] font-bold">{spec.value}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="col-12 col-lg-7 pt-lg-12">
             <div className="row g-5">
                <div className="col-12 col-md-6">
                   <h3 className="font-pixel text-lg mb-8 text-[#C02033] font-bold">THE_PHILOSOPHY</h3>
                   <div className="space-y-8">
                      <div className="group border-l-4 border-black pl-6">
                         <div className="font-pixel text-[8px] mb-3 group-hover:text-[#C02033] font-bold">01 / PIXEL_PERFECTION</div>
                         <p className="text-lg uppercase opacity-60 font-bold leading-none">EVERY VERTEX IS CALCULATED FOR MAXIMUM IMPACT.</p>
                      </div>
                      <div className="group border-l-4 border-black pl-6">
                         <div className="font-pixel text-[8px] mb-3 group-hover:text-[#C02033] font-bold">02 / FUTURE_PROOFING</div>
                         <p className="text-lg uppercase opacity-60 font-bold leading-none">UTILIZING UE5 TO ENSURE YOUR BRAND LIVES IN TOMORROW.</p>
                      </div>
                   </div>
                </div>

                <div className="col-12 col-md-6 flex flex-col gap-6">
                   <div className="p-8 border-8 border-black bg-black text-white shadow-[12px_12px_0px_#C02033]">
                      <div className="font-pixel text-4xl mb-4 text-[#C02033]">85+</div>
                      <div className="font-pixel text-[8px] uppercase font-bold">GLOBAL_DEPLOYS</div>
                   </div>
                   <div className="p-8 border-8 border-black bg-white shadow-[12px_12px_0px_black]">
                      <div className="font-pixel text-4xl mb-4">12M+</div>
                      <div className="font-pixel text-[8px] uppercase font-bold">FRAMES_RENDERED</div>
                   </div>
                </div>
             </div>

             <div className="mt-20 p-8 border-4 border-dashed border-black/20 flex flex-wrap gap-6 items-center">
                <span className="font-pixel text-[8px] opacity-30 uppercase font-bold">Stack:</span>
                {["UE5", "HOUDINI", "OCTANE", "C4D", "BLENDER"].map(tech => (
                  <span key={tech} className="font-pixel text-[10px] opacity-60 hover:opacity-100 transition-all font-bold cursor-default">{tech}</span>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
