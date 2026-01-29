
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

// Expanded Simulated Instagram Feed for @redpixelcgi
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
  },
  {
    title: "ORCHID_ROBOTICS",
    category: "CHARACTER_VFX",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "12M", engine: "Octane", renderTime: "24H", status: "SYNCED" }
  },
  {
    title: "ABSTRACT_GEOMETRY_09",
    category: "MOTION_GFX",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    tag: '#Exploration',
    isMyProject: false,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "1.2M", engine: "C4D", renderTime: "04H", status: "SYNCED" }
  },
  {
    title: "RENDER_FARM_BETA",
    category: "INFRASTRUCTURE",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "N/A", engine: "Server_Node", renderTime: "Continuous", status: "ONLINE" }
  },
  {
    title: "COSMIC_DUST_SIM",
    category: "VFX_PARTICLES",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1200",
    tag: '#MyProject',
    isMyProject: true,
    igLink: "https://instagram.com/redpixelcgi/",
    specs: { polyCount: "100M_Particles", engine: "Houdini", renderTime: "72H", status: "SYNCED" }
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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(p => filter === 'ALL' || p.tag === filter);

  useEffect(() => {
    if (selected) document.body.classList.add('modal-open');
    else document.body.classList.remove('modal-open');
  }, [selected]);

  return (
    <section id="work" className="bg-[#FFFFFF] py-40 border-t-8 border-black/5 relative min-h-[800px]">
      <div className="container">
        
        {/* Sync Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
           <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 ${isSyncing ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`}></div>
                <span className="font-pixel text-[9px] text-black/40 tracking-[0.4em] font-bold uppercase">
                  {isSyncing ? 'ACCESSING_INSTAGRAM_DATABASE...' : 'FETCH_COMPLETE: 100%_SYNC'}
                </span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-bold uppercase tracking-tighter leading-none text-black">
                @redpixelcgi <br />
                <span className="text-[#C02033]">Full_Feed.</span>
              </h2>
           </div>
           
           <div className="flex flex-wrap gap-4 p-2 bg-black/5 border-2 border-black rounded-2xl">
              {['ALL', '#MyProject', '#ClientWork'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`font-pixel text-[8px] px-10 py-4 rounded-xl transition-all uppercase font-bold ${filter === f ? 'bg-black text-white shadow-lg' : 'text-black/30 hover:text-black hover:bg-white'}`}
                >
                  {f}
                </button>
              ))}
           </div>
        </div>

        {isSyncing ? (
          <div className="py-40 flex flex-col items-center justify-center gap-12">
             <div className="w-24 h-24 border-8 border-black border-t-[#C02033] rounded-none animate-spin"></div>
             <p className="font-pixel text-[12px] text-black/40 uppercase tracking-[0.6em] animate-pulse">Establishing_Secure_IG_Link...</p>
          </div>
        ) : (
          <div className="row g-5 lg:g-6">
             {filteredProjects.map((item, i) => (
               <div key={i} className="col-12 col-md-6 col-lg-4">
                  <div 
                    onClick={() => setSelected(item)}
                    className="group relative cursor-pointer overflow-hidden tech-card rounded-2xl p-4 bg-white"
                  >
                     <div className="aspect-square overflow-hidden bg-[#E5E5E5] border-4 border-black rounded-xl relative">
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover transition-all duration-[1s] group-hover:scale-105" 
                          alt={item.title} 
                        />
                        
                        {/* Status Label */}
                        <div className={`absolute top-4 right-4 px-3 py-1 border-2 border-black font-pixel text-[6px] uppercase font-bold shadow-sm ${item.isMyProject ? 'bg-[#C02033] text-white' : 'bg-white text-black'}`}>
                           {item.isMyProject ? 'OWN_ASSET' : 'EXTERNAL'}
                        </div>

                        {/* Hover HUD */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
                           <span className="font-pixel text-[8px] text-white mb-4 tracking-widest uppercase">Inspect_Post_Metadata</span>
                           <div className="w-full h-[1px] bg-white/20 mb-4"></div>
                           <span className="font-pixel text-[6px] text-white/50 uppercase">Origin: INSTAGRAM_REELS</span>
                        </div>
                     </div>

                     <div className="pt-8 px-2">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold uppercase tracking-tighter text-black group-hover:text-[#C02033] transition-colors leading-none">{item.title}</h3>
                          <span className="font-pixel text-[8px] text-[#C02033] font-bold">{item.tag}</span>
                        </div>
                        <p className="font-pixel text-[6px] text-black/30 uppercase tracking-widest">{item.category}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        )}

        <div className="mt-40 p-20 border-8 border-dashed border-black/5 rounded-[3rem] text-center">
           <h3 className="text-4xl lg:text-6xl font-bold uppercase text-black mb-10 tracking-tighter">See_Every_Frame_Rendered.</h3>
           <a 
             href="https://instagram.com/redpixelcgi" 
             target="_blank" 
             className="inline-block bg-[#C02033] text-white font-pixel text-[12px] py-8 px-20 border-4 border-black hover:bg-black transition-all shadow-[15px_15px_0px_rgba(0,0,0,0.1)] uppercase font-bold"
           >
             Follow_RedPixel_on_IG
           </a>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-20">
           <div className="absolute inset-0 bg-white/80 backdrop-blur-xl" onClick={() => setSelected(null)}></div>
           
           <div className="relative w-full max-w-6xl bg-[#FFFFFF] border-8 border-black shadow-[40px_40px_0px_rgba(0,0,0,0.2)] flex flex-col lg:flex-row overflow-hidden max-h-[90vh]">
              <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative bg-black border-r-8 border-black">
                 <img src={selected.image} className="w-full h-full object-cover" alt="Detail" />
                 <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>
              </div>

              <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col">
                 <div className="flex justify-between items-start mb-12">
                    <div>
                       <span className="font-pixel text-[9px] text-[#C02033] mb-4 block uppercase font-bold tracking-[0.4em]">INSTAGRAM_FEED_SYNC // {selected.tag}</span>
                       <h2 className="text-5xl font-bold uppercase leading-none text-black tracking-tighter">{selected.title}</h2>
                    </div>
                    <button onClick={() => setSelected(null)} className="text-black/20 hover:text-[#C02033] transition-all font-pixel text-[14px]">[X]</button>
                 </div>

                 <div className="space-y-10 flex-grow">
                    <div className="p-6 bg-black/5 border-l-8 border-[#C02033]">
                      <p className="text-xl text-black font-bold uppercase leading-tight tracking-tight">
                        CGI ARCHITECTURE CREATED FOR THE @REDPIXELCGI LABORATORY. 
                        PIPELINE FOCUS: {selected.specs.engine} HIGH-FIDELITY ASSETS.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                       <div className="p-6 border-4 border-black/5 bg-white">
                          <div className="font-pixel text-[7px] text-[#C02033] uppercase font-bold mb-3">Complexity</div>
                          <div className="text-2xl font-bold text-black">{selected.specs.polyCount}</div>
                       </div>
                       <div className="p-6 border-4 border-black/5 bg-white">
                          <div className="font-pixel text-[7px] text-[#C02033] uppercase font-bold mb-3">Sync_Status</div>
                          <div className="text-2xl font-bold text-green-600">{selected.specs.status}</div>
                       </div>
                    </div>
                 </div>

                 <div className="pt-16 mt-auto border-t-4 border-black/5">
                    <a 
                       href={selected.igLink}
                       target="_blank"
                       className="w-full bg-black text-white font-bold text-xl py-6 text-center border-4 border-black shadow-[10px_10px_0px_#C02033] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase block"
                    >
                       View_Full_Post
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
