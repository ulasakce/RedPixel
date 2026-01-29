import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-[#F8F9FA] relative overflow-hidden">
      <div className="container px-6 lg:px-16">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6">
             <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-[#E31E24]"></div>
                <span className="text-[9px] font-bold text-[#E31E24] tracking-[0.5em] uppercase">Studio_Profile_v8</span>
             </div>
             
             <h2 className="text-5xl lg:text-[5.5vw] font-bold uppercase tracking-tighter leading-[0.95] mb-12 text-black">
                RedPixel is a <br /><span className="text-outline-red">Visual Lab.</span>
             </h2>

             <div className="space-y-10 max-w-lg">
                <p className="text-xl lg:text-2xl font-light leading-snug uppercase tracking-tight text-black">
                   We architect immersive visual experiences where <span className="text-[#E31E24] font-medium">technical physics</span> and high-end art collide.
                </p>
                <p className="text-base text-black/40 font-medium uppercase leading-relaxed tracking-tight">
                   Specializing in CGI for luxury automotive, premium horology, and cinematic architectural visualization. Our pipeline is built on Unreal Engine 5, Houdini, and the pursuit of the perfect frame.
                </p>
             </div>
          </div>

          <div className="col-12 col-lg-6">
             <div className="row g-4">
                {[
                  { label: "RENDER_NODES", value: "CLOUD_SYNC" },
                  { label: "NATIVE_RES", value: "12K_CINEMA" },
                  { label: "PIPELINE", value: "UE5_STABLE" },
                  { label: "STATUS", value: "OPERATIONAL" }
                ].map((stat, i) => (
                  <div key={i} className="col-6">
                    <div className="glass-panel p-10 rounded-[35px] flex flex-col justify-between aspect-square hover:bg-black hover:text-white transition-all duration-700 group shadow-lg border-[#E31E24]/5 hover:border-[#E31E24]/30">
                       <span className="text-[9px] font-bold text-[#E31E24]/40 group-hover:text-[#E31E24] tracking-[0.4em] uppercase">{stat.label}</span>
                       <span className="text-2xl lg:text-3xl font-bold uppercase tracking-tighter group-hover:text-[#E31E24]">{stat.value}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-24 flex flex-wrap gap-8 items-center justify-between opacity-20 border-t border-black/5 pt-12">
           {["UE5", "HOUDINI", "OCTANE", "C4D", "BLENDER"].map(tech => (
             <span key={tech} className="font-bold text-[10px] uppercase tracking-[0.5em] hover:text-[#E31E24] hover:opacity-100 transition-all cursor-default">{tech}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

export default About;