import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  category: string;
  image: string;
  tag: string;
  isMyProject: boolean;
  igLink: string;
  specs: {
    polyCount: string;
    engine: string;
    renderTime: string;
    status: string;
  }
}

const instagramFeed: Project[] = [
  {
    title: "VIRTUAL_SNEAKER_v1",
    category: "PRODUCT_CGI",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "2.4M", engine: "Octane", renderTime: "12H", status: "SYNCED" }
  },
  {
    title: "NEO_MELBOURNE_SKY",
    category: "ENV_DESIGN",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "45M", engine: "UE5.4", renderTime: "Realtime", status: "SYNCED" }
  },
  {
    title: "FLUID_MORPH_DYNAMICS",
    category: "VFX_SIM",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "Infinite", engine: "Houdini", renderTime: "48H", status: "SYNCED" }
  },
  {
    title: "CYBER_WATCH_CORE",
    category: "CLIENT_WORK",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    tag: '#ClientWork',
    isMyProject: false,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "8.1M", engine: "Redshift", renderTime: "18H", status: "SYNCED" }
  }
];

const WorkGrid: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(true);
  const [filter, setFilter] = useState<'ALL' | '#MyProject' | '#ClientWork'>('ALL');
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(instagramFeed);
      setIsSyncing(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(p => filter === 'ALL' || p.tag === filter);

  return (
    <section id="work" className="bg-[#FFFFFF] py-40 relative min-h-[800px] border-t border-black/5">
      <div className="container-fluid px-8 lg:px-20">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
           <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-2 h-2 ${isSyncing ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="font-pixel text-[8px] text-black/30 tracking-[0.3em] uppercase">
                  {isSyncing ? 'ESTABLISHING_DATALINK...' : 'DATALINK_STABLE // @REDPIXELCGI'}
                </span>
              </div>
              <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                SELECTED<br />
                <span className="text-[#C02033]">OUTPUTS.</span>
              </h2>
           </div>
           
           <div className="flex gap-2 p-1 bg-[#F5F5F5] border border-black/10 rounded-lg">
              {['ALL', '#MyProject', '#ClientWork'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`font-pixel text-[7px] px-6 py-3 rounded-md transition-all uppercase font-bold ${filter === f ? 'bg-black text-white' : 'text-black/40 hover:text-black'}`}
                >
                  {f}
                </button>
              ))}
           </div>
        </div>

        {isSyncing ? (
          <div className="py-40 flex flex-col items-center justify-center gap-8">
             <div className="w-12 h-[2px] bg-black animate-[loading_1.5s_infinite]"></div>
             <p className="font-pixel text-[8px] text-black/30 uppercase tracking-widest">Accessing_Mainframe</p>
          </div>
        ) : (
          <div className="row g-6 lg:g-8">
             {filteredProjects.map((item, i) => (
               <div key={i} className="col-12 col-md-6">
                  <div 
                    onClick={() => setSelected(item)}
                    className="group relative cursor-pointer overflow-hidden border border-black/5 bg-white p-2"
                  >
                     <div className="aspect-[16/10] overflow-hidden bg-[#EFEFEF] relative">
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover transition-all duration-[1.5s] grayscale group-hover:grayscale-0 group-hover:scale-105" 
                          alt={item.title} 
                        />
                        
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <span className="bg-white text-black font-pixel text-[8px] px-8 py-4 uppercase font-bold">Inspect_Project</span>
                        </div>
                     </div>

                     <div className="py-8 px-4 flex justify-between items-center">
                        <div>
                          <h3 className="text-4xl font-black uppercase tracking-tighter text-black mb-1">{item.title}</h3>
                          <p className="font-pixel text-[7px] text-black/30 uppercase tracking-widest">{item.category}</p>
                        </div>
                        <div className="flex flex-col items-end">
                           <span className="font-pixel text-[7px] text-[#C02033] mb-1 font-bold">{item.tag}</span>
                           <span className="font-pixel text-[6px] text-black/20 uppercase">Core: {item.specs.engine}</span>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 lg:p-20">
           <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" onClick={() => setSelected(null)}></div>
           
           <div className="relative w-full max-w-7xl bg-white border border-black/10 flex flex-col lg:flex-row overflow-hidden max-h-[90vh] shadow-2xl">
              <div className="w-full lg:w-2/3 h-[40vh] lg:h-auto relative bg-black">
                 <img src={selected.image} className="w-full h-full object-cover" alt="Detail" />
              </div>

              <div className="w-full lg:w-1/3 p-12 lg:p-16 flex flex-col bg-white">
                 <div className="flex justify-between items-start mb-16">
                    <div>
                       <span className="font-pixel text-[7px] text-[#C02033] mb-4 block uppercase font-bold tracking-widest">METADATA // SYNC_0{selected.tag === '#MyProject' ? '1' : '2'}</span>
                       <h2 className="text-5xl font-black uppercase leading-[0.85] text-black tracking-tighter">{selected.title}</h2>
                    </div>
                    <button onClick={() => setSelected(null)} className="font-pixel text-[12px] hover:text-red-600 transition-all">[X]</button>
                 </div>

                 <div className="space-y-12 flex-grow">
                    <div className="p-8 bg-[#F5F5F5] border-l-4 border-black">
                      <p className="text-xl text-black font-bold uppercase leading-tight tracking-tight">
                        FULL CINEMATIC PIPELINE DEPLOYED. FOCUSING ON HIGH-FIDELITY ASSETS AND VOLUMETRIC SIMULATIONS.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div>
                          <div className="font-pixel text-[6px] text-black/30 uppercase mb-2">Complexity</div>
                          <div className="text-2xl font-black text-black">{selected.specs.polyCount}</div>
                       </div>
                       <div>
                          <div className="font-pixel text-[6px] text-black/30 uppercase mb-2">Platform</div>
                          <div className="text-2xl font-black text-black">{selected.specs.engine}</div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-20">
                    <a 
                       href={selected.igLink}
                       target="_blank"
                       className="w-full bg-black text-white font-bold text-lg py-6 text-center hover:bg-red-600 transition-all uppercase block"
                    >
                       View_on_Instagram
                    </a>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default WorkGrid;